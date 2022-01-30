import React from "react";

import { Form as StyledForm } from "./Form.styles";

const Form = ({ children, submitHandler }) => (
  <StyledForm onSubmit={submitHandler}>{children}</StyledForm>
);
export default Form;
