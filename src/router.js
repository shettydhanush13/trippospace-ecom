import React from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/*" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
