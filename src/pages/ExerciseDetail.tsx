import { Box } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IExercise, IVideoContent, IVideoFetch } from "../@types";
import {
  Detail,
  ExerciseVideos,
  Loader,
  SimilarExercises,
} from "../components";
import {
  BASE_URL,
  exerciseOptions,
  fetchData,
  youtubeOptions,
  YOUTUBE_SEARCH_URL,
} from "../utils/fetchData";

interface IExerciseDetailProps {}

export const ExerciseDetail: FC<IExerciseDetailProps> = () => {
  const [exerciseDetail, setExerciseDetail] = useState<IExercise>();
  const [exerciseVideos, setExerciseVideos] = useState<IVideoContent[]>([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState<
    IExercise[]
  >([]);
  const [equipmentExercises, setEquipmentExercises] = useState<IExercise[]>([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDetailData: IExercise = await fetchData(
        `${BASE_URL}/exercise/${id}`,
        exerciseOptions
      );

      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData: IVideoFetch = await fetchData(
        `${YOUTUBE_SEARCH_URL}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );

      const { contents } = exerciseVideosData;
      setExerciseVideos(contents);

      const targetMuscleExercisesData: IExercise[] = await fetchData(
        `${BASE_URL}/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData: IExercise[] = await fetchData(
        `${BASE_URL}/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <Loader />;

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />

      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};
