import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { clientInstance } from "./shared/AxiosClient";
import { apiClientFactory } from "./service/ApiClientFactory";
import { DepsProvider } from "./shared/DepsContext";
import { serviceFactory } from "./service/ServiceFactory";

const apiClient = apiClientFactory(clientInstance);
const services = serviceFactory(apiClient);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DepsProvider services={services}>
      <App />
    </DepsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
