import { Box } from "@mui/material";
import { FC, useState } from "react";
import { HeroBanner, SearchExercises } from "../components";

export const Home: FC = () => (
  <Box>
    <HeroBanner />
    <SearchExercises />
  </Box>
);
