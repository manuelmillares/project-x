import * as React from "react";
import {
    Routes,
    Route,
  } from "react-router-dom";

import Invest from "../components/Invest/Invest";
import Home from "../components/Home/Home";

export const MyRoutes = () => {
    return <Routes>
      <Route path="/" element={<Home />} />
      <Route path="invest" element={<Invest />} />
    </Routes>
};
