import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { IBodyParts, IExercise } from "../@types";

import { BASE_URL, exerciseOptions, fetchData } from "../utils/fetchData";
import { HorizontalScrollbar } from "./HorizontalScrollbar";

interface ISearchExercisesProps {
  setExercises: Dispatch<SetStateAction<IExercise[]>>;
  bodyPart: IBodyParts;
  setBodyPart: Dispatch<SetStateAction<IBodyParts>>;
}

export const SearchExercises: FC<ISearchExercisesProps> = ({
  bodyPart,
  setBodyPart,
  setExercises,
}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState<IBodyParts[]>([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData: IBodyParts[] = await fetchData<IBodyParts[]>(
        `${BASE_URL}/bodyPartList`,
        exerciseOptions
      );
      setBodyParts([IBodyParts.ALL, ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData: IExercise[] = await fetchData(
        BASE_URL,
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        sx={{
          fontSize: {
            lg: "44px",
            xs: "30px",
          },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            height: "76px",
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: {
              lg: "800px",
              xs: "250px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value.toLowerCase())
          }
          placeholder="Search"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}
      >
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};
