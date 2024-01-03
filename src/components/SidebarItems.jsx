import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import CategoryIcon from "@mui/icons-material/Category";
import MasksIcon from "@mui/icons-material/Masks";

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
    icon: <MasksIcon />,
    label: "Equipe",
    route: "equipe",
  },
  {
    id: 4,
    icon: <CategoryIcon />,
    label: "Estoque",
    route: "estoque",
  },
];
