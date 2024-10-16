import React from "react";
import { RedButton } from "./style";

export const SecondaryButton = ({ children, type = "button" }) => {
  return (
    <RedButton style={{ width: "100%" }} type={type}>
      {children}
    </RedButton>
  );
};
