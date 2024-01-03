import * as React from "react";
import useStockpile from "../stores/useStockpile";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const StockpileTable = () => {
  const [withdrawModal, setWithdrawModal] = React.useState(false);
  const [amountWithdraw, setAmountWithdraw] = React.useState(1);
  const { stockpile, stockSelectedItem } = useStockpile((store) => store.state);
  const { setSelectedItem } = useStockpile((store) => store.actions);

  const handleWithdraw = (item) => {
    setSelectedItem(item);
    setWithdrawModal((open) => !open);
  };

  React.useEffect(() => {
    console.log(stockSelectedItem);
  }, [stockSelectedItem]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Produto</TableCell>
            <TableCell align="center">Quantidade Ideal</TableCell>
            <TableCell align="center">Quantidade</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stockpile.map((item) => (
            <TableRow
              key={item.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="center">{item.idealAmount}</TableCell>
              <TableCell align="center">{item.amount}</TableCell>
              <TableCell align="center">
                {item.amount > 0 && (
                  <Button onClick={() => handleWithdraw(item)}>
                    Fazer Retirada
                  </Button>
                )}
              </TableCell>
              <TableCell align="center">
                <IconButton onClick={() => setSelectedItem(item)}>
                  <MoreVertIcon sx={{ cursor: "pointer" }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box>
        {stockSelectedItem && (
          <Modal
            open={withdrawModal}
            onClose={() => setWithdrawModal((open) => !open)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box
                sx={{
                  marginBottom: "1rem",
                }}
              >
                <Typography id="modal-modal-title" variant="h5" component="h2">
                  Modal de Retirada
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {stockSelectedItem.name}
                </Typography>
                <Typography
                  variant="overline"
                  display="block"
                  sx={{ color: "#607d8b" }}
                >
                  Posição no estoque: {stockSelectedItem.amount}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                  marginTop: "1rem",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Quantidade"
                  variant="outlined"
                  size="small"
                  required
                  value={amountWithdraw}
                  onChange={({ target }) =>
                    setAmountWithdraw(Number(target.value))
                  }
                  // error={productAmount <= 0}
                  // helperText={
                  //   productAmount <= 0
                  //     ? "Quantidade não pode ser menor ou igual a 0"
                  //     : " "
                  // }
                />
                <TextField
                  id="outlined-basic"
                  label="Profissional"
                  variant="outlined"
                  size="small"
                  required
                />
              </Box>
              <Box
                sx={{
                  mt: "2rem",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <Button onClick={() => setWithdrawModal(false)}>
                  Cancelar
                </Button>
                <Button variant="contained" color="success">
                  Retirar
                </Button>
              </Box>
            </Box>
          </Modal>
        )}
      </Box>
    </TableContainer>
  );
};

export default StockpileTable;
