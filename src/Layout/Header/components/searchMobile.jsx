import React from "react";
import styled from "@emotion/styled";
import { Colors } from "../../../config/colors";
import { theme } from "../../../config/mui-config";
import { MobileSearchIcon } from "../../../assets/icon/Mobile-searchIcon";

const Input = styled.input`
  width: 100%;
  border: none;
  background-color: ${Colors.inputBg};
  padding: 6px 10px 6px 36px;
  outline-color: ${theme.palette.primary.main};
  border-radius: 5px;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #000;
    opacity: 0.5;
  }
`;
const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const IconWrapper = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const SearchMobile = ({ onChange }) => {
  return (
    <InputWrapper>
      <IconWrapper>
        <MobileSearchIcon />
      </IconWrapper>
      <Input onChange={onChange} placeholder="Поиск " />
    </InputWrapper>
  );
};
