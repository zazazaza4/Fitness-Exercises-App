import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";

import Logo from "../assets/images/Logo-1.png";

export const Footer: FC = () => {
  return (
    <Box mt="80px" pb={7} bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h5" pt="10px" mt="10px">
          Made with &#128157; by me
        </Typography>
      </Stack>
    </Box>
  );
};
