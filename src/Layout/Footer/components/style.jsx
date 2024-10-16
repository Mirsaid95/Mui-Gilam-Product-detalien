import { theme } from "../../../config/mui-config";
import { IconButton, styled } from "@mui/material";

export const CustomMessageIcon = styled(IconButton)`
  color: #1d1d1d;
  opacity: 0.5;
  &:hover {
    color: ${theme.palette.primary.main};
    opacity: 1;
  }
`;
