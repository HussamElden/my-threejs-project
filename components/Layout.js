// components/Layout.js
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import Link from "next/link";
import { useState, useEffect } from "react";
import LoginPopup from "./LoginPopup";
import { useAuth } from "../lib/auth"; // Assuming auth context is in lib/auth.js

export default function Layout({ children }) {
  const [loginOpen, setLoginOpen] = useState(false);

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link href="/" style={{ textDecoration: "none", color: "white" }}>
              The Brewery
            </Link>
          </Typography>
          <Button color="inherit" component={Link} href="/scene">
            3D Scene
          </Button>
          <Button color="inherit" component={Link} href="/menu">
            Menu
          </Button>
          <Button color="inherit" component={Link} href="/dashboard">
            Dashboard
          </Button>
          {/* Admin/Manager Only Features */}
          {(useAuth().user?.role === "ADMIN" || useAuth().user?.role === "MANAGER") && (
            <>
              <Button color="inherit" component={Link} href="/inventory">
                Inventory
              </Button>
              <Button color="inherit" component={Link} href="/recipes">
                Recipes
              </Button>
            </>
          )}
          <Button color="inherit" onClick={handleLoginOpen}>
            Login
          </Button>
          <LoginPopup open={loginOpen} onClose={handleLoginClose} />
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>{children}</Container>
    </>
  );
}
