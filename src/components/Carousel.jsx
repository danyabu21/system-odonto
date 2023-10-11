import React from "react";
import * as S from "./style";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Typography from "@mui/material/Typography";
import "@splidejs/react-splide/css";
import PendingRequest from "./PendingRequest";

const Carousel = () => {
  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    perMove: 1,
    height: "22rem",
    padding: { left: 120, right: 120 },
    pauseOnHover: true,
    trimSpace: true,
    pauseOnHover: false,
    perPage: 3,
    breakpoints: {
      mediaQuery: "max",
      1400: {
        perPage: 3,
      },
      1100: {
        perPage: 2,
      },
      800: {
        perPage: 1,
      },
    },
  };
  return (
    <S.Carousel>
      <Typography
        sx={{ fontFamily: "Roboto Slab , sans-serif", alignItems: "center" }}
        variant="h6"
        noWrap
        component="h1"
      >
        Guias com Pendência Ativas
      </Typography>

      <Splide options={options} hasTrack={false}>
        <SplideTrack>
          <SplideSlide className="slide-item">
            <PendingRequest />
          </SplideSlide>
          <SplideSlide className="slide-item">
            <PendingRequest />
          </SplideSlide>
        </SplideTrack>
      </Splide>
    </S.Carousel>
  );
};

export default Carousel;
