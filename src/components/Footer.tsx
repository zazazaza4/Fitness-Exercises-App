import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";

import Logo from "../assets/images/Logo-1.png";

export const Footer: FC = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h5" pt="40px" mt="20px">
          Made with &heard; by me
        </Typography>
      </Stack>
    </Box>
  );
};
