import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";

import { IVideoContent } from "../@types";

import styles from "../global.module.css";

interface IExerciseVideosProps {
  exerciseVideos: IVideoContent[];
  name: string;
}

export const ExerciseVideos: FC<IExerciseVideosProps> = ({
  exerciseVideos,
  name,
}) => {
  if (!exerciseVideos) return <></>;

  return (
    <Box
      sx={{
        marginTop: { lg: "80px", xs: "20px" },
      }}
      p="20px"
    >
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" },
        }}
      >
        {exerciseVideos?.slice(0, 3).map(({ video }, index) => (
          <a
            key={index}
            className={styles.exerciseVideo}
            href={`https://www.youtube.com/watch?v=${video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={video.thumbnails ? video.thumbnails[0].url : ""}
              alt={video.title}
              loading="lazy"
            />
            <Box>
              <Typography variant="h5" color="#000">
                {video.title}
              </Typography>
              <Typography variant="h6" color="#ff2526">
                {video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};
