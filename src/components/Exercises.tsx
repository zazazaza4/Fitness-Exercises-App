import { Box, Stack, Typography } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";

import { IBodyParts, IExercise } from "../@types";

interface IExercisesProps {
  setExercises: Dispatch<SetStateAction<IExercise[]>>;
  bodyPart: IBodyParts;
  exercises: IExercise[];
}

export const Exercises: FC<IExercisesProps> = ({
  setExercises,
  bodyPart,
  exercises,
}) => {
  return (
    <Box
      id="exercises"
      sx={{
        mt: {
          lg: "110px",
        },
      }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{
          gap: { lg: "110px", xs: "50px" },
        }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.map((exercise, index) => (
          <p key={index}>{exercise.name}</p>
        ))}
      </Stack>
    </Box>
  );
};
