import React, { Component, useEffect, useState } from "react";
import { useDeps } from "../../shared/DepContext";

const useJsonPlaceHolder = () => {
  const { jsonPlaceHolderService } = useDeps();
  const [posts, setPosts] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    OnGetPostById();
  }, []);

  const OnGetPostById = async () => {
    setLoading(true);
    try {
      const response = await jsonPlaceHolderService.getPostById("1");
      // ini dia id nomor 1
      console.log(response);
      setPosts(response);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const onCreatePost = async () => {
    setLoading(true);
    try {
      const response = jsonPlaceHolderService.createPost(
        "Hello World",
        "ini baru"
      );
      console.log(response);

      setPosts(response);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  return {
    isLoading,
    posts,
    onCreatePost,
  };
};

export default useJsonPlaceHolder;
