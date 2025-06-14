import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    // Update ingredient
    try {
      const { name, stock, costPerUnit } = req.body;
      const { id } = req.query;

      const ingredientFromDb = await prisma.ingredient.findUnique({
        where: { id: parseInt(id) },
      });

      const newStock = ingredientFromDb.currentStock + parseFloat(stock);

      const ingredient = await prisma.ingredient.update({
        where: { id: parseInt(id) },
        data: {
          name,
          currentStock: newStock,
          costPerUnit: parseFloat(costPerUnit),
        },
      });
      res.status(200).json(ingredient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to update ingredient" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
