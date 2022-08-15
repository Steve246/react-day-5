const ChildrenPage1 = () => {
  useEffect(() => {
    return () => {
      console.log("unmounting children page 1");
    };
  });
  return <h2>Children Page 1</h2>;
};

export default ChildrenPage1;
