import React from "react";
import axios from "axios";

// styles
import { Wrapper } from "./PostCreate.style";

// components
import Btn from "../Button/Button";
import InputComponent from "../Input/Input";
import Form from "../Form/Form";
const PostCreate = () => {
  const onClickHandler = (e) => {
    console.log("from button");
  };
  return (
    <>
      <Form>
        <Wrapper className="form-group">
          <label>Title</label>
          {/* <input className="form-control" /> */}
          <InputComponent placeholder="Title" />
        </Wrapper>
        {/* <button className="btn btn-primary">Submit</button> */}
        <Btn color="white" bgColor="#abe" onClick={() => onClickHandler}>
          Submit
        </Btn>
      </Form>
    </>
  );
};

export default PostCreate;
