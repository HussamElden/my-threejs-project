import RecipeManagement from "../../components/RecipeManagement";
import { useAuth } from "../../lib/auth";
import { useEffect, useState } from "react";
import { Typography, Box, Alert } from "@mui/material";

export default function RecipesPage() {
  const { user, loading } = useAuth();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (!loading) {
      setAuthChecked(true);
    }
  }, [loading]);

  if (!authChecked || loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  // Check if user has permission (Admin or Manager)
  if (!user || (user.role !== "ADMIN" && user.role !== "MANAGER")) {
    return (
      <Box sx={{ mt: 4 }}>
        <Alert severity="error">
          Access denied. You need Admin or Manager privileges to access recipe management.
        </Alert>
      </Box>
    );
  }

  return <RecipeManagement />;
}
