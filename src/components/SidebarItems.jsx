import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import GroupsIcon from "@mui/icons-material/Groups";
import MedicationIcon from "@mui/icons-material/Medication";
import AssignmentIcon from "@mui/icons-material/Assignment";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

export const listItems = [
  {
    id: 0,
    icon: <AddToQueueIcon />,
    label: "Cadastros",
    route: "cadastros",
  },
  {
    id: 1,
    icon: <GroupsIcon />,
    label: "Pacientes",
    route: "pacientes",
  },

  {
    id: 2,
    icon: <VaccinesIcon />,
    label: "Criar Solicitação",
    route: "criar-solicitacao",
  },
  {
    id: 3,
    icon: <ListAltIcon />,
    label: "Solicitações",
    route: "solicitacoes",
  },
  {
    id: 4,
    icon: <AppRegistrationIcon />,
    label: "Cadastros",
    route: "cadastros",
  },
];
