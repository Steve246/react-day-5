import { useEffect, useState } from "react";

const ThemeModifier = (props) => {
  const [dark, setDark] = useState(false);

  // sama dengan componentDidMount dan ComponentDidUpdate

  useEffect(() => {
    document.title = `Theme ${dark ? "black" : "white"} `;

    return () => {
      console.log("komponen akana dipanggil (will unmount");
    };
  });

  return (
    <div style={{ backgroundColor: dark ? "black" : "white" }}>
      <p style={{ color: dark ? "white" : "black" }}>
        {" "}
        Color: {dark ? "black" : "white"}{" "}
      </p>
      <button onClick={() => setDark(!dark)}>
        set Theme {dark ? "white" : "black"}
      </button>
      {/* <button onClick={setOn}>set On {dark ? "white" : "black"}</button>

      <button onClick={setOff}>set Off {dark ? "white" : "black"}</button> */}

      <button onClick={props.onNavigate}> go to dummy view</button>
    </div>
  );
};

export default ThemeModifier;
