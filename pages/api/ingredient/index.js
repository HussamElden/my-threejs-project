import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Create ingredient
    try {
      const { name, unit, currentStock, cost: costPerUnit } = req.body;
      const ingredient = await prisma.ingredient.create({
        data: {
          name,
          unit: String(unit),
          costPerUnit: parseFloat(costPerUnit),
          currentStock: parseFloat(currentStock),
          wastePercentage: 0.0, // Default value
        },
      });
      res.status(201).json(ingredient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create ingredient" });
    }
  } else if (req.method === "GET") {
    // Get all ingredients
    try {
      const ingredients = await prisma.ingredient.findMany();
      res.status(200).json(ingredients);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to get ingredients" });
    }
  } else if (req.method === "DELETE") {
    // Delete ingredient
    try {
      const { id } = req.query;
      await prisma.ingredient.delete({
        where: { id: parseInt(id) },
      });
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to delete ingredient" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
