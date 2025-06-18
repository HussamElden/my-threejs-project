// Standard measurement units for ingredients
// Organized by category for better UX

export const MEASUREMENT_UNITS = {
  WEIGHT: [
    { value: 'g', label: 'Grams (g)', category: 'Weight' },
    { value: 'kg', label: 'Kilograms (kg)', category: 'Weight' },
    { value: 'oz', label: 'Ounces (oz)', category: 'Weight' },
    { value: 'lb', label: 'Pounds (lb)', category: 'Weight' },
  ],
  VOLUME: [
    { value: 'ml', label: 'Milliliters (ml)', category: 'Volume' },
    { value: 'l', label: 'Liters (l)', category: 'Volume' },
    { value: 'cup', label: 'Cups', category: 'Volume' },
    { value: 'tbsp', label: 'Tablespoons (tbsp)', category: 'Volume' },
    { value: 'tsp', label: 'Teaspoons (tsp)', category: 'Volume' },
    { value: 'fl oz', label: 'Fluid Ounces (fl oz)', category: 'Volume' },
  ],
  COUNT: [
    { value: 'piece', label: 'Pieces', category: 'Count' },
    { value: 'item', label: 'Items', category: 'Count' },
    { value: 'dozen', label: 'Dozen', category: 'Count' },
    { value: 'pack', label: 'Packs', category: 'Count' },
  ],
  COFFEE_SPECIFIC: [
    { value: 'shot', label: 'Shots (espresso)', category: 'Coffee' },
    { value: 'pump', label: 'Pumps (syrup)', category: 'Coffee' },
    { value: 'scoop', label: 'Scoops', category: 'Coffee' },
  ]
};

// Flattened array for easy iteration
export const ALL_UNITS = [
  ...MEASUREMENT_UNITS.WEIGHT,
  ...MEASUREMENT_UNITS.VOLUME,
  ...MEASUREMENT_UNITS.COUNT,
  ...MEASUREMENT_UNITS.COFFEE_SPECIFIC,
];

// Most commonly used units (for quick access)
export const COMMON_UNITS = [
  { value: 'ml', label: 'Milliliters (ml)' },
  { value: 'g', label: 'Grams (g)' },
  { value: 'piece', label: 'Pieces' },
  { value: 'shot', label: 'Shots (espresso)' },
  { value: 'pump', label: 'Pumps (syrup)' },
  { value: 'cup', label: 'Cups' },
  { value: 'tbsp', label: 'Tablespoons (tbsp)' },
  { value: 'tsp', label: 'Teaspoons (tsp)' },
];

// Helper function to get unit label by value
export const getUnitLabel = (unitValue) => {
  const unit = ALL_UNITS.find(u => u.value === unitValue);
  return unit ? unit.label : unitValue;
};

// Helper function to validate if a unit exists
export const isValidUnit = (unitValue) => {
  return ALL_UNITS.some(u => u.value === unitValue);
};

// Helper function to get units by category
export const getUnitsByCategory = (category) => {
  return ALL_UNITS.filter(unit => unit.category === category);
};

// Helper function to get all unique categories
export const getUnitCategories = () => {
  return [...new Set(ALL_UNITS.map(unit => unit.category))];
};

// Helper function to format units for dropdown with categories
export const getUnitsWithCategories = () => {
  const categories = getUnitCategories();
  return categories.map(category => ({
    category,
    units: getUnitsByCategory(category)
  }));
};

// Helper to get the display text for a unit (shows both value and label if different)
export const getUnitDisplayText = (unitValue) => {
  const unit = ALL_UNITS.find(u => u.value === unitValue);
  if (!unit) return unitValue; // Fallback for unknown units
  
  // If the value and label are very similar, just show label
  if (unit.label.toLowerCase().includes(unit.value.toLowerCase())) {
    return unit.label;
  }
  
  // Otherwise show both for clarity
  return `${unit.value} (${unit.label})`;
};

// Future feature: get units from database
// This function can be used to fetch units from the database in the future
export const fetchUnitsFromDatabase = async () => {
  try {
    const response = await fetch('/api/units');
    if (response.ok) {
      const dbUnits = await response.json();
      return dbUnits;
    }
    // Fallback to static units if API fails
    return ALL_UNITS;
  } catch (error) {
    console.warn('Failed to fetch units from database, using static units:', error);
    return ALL_UNITS;
  }
};
