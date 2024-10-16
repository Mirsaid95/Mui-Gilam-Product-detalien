import { IconButton, Stack } from "@mui/material";
import React from "react";
import { UserIcon } from "../../../assets/icon/user-icon";
import { HeartIcon } from "../../../assets/icon/heart-icon";
import { CartIcon } from "../../../assets/icon/cart-icon";
import styled from "@emotion/styled";
import { theme } from "../../../config/mui-config";

const CustomIconButton = styled(IconButton)`
  color: #1d1d1d;
  &:hover {
    color: ${theme.palette.primary.main};
  }
`;

export const HeaderButton = () => {
  return (
    <Stack direction={"row"} gap={"20px"}>
      <CustomIconButton>
        <UserIcon />
      </CustomIconButton>
      <CustomIconButton>
        <HeartIcon />
      </CustomIconButton>
      <CustomIconButton>
        <CartIcon />
      </CustomIconButton>
    </Stack>
  );
};
