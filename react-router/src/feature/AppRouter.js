import { Route, Routes } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import Page2 from "./Page1/Page1";
import Page1 from "./Page2/Page2";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="page1" element={<Page1 />}>
          <Route path="child-1" element={<ChildrenPage1 />} />
          <Route path="child-2" element={<ChildrenPage2 />} />
        </Route>
        <Route path="page2" element={<Page2 />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
