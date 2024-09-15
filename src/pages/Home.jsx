import React from "react";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      {/* header-message */}
      <div
        style={{
          backgroundColor: "#2AA7FF",
          height: "40px",
          width: "100%",
          color: "#FFFFFF",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: { xs: "8px", sm: "12px", md: "16px" } }}>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </div>
      
    </div>
  );
};

export default Home;
