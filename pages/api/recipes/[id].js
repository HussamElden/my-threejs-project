import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    if (req.method === "GET") {
      // Get a specific recipe with its ingredients
      const recipe = await prisma.recipe.findUnique({
        where: { id: parseInt(id) },
        include: {
          product: true,
          ingredients: {
            include: {
              ingredient: true,
            },
          },
        },
      });

      if (!recipe) {
        return res.status(404).json({ error: "Recipe not found" });
      }

      res.status(200).json(recipe);
    } else if (req.method === "PUT") {
      // Update a recipe
      const { variant, ingredients } = req.body;

      if (!variant || !ingredients || !Array.isArray(ingredients)) {
        return res.status(400).json({ 
          error: "Variant and ingredients array are required" 
        });
      }

      // Validate that all ingredients exist
      const ingredientIds = ingredients.map(ing => ing.ingredientId);
      const existingIngredients = await prisma.ingredient.findMany({
        where: { id: { in: ingredientIds } },
      });

      if (existingIngredients.length !== ingredientIds.length) {
        return res.status(400).json({ error: "Some ingredients do not exist" });
      }

      // Update recipe with ingredients in a transaction
      const recipe = await prisma.$transaction(async (prisma) => {
        // Update the recipe
        await prisma.recipe.update({
          where: { id: parseInt(id) },
          data: { variant },
        });

        // Delete existing recipe ingredients
        await prisma.recipeIngredient.deleteMany({
          where: { recipeId: parseInt(id) },
        });

        // Create new recipe ingredients
        await Promise.all(
          ingredients.map(ing =>
            prisma.recipeIngredient.create({
              data: {
                recipeId: parseInt(id),
                ingredientId: ing.ingredientId,
                quantity: parseFloat(ing.quantity),
              },
            })
          )
        );

        // Return updated recipe with all related data
        return await prisma.recipe.findUnique({
          where: { id: parseInt(id) },
          include: {
            product: true,
            ingredients: {
              include: {
                ingredient: true,
              },
            },
          },
        });
      });

      res.status(200).json(recipe);
    } else if (req.method === "DELETE") {
      // Delete a recipe
      await prisma.$transaction(async (prisma) => {
        // Delete recipe ingredients first
        await prisma.recipeIngredient.deleteMany({
          where: { recipeId: parseInt(id) },
        });

        // Delete the recipe
        await prisma.recipe.delete({
          where: { id: parseInt(id) },
        });
      });

      res.status(200).json({ message: "Recipe deleted successfully" });
    } else {
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    console.error("Recipe API error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
