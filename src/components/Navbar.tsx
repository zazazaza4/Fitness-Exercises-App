import { FC } from "react";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

export const Navbar: FC = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        mt: {
          sm: "32px",
          xs: "20px",
        },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "48px",
            height: "48px",
            margin: "0 20px",
          }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3a1212",
            borderBottom: "3px solid #ff2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exerceses"
          style={{
            textDecoration: "none",
            color: "#3a1212",
          }}
        >
          Exercise
        </a>
      </Stack>
    </Stack>
  );
};
