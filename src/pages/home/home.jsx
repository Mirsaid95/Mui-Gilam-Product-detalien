import React from "react";
import { Banner } from "../../components/Banner";
import { Box, Container, Grid2, Stack, Typography, Link } from "@mui/material";
import { theme } from "../../config/mui-config";
import { Data } from "../../Data/data";
import { Card } from "../../components/Cards";
// import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Box bgcolor={theme.palette.primary.main}>
        <Container maxWidth={"xs"}>
          <Banner />
        </Container>
      </Box>
      <Box mt={"100px"}>
        <Container maxWidth={"xs"}>
          <Stack
            justifyContent={{ xs: "space-between", md: "start" }}
            gap={"32px"}
            alignItems={{ xs: "baseline", md: "center" }}
            direction={"row"}
          >
            <Typography mb={"29px"} variant="h2">
              Новинки
            </Typography>
            <Link
              fontWeight={{ xs: "400", md: "400" }}
              fontSize={{ xs: "14px", md: "18px" }}
              style={{ color: "#618C78" }}
              underline="always"
            >
              Все новинки
            </Link>
          </Stack>

          <Grid2 container justifyContent={"space-between"} spacing={"40px"}>
            {Data.slice(0, 4).map((item) => (
              <Grid2 size={{ sm: 12, md: 6, lg: 3 }} key={item.id}>
                <Box key={item.id}>
                  <Card
                    id={item.id}
                    new={item.new}
                    img={item.img}
                    title={item.title}
                    size={item.size}
                    location={item.location}
                    rating={item.raiting}
                    price={item.price}
                    instalment={item.instalment}
                  />
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>
      <Box mt={"100px"} mb={"100px"}>
        <Container maxWidth={"xs"}>
          <Stack
            justifyContent={{ xs: "space-between", md: "start" }}
            gap={"32px"}
            alignItems={{ xs: "baseline", md: "center" }}
            direction={"row"}
          >
            <Typography mb={"29px"} variant="h2">
              Скидки
            </Typography>
            <Link
              fontWeight={{ xs: "400", md: "400" }}
              fontSize={{ xs: "14px", md: "18px" }}
              style={{ color: "#618C78" }}
              underline="always"
            >
              Все скидки
            </Link>
          </Stack>

          <Grid2 container justifyContent={"space-between"} spacing={"40px"}>
            {Data.slice(4, 8).map((item) => (
              <Grid2 size={{ sm: 12, md: 6, lg: 3 }} key={item.id}>
                <Box key={item.id}>
                  <Card
                    id={item.id}
                    new={item.new}
                    img={item.img}
                    title={item.title}
                    size={item.size}
                    location={item.location}
                    rating={item.raiting}
                    price={item.price}
                    instalment={item.instalment}
                  />
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>
    </>
  );
};
