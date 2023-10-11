import React from "react";
import useStore from "../../stores/useStore";
import * as S from "./style";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Carousel from "../../components/Carousel";
import { ChartInvoicing, ChartRequests } from "../../components";

const Dashboard = () => {
  const { sidebarIsOpen } = useStore((store) => store.state);
  return (
    <S.Dashboard $sidebar={sidebarIsOpen}>
      <Typography
        sx={{ fontFamily: "Roboto Slab , sans-serif", margin: "1rem 0" }}
        variant="h5"
        component="h2"
      >
        Dashboard
      </Typography>
      <S.Charts>
        <Box>
          <Typography
            sx={{
              fontFamily: "Roboto Slab , sans-serif",
            }}
            variant="h6"
            noWrap
            component="h1"
          >
            Faturamento
          </Typography>
          <ChartInvoicing />
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "Roboto Slab , sans-serif",
            }}
            variant="h6"
            noWrap
            component="h1"
          >
            Autorização
          </Typography>
          <ChartRequests />
        </Box>
      </S.Charts>
      <Carousel />
    </S.Dashboard>
  );
};

export default Dashboard;
