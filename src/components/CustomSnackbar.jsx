import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import useStockpile from "../stores/useStockpile";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomSnackbar = () => {
  const { isSnackOpen, stockSnackStatus, stockSnackLabel } = useStockpile(
    (store) => store.state,
  );
  const { openStockSnack, closeStockSnack } = useStockpile(
    (store) => store.actions,
  );
  const handleClick = () => {
    openStockSnack();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    closeStockSnack();
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={isSnackOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={stockSnackStatus}
          sx={{ width: "100%" }}
        >
          {stockSnackLabel}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default CustomSnackbar;
