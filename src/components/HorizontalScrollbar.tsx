import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Dispatch, FC, SetStateAction, useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import { BodyPart } from "./BodyPart";
import { IBodyParts, IExercise } from "../@types";

import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

import styles from "../global.module.css";
import { ExerciseCard } from "./ExerciseCard";

interface IHorizontalScrollbarProps {
  data: IExercise[] | IBodyParts[];
  bodyPart?: IBodyParts;
  setBodyPart?: Dispatch<SetStateAction<IBodyParts>>;
  isBodyParts?: boolean;
}

export const HorizontalScrollbar: FC<IHorizontalScrollbarProps> = ({
  data,
  bodyPart,
  setBodyPart,
  isBodyParts = true,
}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item: IBodyParts | IExercise) => (
        <Box
          title={isBodyParts ? String(item) : (item as IExercise).name}
          key={isBodyParts ? (item as IBodyParts) : (item as IExercise).id}
          m="0 40px"
        >
          {isBodyParts ? (
            <BodyPart
              item={item as IBodyParts}
              setBodyPart={setBodyPart!}
              bodyPart={bodyPart!}
            />
          ) : (
            <ExerciseCard exercise={item as IExercise} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className={styles.rightArrow}>
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className={styles.leftArrow}>
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};
