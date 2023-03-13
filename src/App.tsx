import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import { ExerciseDetail, Home } from "./pages";
import { Footer, Navbar } from "./components";

export const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};
