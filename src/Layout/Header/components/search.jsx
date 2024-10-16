import React from "react";
import logo from "../../../assets/img/logo.svg";
import { CloseIcon } from "../../../assets/icon/close-icon";
import {
  IconButton,
  Stack,
  Typography,
  Box,
  useMediaQuery,
  Drawer,
} from "@mui/material";
import { LocationIcon } from "../../../assets/icon/location-icon";
import { LogoLink } from "./style";
import { SearchInput } from "../../../components/search-input/serarch-input";
import { theme } from "../../../config/mui-config";
import MobileLogo from "../../../assets/img/mobileIcon.svg";
import { SearchMobile } from "./searchMobile";
import { useToggle } from "../../../components/Hooks/Ui/useToggle";
import { Drower } from "../../../assets/icon/drower";
import { NavbarLinks } from "../../../Data/Navber";
import { Link } from "react-router-dom";
import { HeaderButton } from "./header-button";

export const Search = () => {
  const md = useMediaQuery(`(min-width:${theme.breakpoints.values.md}px)`);
  const changeInput = (e) => {
    console.log(e.target.value);
  };
  const { close, isOpen, open } = useToggle();
  return (
    <>
      <Stack
        direction={"row"}
        gap={{ xs: "12px", md: "60px" }}
        alignItems={"center"}
        flexGrow={1}
      >
        <Stack gap={"16px"} alignItems={"baseline"} direction={"row"}>
          <IconButton
            onClick={open}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <Drower />
          </IconButton>
          <LogoLink to={"/"}>
            {md ? (
              <img style={{ verticalAlign: "bottom" }} src={logo} alt="logo" />
            ) : (
              <img
                style={{ verticalAlign: "bottom" }}
                src={MobileLogo}
                alt="img"
              />
            )}
          </LogoLink>
        </Stack>
        <Stack direction={"row"} gap="8px" alignItems={"center"}>
          <Box alignItems={"center"} display={{ xs: "none", md: "flex" }}>
            <IconButton>
              <LocationIcon />
            </IconButton>
            <Typography variant="body1">Алматы</Typography>
          </Box>
        </Stack>
        {md ? (
          <SearchInput onChange={changeInput} />
        ) : (
          <SearchMobile onChange={changeInput} />
        )}

        <Drawer open={isOpen} onClose={close} anchor="left">
          <Box bgcolor={"white"} p="30px" height="100vh" width={"300px"}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"start"}
            >
              <Stack mb={"20px"} gap={"20px"}>
                {NavbarLinks.map((item) => (
                  <Link
                    style={{ textDecoration: "none" }}
                    key={item.id}
                    to={"/"}
                  >
                    <Typography variant="body1">{item.name}</Typography>
                  </Link>
                ))}
              </Stack>
              <IconButton onClick={close} style={{ padding: "0px" }}>
                <CloseIcon />
              </IconButton>
            </Stack>
          </Box>
        </Drawer>
      </Stack>
    </>
  );
};
