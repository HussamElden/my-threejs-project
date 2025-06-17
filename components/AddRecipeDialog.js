import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Typography,
  Box,
  Grid,
  Autocomplete,
} from "@mui/material";
import { Add as AddIcon, Delete as DeleteIcon } from "@mui/icons-material";

export default function AddRecipeDialog({ open, onClose, onRecipeAdded }) {
  const [formData, setFormData] = useState({
    productId: "",
    variant: "",
    ingredients: [{ ingredientId: "", quantity: "" }],
  });
  const [products, setProducts] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      fetchProducts();
      fetchIngredients();
    }
  }, [open]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      if (res.ok) {
        const data = await res.json();
        setProducts(data);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const fetchIngredients = async () => {
    try {
      const res = await fetch("/api/ingredient");
      if (res.ok) {
        const data = await res.json();
        setIngredients(data);
      }
    } catch (error) {
      console.error("Failed to fetch ingredients:", error);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients[index] = {
      ...updatedIngredients[index],
      [field]: value,
    };
    setFormData(prev => ({
      ...prev,
      ingredients: updatedIngredients,
    }));
  };

  const addIngredient = () => {
    setFormData(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, { ingredientId: "", quantity: "" }],
    }));
  };

  const removeIngredient = (index) => {
    if (formData.ingredients.length > 1) {
      const updatedIngredients = formData.ingredients.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        ingredients: updatedIngredients,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate form
      if (!formData.productId || !formData.variant) {
        alert("Please fill in all required fields");
        return;
      }

      const validIngredients = formData.ingredients.filter(
        ing => ing.ingredientId && ing.quantity
      );

      if (validIngredients.length === 0) {
        alert("Please add at least one ingredient");
        return;
      }

      const res = await fetch("/api/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: parseInt(formData.productId),
          variant: formData.variant,
          ingredients: validIngredients.map(ing => ({
            ingredientId: parseInt(ing.ingredientId),
            quantity: parseFloat(ing.quantity),
          })),
        }),
      });

      if (res.ok) {
        const newRecipe = await res.json();
        onRecipeAdded(newRecipe);
        handleClose();
      } else {
        const error = await res.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error("Failed to create recipe:", error);
      alert("Failed to create recipe");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({
      productId: "",
      variant: "",
      ingredients: [{ ingredientId: "", quantity: "" }],
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>Add New Recipe</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Product</InputLabel>
                <Select
                  value={formData.productId}
                  onChange={(e) => handleInputChange("productId", e.target.value)}
                  required
                >
                  {products.map((product) => (
                    <MenuItem key={product.id} value={product.id}>
                      {product.name} ({product.category})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Variant"
                value={formData.variant}
                onChange={(e) => handleInputChange("variant", e.target.value)}
                fullWidth
                margin="normal"
                required
                placeholder="e.g., Regular, Decaf, Sugar-Free"
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Ingredients
            </Typography>
            {formData.ingredients.map((ingredient, index) => (
              <Box key={index} sx={{ display: "flex", gap: 1, mb: 2, alignItems: "center" }}>
                <FormControl sx={{ minWidth: 200 }}>
                  <InputLabel>Ingredient</InputLabel>
                  <Select
                    value={ingredient.ingredientId}
                    onChange={(e) => handleIngredientChange(index, "ingredientId", e.target.value)}
                    required
                  >
                    {ingredients.map((ing) => (
                      <MenuItem key={ing.id} value={ing.id}>
                        {ing.name} ({ing.unit})
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  label="Quantity"
                  type="number"
                  value={ingredient.quantity}
                  onChange={(e) => handleIngredientChange(index, "quantity", e.target.value)}
                  sx={{ width: 120 }}
                  inputProps={{ min: 0, step: 0.1 }}
                  required
                />
                <IconButton
                  onClick={() => removeIngredient(index)}
                  disabled={formData.ingredients.length === 1}
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
            <Button
              startIcon={<AddIcon />}
              onClick={addIngredient}
              variant="outlined"
              size="small"
            >
              Add Ingredient
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? "Creating..." : "Create Recipe"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
