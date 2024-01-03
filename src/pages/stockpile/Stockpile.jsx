import React from "react";
import * as S from "./style";
import useStore from "../../stores/useStore";
import useStockpile from "../../stores/useStockpile";
import StockpileTable from "../../components/StockpileTable";
import NewProductModal from "../../components/NewProductModal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import CustomSnackbar from "../../components/CustomSnackbar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "4px",
};

const Stockpile = () => {
  const { sidebarIsOpen } = useStore((store) => store.state);
  const { stockModal, stockHistoryModal, stockModalId } = useStockpile(
    (store) => store.state,
  );
  const {
    openStockModal,
    closeStockModal,
    openStockHistoryModal,
    closeStockHistoryModal,
    setStockModalId,
  } = useStockpile((store) => store.actions);

  const handleClose = () => {
    closeStockModal();
    setStockModalId(0);
  };

  return (
    <S.Stockpile $sidebar={sidebarIsOpen}>
      <Typography
        sx={{
          fontFamily: "Roboto Slab , sans-serif",
          margin: "1rem 0",
        }}
        variant="h5"
        component="h2"
      >
        Meu Estoque
      </Typography>
      <Box
        sx={{
          gap: "1rem",
          display: "flex",
          flexWrap: "wrap",
          marginBottom: "2rem",
        }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={() => openStockModal()}
        >
          Nova Entrada
        </Button>

        <Button onClick={() => openStockHistoryModal()}>
          Histórico de retiradas
        </Button>
      </Box>
      <Box>
        <StockpileTable />
      </Box>
      <Box>
        <Modal
          open={stockModal}
          onClose={() => handleClose()}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {stockModalId === 0 && (
              <Box>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  sx={{ marginBottom: "1rem", textAlign: "center" }}
                >
                  Adicionar nova entrada no estoque
                </Typography>
                <Box sx={{ display: "flex", gap: "1rem" }}>
                  <Button
                    variant="contained"
                    onClick={() => setStockModalId(1)}
                  >
                    Novo Produto <PlaylistAddIcon sx={{ marginLeft: "8px" }} />
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => setStockModalId(2)}
                  >
                    Produto Existente
                    <PlaylistAddCheckIcon sx={{ marginLeft: "8px" }} />
                  </Button>
                </Box>
                <Box
                  sx={{
                    marginTop: "2rem",
                    display: "flex",
                    justifyContent: "end",
                    marginRight: "auto",
                  }}
                >
                  <Button onClick={() => handleClose()}>Cancelar</Button>
                </Box>
              </Box>
            )}
            {stockModalId === 1 && <NewProductModal />}
            {stockModalId === 2 && <Box>Produto Existente</Box>}
          </Box>
        </Modal>
      </Box>
      <Box>
        <Modal
          open={stockHistoryModal}
          onClose={() => closeStockHistoryModal()}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Modal de Histórico
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Aqui vai uma tabela, contendo o histórico de retiradas
            </Typography>
          </Box>
        </Modal>
      </Box>
      <CustomSnackbar />
    </S.Stockpile>
  );
};

export default Stockpile;
