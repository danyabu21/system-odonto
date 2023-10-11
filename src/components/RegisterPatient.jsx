import React from "react";
import useStore from "../stores/useStore";
import * as S from "./style";
import { styled } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField } from "@mui/x-date-pickers/DateField";
import dayjs from "dayjs";
import InputMask from "react-input-mask";

const RegisterPatient = () => {
  const { sidebarIsOpen, patientsData } = useStore((store) => store.state);
  const { onPatientRegister } = useStore((store) => store.actions);
  const { $D, $M, $y } = dayjs();
  const [form, setForm] = React.useState({
    name: "",
    insurance: "",
    insuranceNumber: "",
    cpf: "",
    birthDate: `${$D}/${$M}/${$y}`,
    age: "",
    cid: "",
    detail: "",
  });
  const [errorName, setErrorName] = React.useState(null);

  const submitRegister = (event) => {
    event.preventDefault();
    onPatientRegister(form);
    setForm({
      name: "",
      insurance: "",
      insuranceNumber: "",
      cpf: "",
      birthDate: `${$D}/${$M}/${$y}`,
      age: "",
      cid: "",
      detail: "",
    });
  };

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  return (
    <S.RegisterPatient
      $sidebar={sidebarIsOpen}
      onSubmit={(event) => submitRegister(event)}
    >
      <div>
        <div className="container">
          <TextField
            required
            error={errorName}
            className="input-name name-container"
            id="name"
            value={form.name}
            label="Nome completo"
            variant="outlined"
            size="small"
            onChange={handleChange}
            onBlur={() =>
              !form.name ? setErrorName(true) : setErrorName(false)
            }
          />
        </div>
        <div className="container">
          <FormControl size="small" required>
            <InputLabel id="insurance-container">Convênio</InputLabel>
            <Select
              labelId="insurance-container"
              id="insurance"
              value={form.insurance}
              label="Convênio"
              onChange={({ target }) =>
                setForm({ ...form, insurance: target.value })
              }
              variant="outlined"
            >
              <MenuItem value="AMIL">Amil</MenuItem>
              <MenuItem value="BRADESCO">Bradesco</MenuItem>
              <MenuItem value="CASSI">Cassi</MenuItem>
              <MenuItem value="FACHESF">Fachesf</MenuItem>
              <MenuItem value="GEAP">Geap</MenuItem>
              <MenuItem value="SASSEPE">Sassepe</MenuItem>
              <MenuItem value="SULAMERICA">Sulamerica</MenuItem>
            </Select>
          </FormControl>
          <TextField
            required
            className="input"
            id="insuranceNumber"
            label="Carteira do Convênio"
            variant="outlined"
            size="small"
            value={form.insuranceNumber}
            onChange={handleChange}
          />
          <TextField
            className="input cpf-container"
            required
            id="cpf"
            label="CPF"
            variant="outlined"
            size="small"
            value={form.cpf}
            onChange={handleChange}
            inputProps={{ maxLength: 11 }}
          />
        </div>
        <div className="container">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateField"]}>
              <DateField
                required
                sx={{ width: "100%" }}
                label="Data de Nascimento"
                format="DD/MM/YYYY"
                size="small"
                value={form.date}
                onChange={({ $D, $M, $y }) =>
                  setForm({ ...form, birthDate: `${$D}/${$M}/${$y}` })
                }
              />
            </DemoContainer>
          </LocalizationProvider>

          <TextField
            className="input"
            required
            id="age"
            label="Idade"
            variant="outlined"
            size="small"
            value={form.age}
            onChange={handleChange}
          />
          <TextField
            required
            className="input"
            id="cid"
            label="CID Primário"
            variant="outlined"
            size="small"
            value={form.cid}
            onChange={handleChange}
          />
        </div>
        <div className="container">
          <TextField
            id="detail"
            label="Observações"
            multiline
            rows={4}
            variant="outlined"
            value={form.detail}
            onChange={handleChange}
          />
        </div>
        <div className="container">
          <Button className="submit-button" type="submit" variant="contained">
            Cadastrar
          </Button>
        </div>
      </div>
    </S.RegisterPatient>
  );
};

export default RegisterPatient;
