import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Alert,
} from "@mui/material";

export default function AddIngredientDialog({
  open,
  onClose,
  refreshIngredients,
}) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
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
          unit: quantity,
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
        <TextField
          margin="dense"
          label="Unit"
          type="text"
          fullWidth
          variant="outlined"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          sx={{ mb: 2 }}
        />
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
