import { Box, Pagination, Stack, Typography } from "@mui/material";
import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";

import { IBodyParts, IExercise } from "../@types";
import { BASE_URL, exerciseOptions, fetchData } from "../utils/fetchData";
import { ExerciseCard } from "./ExerciseCard";

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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const exercisesPerPage: number = useMemo(() => 9, []);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData: IExercise[] = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(BASE_URL, exerciseOptions);
      } else {
        exercisesData = await fetchData(
          `${BASE_URL}bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

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
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};
