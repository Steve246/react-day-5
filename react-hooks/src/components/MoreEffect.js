import { useEffect, useState } from "react";
import { useDeps } from "../context/depContext";
import MoreEffectService from "../service/moreEffectService";

const MoreEffect = () => {
  console.log(useDeps());
  const {
    moreEffectService: { doPrint },
  } = useDeps();

  // const { doPrint } = MoreEffectService();
  // const [result, setResult] = useState();
  // useEffect(() => {
  //   setResult(doPrint("1"));
  //   console.log("1");
  // }, []);
  // return (
  //   <>
  //     <h1> Print : {result} </h1>
  //   </>
  // );

  // useEffect akan dipangil ketika ada perubahan pada Id

  const [result, setResult] = useState("");
  const [id, setId] = useState("");
  // useSTate melakukan perubahan re render ketika ada perubaha state
  // const { doPrint } = MoreEffectService();

  useEffect(() => {
    setResult(doPrint(id));
    console.log(() => console.log("call"));
    // deps => mengatur kapan useEffect akan dijalankan
    // jadi kalau teken id dia baru trigger berubah
  }, [id]);
  return (
    <>
      {/* <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      /> */}
      <button onClick={() => setId("10")}> Click </button>
      <h1> Print : {result}</h1>
    </>
  );
};

export default MoreEffect;
