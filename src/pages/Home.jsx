import React from "react";
import { Typography } from "@mui/material";
import HeaderMessage from "../components/HeaderMessage";
import Navbar from "../components/Navbar";
import "../App.css";
import HeroSection from "../components/HeroSection";
import SearchInputBar from "../components/SearchInputBar";
const Home = () => {
  return (
    <div>
      <HeaderMessage />
      <Navbar />
      <HeroSection />
      <SearchInputBar />
    </div>
  );
};

export default Home;
