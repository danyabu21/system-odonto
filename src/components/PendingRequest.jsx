import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const PendingRequest = ({ patientName }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://img.freepik.com/fotos-premium/photo-a-lizard-standing-on-the-wooden-in-the-garden_954226-13956.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696464000&semt=ais"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Maria do Socorro de Souza Silva
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          repudiandae laboriosam pariatur rem. Consequuntur natus, fugit
          quisquam fuga dolorem omnis reiciendis beatae facilis repudiandae iste
          vel rerum ex eum rem?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default PendingRequest;
