import React from "react";
import { Typography } from "@mui/material";
import HeaderMessage from "../components/HeaderMessage";
import Navbar from "../components/Navbar";
import "../App.css";
const Home = () => {
  return (
    <div>
      {/* header-message */}
      <HeaderMessage />
      <Navbar />
    </div>
  );
};

export default Home;
