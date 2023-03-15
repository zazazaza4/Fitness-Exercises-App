import { Button, Stack, Typography } from "@mui/material";
import { FC, useMemo } from "react";

import { IExercise } from "../@types";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

import styles from "../global.module.css";

interface IDetailProps {
  exerciseDetail: IExercise;
}
export const Detail: FC<IDetailProps> = ({ exerciseDetail }) => {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;
  const nameUpperCase = useMemo(
    () => name[0].toUpperCase() + name.slice(1),
    [name]
  );

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
      }}
    >
      <img
        src={gifUrl}
        alt={nameUpperCase}
        loading="lazy"
        className={styles.detailImage}
      />
      <Stack
        sx={{
          gap: { lg: "35px", xs: "20px" },
        }}
      >
        <Typography variant="h3">{nameUpperCase}</Typography>
        <Typography>
          Exercises keep you strong. {nameUpperCase} is on eof the best
          exercises to target tour {target}. It will help you improve your mood
          and gain energy
        </Typography>
        {extraDetail.map(({ icon, name }) => (
          <Stack key={name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={icon}
                alt={name}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography textTransform="capitalize" variant="h5">
              {name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
