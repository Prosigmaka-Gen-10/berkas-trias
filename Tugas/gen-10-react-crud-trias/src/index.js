import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListMenu from "./component/menu/ListMenu";
import ListJenis from "./component/jenis/ListJenis";
import AddMenu from "./component/menu/AddMenu";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ListMenu />} />
          <Route path="add" element={<AddMenu />} />
        <Route path="jenis" element={<ListJenis />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
