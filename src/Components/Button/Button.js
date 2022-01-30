import React from "react";
import { BtnContainer, Button } from "./Button.styles";

const Btn = ({ children, color, bgColor, onClick }) => (
  <BtnContainer>
    <Button color={color} background={bgColor} onClick={onClick}>
      {children}
    </Button>
  </BtnContainer>
);

export default Btn;
