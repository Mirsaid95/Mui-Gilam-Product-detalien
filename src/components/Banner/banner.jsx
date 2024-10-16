import React from "react";
import { Title } from "./style";
import { Box, Stack, useMediaQuery } from "@mui/material";
import { theme } from "../../config/mui-config";
import { SecondaryButton } from "../secondary-button";
import Carpet from "../../assets/img/carpet.png";
import MobileCarpet from "../../assets/img/mobileCarpet.svg";
export const Banner = () => {
  const md = useMediaQuery(`(min-width:${theme.breakpoints.values.md}px)`);
  return (
    <>
      <Stack
        justifyContent={"space-between"}
        py={{ xs: "20px", md: "98px" }}
        direction={{ xs: "column", md: "row" }}
        alignItems={"center"}
      >
        <Box>
          <Title>Новая коллекция ковров Venetta</Title>
          <Box display={{ xs: "none", md: "inline-block" }}>
            <SecondaryButton>Смотреть все</SecondaryButton>
          </Box>
        </Box>
        <Stack gap={"30px"} direction={"row"}>
          {md ? (
            <Box>
              <img src={Carpet} alt="#" />
            </Box>
          ) : (
            <Box mb={"26px"}>
              <img src={MobileCarpet} alt="#" />
            </Box>
          )}
          <Box display={{ xs: "none", md: "flex" }}>
            <img src={Carpet} alt="#" />
          </Box>
        </Stack>
        <Box display={{ md: "none" }}>
          <SecondaryButton>Смотреть все</SecondaryButton>
        </Box>
      </Stack>
    </>
  );
};
