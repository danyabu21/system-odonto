import * as S from "./style";
import React from "react";
import useStore from "../../stores/useStore";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { RegisterPatient } from "../../components";

const Registers = () => {
  const { sidebarIsOpen, patientsData } = useStore((store) => store.state);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <S.Register $sidebar={sidebarIsOpen}>
      <Typography
        sx={{
          fontFamily: "Roboto Slab , sans-serif",
          margin: "1rem 0 ",
        }}
        variant="h5"
        component="h2"
      >
        Cadastros
      </Typography>
      <Box
        sx={{
          width: "100%",
          // typography: "body1",
        }}
      >
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <TabList
              variant="fullWidth"
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab label="Cadastrar Paciente" value="1" />
              <Tab label="Cadastrar Protocolo" value="2" />
              <Tab label="Cadastrar Convênio" value="3" />
            </TabList>
          </Box>

          <TabPanel sx={{ padding: "1.5rem 0rem" }} value="1">
            <RegisterPatient />
          </TabPanel>
          <TabPanel sx={{ padding: "1.5rem 0rem" }} value="2">
            Protocolo
          </TabPanel>
          <TabPanel sx={{ padding: "1.5rem 0rem" }} value="3">
            Cadastrar Convênio
          </TabPanel>
        </TabContext>
      </Box>
    </S.Register>
  );
};

export default Registers;
