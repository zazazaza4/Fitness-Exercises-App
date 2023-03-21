import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";

import { IExercise } from "../@types";
import { HorizontalScrollbar } from "./HorizontalScrollbar";
import { Loader } from "./Loader";

interface ISimilarExercisesProps {
  targetMuscleExercises: IExercise[];
  equipmentExercises: IExercise[];
}

export const SimilarExercises: FC<ISimilarExercisesProps> = ({
  targetMuscleExercises,
  equipmentExercises,
}) => {
  if (!targetMuscleExercises || !equipmentExercises) return <></>;

  return (
    <Box
      sx={{
        mt: { lg: "80px", xs: "0px" },
      }}
    >
      <Typography variant="h3" mb={8}>
        Exercises that target the same muscle group
      </Typography>
      <Stack
        direction="row"
        mb={8}
        sx={{
          p: "2",
          position: "relative",
        }}
      >
        {targetMuscleExercises ? (
          <HorizontalScrollbar
            data={targetMuscleExercises}
            isBodyParts={false}
          />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb={8}>
        Exercises that use the same equipment
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: "2",
          position: "relative",
        }}
      >
        {equipmentExercises ? (
          <HorizontalScrollbar data={equipmentExercises} isBodyParts={false} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};
