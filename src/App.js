import React from "react";
import GlobalStyles from "./GlobalStyles";
import PostCreate from "./Components/PostCreate/PostCreate";

export default function App() {
  return (
    <div>
      <GlobalStyles />
      <h1>Create Post</h1>
      <PostCreate />
    </div>
  );
}
