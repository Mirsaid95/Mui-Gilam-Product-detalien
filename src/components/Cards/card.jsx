import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../config/mui-config";
import { Box, IconButton, Rating, Stack, Typography } from "@mui/material";
import { HeartIcon } from "../../assets/icon/heart-icon";
import { LikedHeartIcon } from "../../assets/icon/liked-heart-icon";
import { Link } from "react-router-dom";
import { Colors } from "../../config/colors";
const CardWrapper = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  position: relative;
`;

const NewCardBadge = styled.p`
  background-color: ${theme.palette.primary.main};
  color: #fff;
  padding: 3px 20px;
  position: absolute;
  top: 0px;
  left: 0;
`;
const TitleLink = styled.h3`
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: ${Colors.textColor};
  :hover {
    color: ${theme.palette.primary.main};
  }
`;
export const Card = ({
  new: newProduct,
  id,
  img,
  title,
  size,
  location,
  rating,
  price,
  instalment,
}) => {
  const [active, setActive] = React.useState(false);
  return (
    <>
      <CardWrapper>
        <Stack
          mb={"20px"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <div>{newProduct && <NewCardBadge>Новинка</NewCardBadge>}</div>
          <IconButton
            onClick={() => setActive(!active)}
            style={{ padding: "0px" }}
          >
            {active ? <LikedHeartIcon /> : <HeartIcon />}
          </IconButton>
        </Stack>
        <Box mb={"20px"} textAlign={"center"}>
          <img src={img} alt="img" />
        </Box>
        <Link style={{ textDecoration: "none" }} to={`/home/detail/${id}`}>
          <TitleLink
            className="titleLink"
            mb={"8px"}
            fontWeight={500}
            variant="body1"
          >
            {title}
          </TitleLink>
        </Link>
        <Typography mb={"8px"} variant="body2">
          Размер: {size}
        </Typography>
        <Typography mb={"8px"} variant="body2">
          Производитель: {location}
        </Typography>
        <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
          <Rating value={rating} precision={0.5} readOnly />
        </Stack>
      </CardWrapper>
    </>
  );
};
