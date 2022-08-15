import { useEffect, useState } from "react";
import UseAsync from "../../shared/UseAsync";
import { useDeps } from "../../context/depContext";
// separate ui hook

const useMyHook = () => {
  const [result, setResult] = useState("");

  const [counter, setCounter] = useState(null);

  const { moreEffectService } = useDeps();

  const { execute, status, value, error } = UseAsync();

  useEffect(() => {
    onExec();
  }, [counter]);

  useEffect(() => {
    setResult(value);
    if (status === "failed") {
      window.alert(error);
    }
    //deps status dibutuhkan untuk kondisi error
  }, [value, status]);

  // console.log("Deps", useDeps());
  // console.log("more effect service", moreEffectServices);

  const add = () => {
    console.log(counter);
    setCounter(counter + 1);
    // onExec();
    // setResult(value);
  };

  const min = () => {
    console.log(counter);
    setCounter(counter - 1);
    // onExec();
    // setResult(value);
  };

  const onExec = async () => {
    if (counter !== null) {
      await execute(() => moreEffectService.doPrint(counter));
    }
  };

  return {
    result,
    status,
    add,
    min,
  };
};

export default useMyHook;
