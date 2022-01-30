import React from "react";

// styles
import { InputContainer, Input } from "./Input.styles";

const InputComponent = ({ placeholder }) => (
  <InputContainer>
    <Input placeholder={placeholder} />
  </InputContainer>
);
export default InputComponent;
