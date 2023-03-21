import { Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

import { IExercise } from "../@types";
import styles from "../global.module.css";

interface IExerciseCardProps {
  exercise: IExercise;
}

export const ExerciseCard: FC<IExerciseCardProps> = ({ exercise }) => {
  const { id, gifUrl, name, bodyPart, target } = exercise;

  function truncateString(str: string, limit: number): string {
    if (str.length > limit) {
      return str.substr(0, limit) + "...";
    }
    return str;
  }

  return (
    <Link className={styles.exerciseCard} to={`/exercises/${id}`}>
      <img src={gifUrl} alt={name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            mt: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {bodyPart}
        </Button>
        <Button
          sx={{
            mt: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="24px"
      >
        {truncateString(name, 20)}
      </Typography>
    </Link>
  );
};
