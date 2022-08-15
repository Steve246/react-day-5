import React, { Component } from "react";
import useJsonPlaceHolder from "./UseJsonPlaceholder";

const JsonPlaceHolder = () => {
  const { isLoading, posts, onCreatePost } = useJsonPlaceHolder();
  return (
    <div>
      <h1> {posts.title} </h1>
      <p> {posts.body} </p>
      <button disabled={isLoading} onClick={onCreatePost}>
        {" "}
        Create Post{" "}
      </button>
    </div>
  );
};

export default JsonPlaceHolder;
