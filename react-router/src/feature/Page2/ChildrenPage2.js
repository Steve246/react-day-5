const ChildrenPage2 = () => {
  useEffect(() => {
    return () => {
      console.log("unmounting children page 2");
    };
  });
  return <h2>Children Page 2</h2>;
};

export default ChildrenPage2;
