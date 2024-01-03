import * as React from "react";
import App from "./App";
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { Dashboard } from "./pages/dashboard";
import { Registers } from "./pages/registers";
import { Patients } from "./pages/patients";
import { Schedule } from "./pages/schedule";
import { Requests } from "./pages/requests";
import { Stockpile } from "./pages/stockpile";
import { Team } from "./pages/team";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="cadastros" element={<Registers />} />
            <Route path="pacientes" element={<Patients />} />
            <Route path="agenda" element={<Schedule />} />
            <Route path="solicitacoes" element={<Requests />} />
            <Route path="estoque" element={<Stockpile />} />
            <Route path="equipe" element={<Team />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
