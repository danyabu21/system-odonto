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

const RegisterRequest = () => {
  const { sidebarIsOpen } = useStore((store) => store.state);
  return (
    <S.RegisterRequest
      $sidebar={sidebarIsOpen}
      onSubmit={(e) => e.preventDefault()}
    >
      <Typography
        sx={{ fontFamily: "Roboto Slab , sans-serif", margin: "1rem 0" }}
        variant="h5"
        component="h2"
      >
        Criar nova solicitação
      </Typography>
      <div className="container">
        <TextField
          className="input-name"
          id="patient-name"
          label="Paciente"
          variant="outlined"
          size="small"
        />
      </div>
      <div className="container">
        <FormControl size="small">
          <InputLabel id="insurance-container">Convênio</InputLabel>
          <Select
            labelId="insurance-container"
            id="insurance-select"
            // value={age}
            label="Convênio"
            // onChange={handleChange}
            variant="outlined"
          >
            <MenuItem value={10}>Amil</MenuItem>
            <MenuItem value={20}>Bradesco</MenuItem>
            <MenuItem value={30}>Cassi</MenuItem>
          </Select>
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              slotProps={{ textField: { size: "small" } }}
              label="Data de solicitação"
            />
          </DemoContainer>
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              slotProps={{ textField: { size: "small" } }}
              label="Data prevista"
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <div className="container">
        <TextField
          className="input"
          id="
          support-protocol"
          label="Protocolo"
          variant="outlined"
          size="small"
        />
        <TextField
          className="input"
          id="
          protocol"
          label="Medicamento de Suporte"
          variant="outlined"
          size="small"
        />
        <TextField
          className="input"
          id="
          cicle"
          label="Ciclo"
          variant="outlined"
          size="small"
        />
      </div>
      <div className="container">
        <Button className="submit-button" type="submit" variant="contained">
          Solicitar
        </Button>
      </div>
    </S.RegisterRequest>
  );
};

export default RegisterRequest;
