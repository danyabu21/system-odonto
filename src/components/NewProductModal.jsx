import * as React from "react";
import useStockpile from "../stores/useStockpile";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const NewProductModal = () => {
  const [productName, setProductName] = React.useState("");
  const [productNameChange, setProductNameChange] = React.useState(false);
  const [productAmount, setProductAmount] = React.useState(1);
  const [productIdealAmount, setProductIdealAmount] = React.useState(1);

  const { stockpile } = useStockpile((store) => store.state);
  const { setProduct, closeStockModal, setStockModalId, openStockSnack } =
    useStockpile((store) => store.actions);

  const handleProductName = (target) => {
    setProductName(target.value);
    setProductNameChange(true);
  };

  const handleCloseModal = () => {
    setStockModalId(0);
    closeStockModal();
    setProductNameChange(false);
  };

  const submitProduct = () => {
    setProductNameChange(false);
    setProduct({
      name: productName,
      amount: productAmount,
      idealAmount: productIdealAmount,
    });
    setProductName("");
    setProductAmount(1);
    setProductIdealAmount(1);
    setStockModalId(0);
    closeStockModal();
    openStockSnack();
  };

  return (
    <Box>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        sx={{ marginBottom: "1rem", textAlign: "start" }}
      >
        Criar Produto e adicionar ao Estoque
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          mb: "1rem",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Nome do Produto"
          variant="outlined"
          size="small"
          required
          value={productName}
          onChange={({ target }) => handleProductName(target)}
          error={productName === "" && productNameChange === true}
          helperText={
            productName === "" && productNameChange === true
              ? "Este campo é Obrigatório"
              : " "
          }
        />
        <TextField
          id="outlined-basic"
          label="Quantidade"
          variant="outlined"
          size="small"
          required
          value={productAmount}
          onChange={({ target }) => setProductAmount(target.value)}
          error={productAmount <= 0}
          helperText={
            productAmount <= 0
              ? "Quantidade não pode ser menor ou igual a 0"
              : " "
          }
        />

        <TextField
          id="outlined-basic"
          label="Qtd. Ideal"
          variant="outlined"
          size="small"
          required
          value={productIdealAmount}
          onChange={({ target }) => setProductIdealAmount(target.value)}
          error={productIdealAmount <= 0 || productIdealAmount < productAmount}
          helperText={
            productIdealAmount < productAmount
              ? "A quantidade ideal é obrigatória"
              : " "
          }
        />
        {/* <Tooltip title="Remover Produto">
          <IconButton color="error">
            <DeleteForeverIcon />
          </IconButton>
        </Tooltip> */}
      </Box>
      {/* <Box sx={{ mb: "1rem" }}>
        <Button size="small">Adicionar outro produto</Button>
      </Box> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          gap: "1.5rem",
        }}
      >
        <Button color="primary" onClick={() => handleCloseModal()}>
          Cancelar
        </Button>
        <Button
          color="success"
          variant="contained"
          size="small"
          disabled={
            productName === "" ||
            productAmount <= "0" ||
            productIdealAmount < productAmount
          }
          onClick={() => submitProduct()}
        >
          Adicionar ao estoque
        </Button>
      </Box>
    </Box>
  );
};

export default NewProductModal;
