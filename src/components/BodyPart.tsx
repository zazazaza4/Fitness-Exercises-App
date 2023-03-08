import { Stack } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";

import { IBodyParts } from "../@types";

import styles from "../global.module.css";
import Icon from "../assets/icons/gym.png";
import Typography from "@mui/material/Typography";

interface IBodyPartProps {
  item: IBodyParts;
  bodyPart: IBodyParts;
  setBodyPart: Dispatch<SetStateAction<IBodyParts>>;
}

export const BodyPart: FC<IBodyPartProps> = ({
  bodyPart,
  item,
  setBodyPart,
}) => {
  return (
    <Stack
      alignItems="center"
      justifyItems="center"
      className={styles.bodyPartCard}
      justifyContent="center"
      sx={{
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20xp",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={Icon} alt="dumbbell" width="40px" height="40px" />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};
