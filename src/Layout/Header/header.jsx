import { Box, Container, Stack,Typography } from "@mui/material";
import { Search } from "./components/search";
import { HeaderButton } from "./components/header-button";
import React from "react";
import { NavbarLinks } from "../../Data/Navber";
import { Link } from "react-router-dom";
import { Colors } from "../../config/colors";
import { Navbar } from "../../components/Navber/navbar";
import { theme } from "../../config/mui-config";

export const Header = () => {
  return (
    <>
<Container maxWidth="xs">
        <Stack
          py={{ xs: "14px", md: "31px" }}
          direction="row"
          alignItems={"center"}
          gap={{ xs: "33px", md: "61px" }}
        >
          <Search />
          <Box display={{ xs: "none", md: "block" }}>
            <HeaderButton />
          </Box>
        </Stack>
      </Container>
      <Box bgcolor={theme.palette.grey.main}>
        <Container maxWidth="xs">
          <Stack
            display={{ xs: "none", md: "flex" }}
            direction={"row"}
            justifyContent={"space-between"}
            py={"30px"}
          >
            {NavbarLinks.map((link) => (
              <Link
                style={{ textDecoration: "none" }}
                to={link.path}
                key={link.id}
              >
                <Typography variant="body1">{link.name}</Typography>
              </Link>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
};
