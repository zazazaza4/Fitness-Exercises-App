import { Box } from "@mui/material";
import { FC, useState } from "react";

import { Exercises, HeroBanner, SearchExercises } from "../components";
import { IBodyParts, IExercise } from "../@types";

export const Home: FC = () => {
  const [bodyPart, setBodyPart] = useState<IBodyParts>(IBodyParts.ALL);
  const [exercises, setExercises] = useState<IExercise[]>([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
};
