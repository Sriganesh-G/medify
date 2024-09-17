import { TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const SearchInputBar = () => {
  return (
    <TextField
      sx={{ backgroundColor: "#FAFBFE" }}
      id="outlined-basic"
      label="State"
      variant="outlined"
    />
  );
};

export default SearchInputBar;
