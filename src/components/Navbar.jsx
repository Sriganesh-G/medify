import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { Button, Typography } from "@mui/material";
import logo from "../../public/assets/logo.png";
import "../App.css";
import Buttons from "./Buttons.jsx";

const Navbar = () => {
  return (
    <div style={{ height: "96px", width: "100%" }}>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "",
          alignItems: "center",
          // padding: "0px 20px 0px 50px",
          // pl: "50px",
          pr: "30px",
          height: "96px",
          width: "100%",
        }}
      >
        <Grid
          size={2.6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="Logo" />
          <Typography
            sx={{
              color: "#2AA8FF",
              pl: "5px",
              //  fontSize: "18px",
              fontWeight: "bold",
            }}
            variant="h6"
          >
            Medify
          </Typography>
        </Grid>
        <Grid size={1.33}>
          <Typography>Find Doctors</Typography>
        </Grid>
        <Grid size={1.33}>
          <Typography>Hospitals</Typography>
        </Grid>
        <Grid size={1.33}>
          <Typography>Medicines</Typography>
        </Grid>
        <Grid size={1.33}>
          <Typography>Surgeries</Typography>
        </Grid>
        <Grid size={1.36}>
          <Typography>Software for Provider</Typography>
        </Grid>
        <Grid
          size={1.33}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>Facilities</Typography>
        </Grid>
        <Grid size={1.33}>
          <Buttons value={"My Bookings"}></Buttons>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
