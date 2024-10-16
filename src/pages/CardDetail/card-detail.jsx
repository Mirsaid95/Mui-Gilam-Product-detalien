import React from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Box,
  Rating,
  Container,
  Stack,
  IconButton,
  useMediaQuery,
  Button,
  Link,
} from "@mui/material";
import { Data } from "../../Data/data";
import mobileCarpet from "../../assets/img/mobile-detail-carpet.svg";
import { theme } from "../../config/mui-config";
import { Colors } from "../../config/colors";
import { SecondaryButton } from "../../components/secondary-button";
import { MobileCarpet } from "../../assets/icon/mobile-carpet";
import { MobileCarpetLiked } from "../../assets/icon/mobile-carpet-liked";
import MainCarpet from "../../assets/img/Main-carpets.svg";
import { DecrementIcon } from "../../assets/icon/decrement-icon";
import { PlusIcon } from "../../assets/icon/plus-icon";
import { WhatsupIcon } from "../../assets/icon/whatsup-icon";
export const CardDetail = () => {
  const { id } = useParams();

  const DataDetails = Data.find((data) => data.id === parseInt(id));
  const [active, setActive] = React.useState(false);
  const md = useMediaQuery(`(min-width:${theme.breakpoints.values.md}px)`);

  return (
    <>
      <Container maxWidth="xs">
        {DataDetails && (
          <>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              mb={"8px"}
              display={{ xs: "flex", md: "none" }}
            >
              <Rating value={DataDetails.raiting} precision={0.5} readOnly />
              <Typography variant="body2">Код товара: BAL733</Typography>
            </Stack>
            <Box display={{ xs: "none", md: "block" }}>
              <Box mt={"50px"} mb={"10px"}>
                <Typography lineHeight={"145%"} fontSize={"40px"} variant="h3">
                  {DataDetails.title}
                </Typography>
              </Box>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                mb={"16px"}
              >
                <Stack gap={"16px"} alignItems={"center"} direction={"row"}>
                  <Stack alignItems={"center"} direction={"row"} gap={"8px"}>
                    <Rating precision={0.5} value={DataDetails.raiting} readOnly />
                    <Link>0 отзывов</Link>
                  </Stack>
                  <Link href="#">В наличии: 10 штук</Link>
                </Stack>
                <Link>Код товара: BAL733</Link>
              </Stack>
              <hr />
            </Box>
            <Stack
              alignItems={{ lg: "center" }}
              justifyContent={"space-between"}
              direction={{ xs: "column", lg: "row" }}
              mt={"24px"}
              mb={{ xs: "50px", lg: "100px" }}
              gap={"40px"}
            >
              {md ? (
                <Box textAlign={"center"} mb={"24px"}>
                  <img style={{ width: "100%" }} src={MainCarpet} alt="#" />
                </Box>
              ) : (
                <Box textAlign={"center"} mb={"24px"}>
                  <img style={{ width: "100%" }} src={mobileCarpet} alt="#" />
                </Box>
              )}
              <Stack>
                <Stack
                  justifyContent={{ xs: "start", md: "center", lg: "start" }}
                  direction={"row"}
                  mb={"15px"}
                  gap={"23px"}
                >
                  <Stack>
                    <Typography
                      fontSize={{ xs: "12px", md: "14px" }}
                      color={Colors.grey}
                      mb={"4px"}
                      variant="body2"
                    >
                      Цена
                    </Typography>
                    <Typography
                      fontSize={{ xs: "18px", md: "40px" }}
                      variant="body1"
                    >
                      {DataDetails.price}
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography
                      fontSize={{ xs: "12px", md: "14px" }}
                      color={Colors.grey}
                      variant="body2"
                      mb={"4px"}
                    >
                      В рассрочку
                    </Typography>
                    <Typography
                      fontSize={{ xs: "18px", md: "40px" }}
                      color={theme.palette.primary.main}
                      variant="body1"
                    >
                      13.333
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  justifyContent={{ md: "center", lg: "start" }}
                  direction={"row"}
                >
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    mb={"16px"}
                    gap={"125px"}
                    justifyContent={{ md: "center" }}
                    display={{ xs: "none", md: "flex" }}
                  >
                    <Stack
                      direction={"row"}
                      gap={"3px"}
                      justifyContent={"center"}
                    >
                      <Typography color={Colors.grey} variant="body2">
                        Размер:
                      </Typography>
                      <Typography variant="body2">
                        {DataDetails.size}
                      </Typography>
                    </Stack>
                    <Stack direction={"row"}>
                      <Typography
                        color={Colors.grey}
                        variant="body2"
                        display={"flex"}
                        alignItems={"center"}
                      >
                        Количество:
                      </Typography>
                      <Stack direction={"row"} alignItems={"center"}>
                        <IconButton>
                          <DecrementIcon />
                        </IconButton>
                        <span>1</span>
                        <IconButton>
                          <PlusIcon />
                        </IconButton>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
                <Typography
                  variant="body1"
                  mb={"16px"}
                  display={{ xs: "block", md: "flex", lg: "none" }}
                  justifyContent={{ xs: "start", md: "center", lg: "start" }}
                >
                  {DataDetails.title}
                </Typography>
                <Stack
                  gap={"90px"}
                  mb={"32px"}
                  justifyContent={{ md: "center", lg: "start" }}
                  direction={"row"}
                >
                  <Typography
                    color={theme.palette.primary.main}
                    variant="body2"
                  >
                    Перейти к описанию
                  </Typography>
                  <Typography
                    color={theme.palette.primary.main}
                    variant="body2"
                  >
                    Подробнее о рассрочке
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  gap={"16px"}
                  justifyContent={"space-between"}
                  mb={"32px"}
                >
                  <Box width={"100%"}>
                    <SecondaryButton>В корзину</SecondaryButton>
                  </Box>
                  <IconButton
                    onClick={() => setActive(!active)}
                    style={{ padding: "0px" }}
                  >
                    {active ? <MobileCarpetLiked /> : <MobileCarpet />}
                  </IconButton>
                </Stack>
                <Stack
                  display={{ xs: "none", lg: "flex" }}
                  boxShadow={`0 0 7px 0 rgba(0, 0, 0, 0.1); background: #fff`}
                  py={"20px"}
                  pl={"20px"}
                  mb={"32px"}
                >
                  <Link mb={"20px"} href="#">
                    Возврат в течение 14 дней
                  </Link>
                  <Link mb={"20px"} href="#">
                    Среднее время доставки 2.5 дня
                  </Link>
                  <Link color={theme.palette.primary.main} href="#">
                    Подробнее
                  </Link>
                </Stack>
                <Box display={{ xs: "none", lg: "block" }}>
                  <Box mb={"16px"} width={"334px"}>
                    <Typography fontWeight={"500"} variant="body2">
                      Нужна помощь с выбором? Просто напишите нам в WhatsApp и
                      мы обязательно вам поможем!
                    </Typography>
                  </Box>
                  <Box width={"290px"}>
                    <Button
                      style={{ width: "100%" }}
                      startIcon={<WhatsupIcon />}
                      variant="contained"
                    >
                      Написать
                    </Button>
                  </Box>
                </Box>
              </Stack>
            </Stack>
          </>
        )}
      </Container>
    </>
  );
};
