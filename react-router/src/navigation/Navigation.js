import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
const Navigation = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>Navigation</div>
      <div
        style={{
          width: "30%",
          backgroundColor: "green",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: "8px",
        }}
      >
        <h2> Navigation </h2>
        <Link to="page1"> Page 1 </Link>
        <Link to="page2"> Page 2 </Link>
      </div>

      {/* &nbsp; &nbsp; */}

      {/* <div>
        <Link to="page2"> Page 2 </Link>
      </div> */}

      <div style={{ padding: "80px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
