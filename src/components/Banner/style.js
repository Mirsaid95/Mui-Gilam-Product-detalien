import styled from "@emotion/styled";
// import { theme } from "../../config/mui-config";
// export const Title = styled.h1`
//   font-weight: 700;
//   font-size: 30px;
//   line-height: 130%;
//   text-align: center;
//   color: #f9f9f9;

//   @media (max-width: ${theme.breakpoints.values.md}) {
//     font-weight: 700;
//     font-size: 60px;
//     line-height: 130%;
//     color: #f9f9f9;
//     max-width: 524px;
//     margin-bottom: 32px;
//     color: red;
//   }
// `;

export const Title = styled("h1")(({ theme }) => ({
  fontWeight: 700,
  fontSize: "30px",
  lineHeight: "130%",
  color: "#f9f9f9",
  marginBottom: "10px",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    fontWeight: 700,
    fontSize: "60px",
    lineHeight: "130%",
    color: "#f9f9f9",
    maxWidth: "524px",
    marginBottom: "32px",
    textAlign: "start",
  },
}));
