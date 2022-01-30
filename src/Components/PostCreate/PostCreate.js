import React, { useState } from "react";
import axios from "axios";

// styles
import { Wrapper } from "./PostCreate.style";

// components
import Btn from "../Button/Button";
import InputComponent from "../Input/Input";
import Form from "../Form/Form";
const PostCreate = () => {
  const [title, setTitle] = useState("");
  
  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/posts", {
      title,
    });
    setTitle("");
  };
  const onClickHandler = (e) => {
    console.log("from button");
  };
  return (
    <>
      <Form onSubmit={submitHandler}>
        <Wrapper className="form-group">
          <label>Title</label>
          {/* <input className="form-control" /> */}
          <InputComponent
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
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
