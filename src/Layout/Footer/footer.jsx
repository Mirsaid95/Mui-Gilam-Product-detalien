import {
  Box,
  Container,
  Stack,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import React from "react";
import { Colors } from "../../config/colors";
import { theme } from "../../config/mui-config";
import { MessageIcon } from "../../assets/icon/message-icon";
import { CustomMessageIcon } from "./components/style";
import { TelIcon } from "../../assets/icon/tel-icon";
import { WhatsupIcon } from "../../assets/icon/whatsup-icon";
import { InstagramIcon } from "../../assets/icon/instagram-icon";
import input from "../../assets/img/input.svg";
import { PlusIcon } from "../../assets/icon/plus-icon";

export const Footer = () => {
  return (
    <>
      <Box
        display={{ xs: "none", md: "block" }}
        bgcolor={Colors.backgroundNavbar}
        py={"40px"}
      >
        <Container maxWidth={"xs"}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack gap={"24px"}>
              <Box>
                <Typography
                  fontWeight={"700"}
                  fontSize={"18px"}
                  variant="body2"
                >
                  Каталог товаров
                </Typography>
              </Box>
              <Stack gap={"16px"}>
                <Link href="/">Ковры</Link>
                <Link href="/">Коврики</Link>
                <Link href="/">Дорожки</Link>
                <Link href="/">Для ванной</Link>
                <Link href="/">Особенные ковры</Link>
              </Stack>
            </Stack>
            <Stack gap={"24px"}>
              <Box>
                <Typography
                  fontWeight={"700"}
                  fontSize={"18px"}
                  variant="body2"
                >
                  Личный кабинет
                </Typography>
              </Box>
              <Stack gap={"16px"}>
                <Link href="/">Личный кабинет</Link>
                <Link href="/">Мои заказы</Link>
                <Link href="/">Избранное</Link>
              </Stack>
            </Stack>
            <Stack gap={"24px"}>
              <Box>
                <Typography
                  fontWeight={"700"}
                  fontSize={"18px"}
                  variant="body2"
                >
                  Центр поддержки
                </Typography>
              </Box>
              <Stack gap={"16px"}>
                <Link href="/">Контакты</Link>
                <Link href="/">Доставка</Link>
                <Link href="/">Возвраты</Link>
              </Stack>
            </Stack>
            <Stack gap={"24px"}>
              <Box>
                <Typography
                  fontWeight={"700"}
                  fontSize={"18px"}
                  variant="body2"
                >
                  Помощь и контакты
                </Typography>
              </Box>
              <Stack gap={"16px"}>
                <Stack direction={"row"} gap={"11px"} alignItems={"center"}>
                  <CustomMessageIcon>
                    <TelIcon />
                  </CustomMessageIcon>
                  <Link
                    color={theme.palette.primary.main}
                    style={{ opacity: "1" }}
                    href="tel:+77756576676"
                  >
                    +7 775 657 66 76
                  </Link>
                </Stack>
                <Stack
                  direction={"row"}
                  gap={"11px"}
                  alignItems={"center"}
                  mb={"16px"}
                >
                  <CustomMessageIcon>
                    <MessageIcon />
                  </CustomMessageIcon>
                  <Link
                    color={theme.palette.primary.main}
                    style={{ opacity: "1" }}
                    href="mailto:info@kilem.kz"
                  >
                    info@kilem.kz
                  </Link>
                </Stack>
                <Stack direction={"row"} gap={"16px"} alignItems={"center"}>
                  <CustomMessageIcon>
                    <WhatsupIcon />
                  </CustomMessageIcon>

                  <CustomMessageIcon>
                    <InstagramIcon />
                  </CustomMessageIcon>

                  <CustomMessageIcon>
                    <WhatsupIcon />
                  </CustomMessageIcon>
                </Stack>
              </Stack>
            </Stack>
            <Stack gap={"24px"}>
              <Box>
                <Typography
                  fontWeight={"700"}
                  fontSize={"18px"}
                  variant="body2"
                >
                  Рассылка
                </Typography>
              </Box>
              <Stack gap={"16px"}>
                <Typography
                  style={{ opacity: "0.5" }}
                  variant="body2"
                  maxWidth={"220px"}
                >
                  Подпишитесь, чтобы всегда быть в курсе наших новый акций
                </Typography>
              </Stack>
              <img src={input} alt="#" />
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box
        py={"17px"}
        bgcolor={theme.palette.grey[500]}
        display={{ xs: "block", md: "none" }}
      >
        <Container>
          <Box>
            <Stack
              mb={"16px"}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box>
                <a className="link" href="#">
                  Каталог товаров
                </a>
              </Box>
              <IconButton bgcolor={"red"}>
                <PlusIcon />
              </IconButton>
            </Stack>
            <Stack
              mb={"16px"}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box>
                <a className="link" href="#">
                  Личный кабинет
                </a>
              </Box>
              <IconButton bgcolor={"red"}>
                <PlusIcon />
              </IconButton>
            </Stack>
            <Stack
              mb={"16px"}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box>
                <a className="link" href="#">
                  Центр поддержки
                </a>
              </Box>
              <IconButton bgcolor={"red"}>
                <PlusIcon />
              </IconButton>
            </Stack>
            <Stack
              mb={"16px"}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box>
                <a className="link" href="#">
                  Помощь и контакты
                </a>
              </Box>
              <IconButton bgcolor={"red"}>
                <PlusIcon />
              </IconButton>
            </Stack>
            <Stack>
              <Box mb={"8px"}>
                <a className="link" href="#">
                  Новостная рассылка
                </a>
              </Box>
              <Typography mb={"16px"} color="#878787" variant="body2">
                Не пропустите обновлений или рекламных акций, подписавшись на
                нашу рассылку новостей.
              </Typography>
              <Box>
                <img src={input} alt="#" />
              </Box>
              <Stack direction={"row"} gap={"16px"} alignItems={"center"}>
                <CustomMessageIcon>
                  <WhatsupIcon />
                </CustomMessageIcon>

                <CustomMessageIcon>
                  <InstagramIcon />
                </CustomMessageIcon>

                <CustomMessageIcon>
                  <WhatsupIcon />
                </CustomMessageIcon>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};
