import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import MoreEffect from "./components/MoreEffect";
import ThemeModifier from "./components/ThemeModifier";
import DummyView from "./components/DummyView";
import { HookComponent } from "./components/HookComponent";
import { DepsProvider } from "./context/depContext";
import MoreEffectService from "./service/moreEffectService";
import MyHook from "./components/MyHook/MyHook";

const App = () => {
  // return (
  //   <DepsProvider
  //     services={{
  //       moreEffectService: MoreEffectService(),
  //     }}
  //   >
  //     <MoreEffect />
  //   </DepsProvider>
  // );

  return <MyHook />;
};

export default App;
