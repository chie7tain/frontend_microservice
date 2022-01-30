import React from "react";

// styles
import { InputContainer, Input } from "./Input.styles";

const InputComponent = ({ placeholder, value, onChange }) => (
  <InputContainer>
    <Input placeholder={placeholder} title={value} onChange={onChange} />
  </InputContainer>
);
export default InputComponent;
