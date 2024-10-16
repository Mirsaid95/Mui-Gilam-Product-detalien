import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { theme } from "../../config/mui-config";

export const RedButton = styled(Button)`
  background-color: ${theme.palette.secondary.main};
  color: #fff;
  padding: 13px 38px;
  border-radius: 10px;
  color: #fff;
  &:hover {
    background-color: ${theme.palette.secondary[600]};
  }

  
`;


// export const RedButton = styled(Button)(({ theme }) => ({
//   backgroundColor:"blue",
//   [theme.breakpoints.up('md')]: {
//     backgroundColor: 'blue',
//     backgroundColor: theme.palette.secondary.main,
//     color: '#fff',
//     padding: '13px 38px',
//     borderRadius: '10px',
  
//     '&:hover': {
//       backgroundColor: theme.palette.secondary[600],
//     },
//   },
// }));

