// pages/scene.js
import dynamic from "next/dynamic";
import { CircularProgress, Container, Typography, Box } from "@mui/material";

// Lazy-load ThreeScene without SSR (important for browser-only APIs)
const ThreeScene = dynamic(() => import("../components/ThreeScene"), {
  ssr: false,
  loading: () => (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="60vh"
    >
      <CircularProgress />
    </Box>
  ),
});

export default function ScenePage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        3D Coffee Experience
      </Typography>
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: 2,
          overflow: "hidden",
          height: "600px", // Or whatever fits your 3D scene
        }}
      >
        <ThreeScene />
      </Box>
    </Container>
  );
}
