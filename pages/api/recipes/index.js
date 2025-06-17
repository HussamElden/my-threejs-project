import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      // Get all recipes with their ingredients
      const recipes = await prisma.recipe.findMany({
        include: {
          product: true,
          ingredients: {
            include: {
              ingredient: true,
            },
          },
        },
        orderBy: [
          { product: { name: "asc" } },
          { variant: "asc" },
        ],
      });

      res.status(200).json(recipes);
    } else if (req.method === "POST") {
      // Create a new recipe
      const { productId, variant, ingredients } = req.body;

      if (!productId || !variant || !ingredients || !Array.isArray(ingredients)) {
        return res.status(400).json({ 
          error: "ProductId, variant, and ingredients array are required" 
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

      // Create recipe with ingredients in a transaction
      const recipe = await prisma.$transaction(async (prisma) => {
        // Create the recipe
        const newRecipe = await prisma.recipe.create({
          data: {
            productId: parseInt(productId),
            variant,
          },
        });

        // Create recipe ingredients
        const recipeIngredients = await Promise.all(
          ingredients.map(ing =>
            prisma.recipeIngredient.create({
              data: {
                recipeId: newRecipe.id,
                ingredientId: ing.ingredientId,
                quantity: parseFloat(ing.quantity),
              },
            })
          )
        );

        // Return recipe with all related data
        return await prisma.recipe.findUnique({
          where: { id: newRecipe.id },
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

      res.status(201).json(recipe);
    } else {
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    console.error("Recipes API error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
