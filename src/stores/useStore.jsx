import { create } from "zustand";
import { produce } from "immer";
import { v4 as uuidv4 } from "uuid";
import IconButton from "@mui/material/IconButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const useStore = create((set, get) => {
  const setState = (fn) => set(produce(fn));
  const actionsIcons = [
    <IconButton aria-label="editar-paciente">
      <ModeEditIcon color="success" fontSize="small" />
    </IconButton>,
    <IconButton aria-label="excluir-paciente">
      <DeleteForeverIcon color="error" fontSize="small" />
    </IconButton>,
  ];

  return {
    state: {
      activeSectionTitle: "",
      sidebarIsOpen: false,
      patientsData: [
        {
          name: "Maria da Silva",
          insurance: "SASSEPE",
          insuranceNumber: "123456789",
          cid: "123",
          actions: actionsIcons,
        },
      ],
    },
    actions: {
      setActivatedSection: (label) => {
        setState(({ state }) => {
          state.activeSectionTitle = label;
        });
      },
      openSidebar: () => {
        setState(({ state }) => {
          state.sidebarIsOpen = true;
        });
      },
      closeSidebar: () => {
        setState(({ state }) => {
          state.sidebarIsOpen = false;
        });
      },
      onPatientRegister: (patient) => {
        setState(({ state }) => {
          state.patientsData.push({
            ...patient,
            actions: actionsIcons,
            id: uuidv4(),
          });
        });
      },
    },
  };
});

export default useStore;
