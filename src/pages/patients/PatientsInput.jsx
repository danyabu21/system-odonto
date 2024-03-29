import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

const PatientsInput = () => {
  return (
    <Paper
      component="form"
      size="small"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      {" "}
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Nome, CPF ou cel do paciente"
        inputProps={{ "aria-label": "search google maps" }}
      />
    </Paper>
  );
};

export default PatientsInput;
