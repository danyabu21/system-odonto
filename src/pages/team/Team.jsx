import React from "react";

import * as S from "./style";
import useStore from "../../stores/useStore";

import UsersTable from "../../components/UsersTable";
import RegisterTeam from "../../components/RegisterTeam";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const Team = () => {
  const { sidebarIsOpen } = useStore((store) => store.state);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <S.Team $sidebar={sidebarIsOpen}>
      <Typography
        sx={{ fontFamily: "Roboto Slab , sans-serif", margin: "1rem 0" }}
        variant="h5"
        component="h2"
      >
        Equipe
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
              <Tab label="Profissionais" value="1" />
              <Tab label="Cadastrar Profissional" value="2" />
              <Tab label="Observações" value="3" />
            </TabList>
          </Box>

          <TabPanel sx={{ padding: "1.5rem 0rem" }} value="1">
            <UsersTable />
          </TabPanel>
          <TabPanel sx={{ padding: "1.5rem 0rem" }} value="2">
            <RegisterTeam />
          </TabPanel>
          <TabPanel sx={{ padding: "1.5rem 0rem" }} value="3">
            Observações
          </TabPanel>
        </TabContext>
      </Box>
    </S.Team>
  );
};

export default Team;
