import { Routes, Route } from "react-router-dom";

import React from "react";
import AllContact from "../component/AllContact";
import UsContact from "../component/UsContact";
import Home from "../component/Home";

const router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/All-Contact" element={<AllContact />} />
        <Route path="/Us-Contact" element={<UsContact />} />
      </Routes>
    </>
  );
};

export default router;
