import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
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
    icon: <CalendarMonthIcon />,
    label: "Agenda",
    route: "agenda",
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
