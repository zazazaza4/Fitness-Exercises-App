import { Stack } from "@mui/material";
import { FC } from "react";
import { InfinitySpin } from "react-loader-spinner";

export const Loader: FC = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <InfinitySpin color="gray" />
    </Stack>
  );
};
