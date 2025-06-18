import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  Divider,
  ListSubheader,
} from "@mui/material";
import { ALL_UNITS, MEASUREMENT_UNITS, getUnitsWithCategories } from "../lib/units";

export default function AddIngredientDialog({
  open,
  onClose,
  refreshIngredients,
}) {
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");
  const [currentStock, setCurrentStock] = useState("");
  const [cost, setCost] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    try {
      const response = await fetch("/api/ingredient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          unit: unit,
          currentStock: parseFloat(currentStock),
          cost: parseFloat(cost),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create ingredient");
      }

      onClose();
      refreshIngredients();
    } catch (err) {
      setError(err.message || "An error occurred");
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Ingredient</DialogTitle>
      <DialogContent>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <FormControl fullWidth margin="dense" sx={{ mb: 2 }}>
          <InputLabel>Unit</InputLabel>
          <Select
            value={unit}
            label="Unit"
            onChange={(e) => setUnit(e.target.value)}
          >
            {getUnitsWithCategories().map((categoryGroup) => [
              <ListSubheader key={categoryGroup.category} disableSticky>
                {categoryGroup.category}
              </ListSubheader>,
              ...categoryGroup.units.map((unitOption) => (
                <MenuItem key={unitOption.value} value={unitOption.value}>
                  {unitOption.label}
                </MenuItem>
              ))
            ])}
          </Select>
        </FormControl>
        <TextField
          margin="dense"
          label="Stock"
          type="number"
          fullWidth
          variant="outlined"
          value={currentStock}
          onChange={(e) => setCurrentStock(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          margin="dense"
          label="Cost"
          type="number"
          fullWidth
          variant="outlined"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          sx={{ mb: 2 }}
        />
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
