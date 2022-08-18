import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MyRouter from "./router/router";
import { useState } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
