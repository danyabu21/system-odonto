import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard({ Icon, label, ...props }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <Icon color="info" />
        <Typography
          variant="h6"
          component="div"
          color="primary"
          sx={{
            textTransform: "uppercase",
            flex: "1",
            margin: "16px 0 ",
          }}
        >
          {label}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="success" variant="contained">
          Cadastrar
        </Button>
      </CardActions>
    </Card>
  );
}
