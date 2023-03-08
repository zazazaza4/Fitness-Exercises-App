import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Dispatch, FC, SetStateAction, useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import { BodyPart } from "./BodyPart";
import { IBodyParts } from "../@types";

import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

import styles from "../global.module.css";

interface IHorizontalScrollbarProps {
  data: IBodyParts[];
  bodyPart: IBodyParts;
  setBodyPart: Dispatch<SetStateAction<IBodyParts>>;
}

export const HorizontalScrollbar: FC<IHorizontalScrollbarProps> = ({
  data,
  bodyPart,
  setBodyPart,
}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box title={item} key={item} m="0 40px">
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
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
