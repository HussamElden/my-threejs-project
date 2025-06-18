import { ALL_UNITS, MEASUREMENT_UNITS, getUnitsWithCategories } from "../../../lib/units";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // In the future, this could query a database table for custom units
      // For now, return the static units
      res.status(200).json({
        units: ALL_UNITS,
        categories: getUnitsWithCategories(),
        measurementUnits: MEASUREMENT_UNITS
      });
    } catch (error) {
      console.error("Error fetching units:", error);
      res.status(500).json({ error: "Failed to fetch units" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
