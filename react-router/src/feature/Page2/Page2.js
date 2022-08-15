import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
  useEffect(() => {
    return () => {
      console.log("unmounting page 2");
    };
  });
  return <h2>Page 2</h2>;
};

export default Page2;
