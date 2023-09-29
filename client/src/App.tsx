import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

import Home from "./pages/HomePage";
import SchedulePage from "./pages/SchedulePage";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              FASTCO MERN STACK
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/schedule">
              Schedule
            </Button>
          </Toolbar>
        </AppBar>

        <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
          <Routes>
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
