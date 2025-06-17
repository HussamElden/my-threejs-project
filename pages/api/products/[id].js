import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    if (req.method === "GET") {
      // Get a specific product with its recipes and ingredients
      const product = await prisma.product.findUnique({
        where: { id: parseInt(id) },
        include: {
          recipes: {
            include: {
              ingredients: {
                include: {
                  ingredient: true,
                },
              },
            },
          },
        },
      });

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      res.status(200).json(product);
    } else if (req.method === "PUT") {
      // Update a product
      const { name, category } = req.body;

      const product = await prisma.product.update({
        where: { id: parseInt(id) },
        data: {
          name,
          category,
        },
        include: {
          recipes: {
            include: {
              ingredients: {
                include: {
                  ingredient: true,
                },
              },
            },
          },
        },
      });

      res.status(200).json(product);
    } else if (req.method === "DELETE") {
      // Delete a product (only if no sales exist)
      const salesCount = await prisma.sale.count({
        where: { productId: parseInt(id) },
      });

      if (salesCount > 0) {
        return res.status(400).json({ 
          error: "Cannot delete product with existing sales records" 
        });
      }

      // Delete all recipe ingredients first
      await prisma.recipeIngredient.deleteMany({
        where: {
          recipe: {
            productId: parseInt(id),
          },
        },
      });

      // Delete all recipes
      await prisma.recipe.deleteMany({
        where: { productId: parseInt(id) },
      });

      // Delete the product
      await prisma.product.delete({
        where: { id: parseInt(id) },
      });

      res.status(200).json({ message: "Product deleted successfully" });
    } else {
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    console.error("Product API error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
