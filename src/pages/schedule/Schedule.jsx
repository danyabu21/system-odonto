import React from "react";
import useStore from "../../stores/useStore";
import * as S from "./style";

import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Schedule = () => {
  const { sidebarIsOpen } = useStore((store) => store.state);
  return (
    <S.Schedule $sidebar={sidebarIsOpen} onSubmit={(e) => e.preventDefault()}>
      <Typography
        sx={{ fontFamily: "Roboto Slab , sans-serif", margin: "1rem 0" }}
        variant="h5"
        component="h2"
      >
        Agenda
      </Typography>
    </S.Schedule>
  );
};

export default Schedule;
