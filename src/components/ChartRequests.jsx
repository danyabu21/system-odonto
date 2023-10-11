import React from "react";
import * as S from "./style";
import { PieChart } from "@mui/x-charts/PieChart";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ChartRequests = () => {
  const { innerWidth: width, innerHeight: height } = window;
  const [resizeWidth, setWidthResize] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      setWidthResize(width);
    };
    window.addEventListener("resize", handleResize);
  });

  React.useEffect(() => {
    console.log("WIDTH:", resizeWidth);
  }, [resizeWidth]);
  return (
    <Box>
      <S.Box>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 50, label: "Autorizadas", color: "#2c6e49" },
                { id: 1, value: 15, label: "Em análise", color: "#1d3557" },
                { id: 2, value: 5, label: "Pendentes", color: "#fca311" },
                { id: 3, value: 4, label: "Negadas", color: "#e63946" },
              ],
              innerRadius: 30,
              outerRadius: 100,
              paddingAngle: 5,
              cornerRadius: 5,
              startAngle: -90,
              endAngle: 180,
              cx: 150,
              cy: 150,
            },
          ]}
          width={450}
          height={400}
        />
      </S.Box>
    </Box>
  );
};

export default ChartRequests;
