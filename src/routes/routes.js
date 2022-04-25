import * as React from "react";
import {
    Routes,
    Route,
  } from "react-router-dom";

import Invest from "../components/Invest/Invest";
import Home from "../components/Home/Home";
import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";
import HowItWorks from "../components/HowItWorks/HowItWorks";

export const MyRoutes = () => {
    return <Routes>
      <Route path="/" element={<Home />} />
      <Route path="invest" element={<Invest />} />
      <Route path="how-it-works" element={<HowItWorks />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
};
