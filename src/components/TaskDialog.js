import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const TaskDialog = ({
  onClick,
  open,
  handleClose,
  ErrorMessage,
  setTitle,
  title,
  setDescription,
  description,
  showErrorMessage,
  buttonText,
  dialogTitle,
}) => {
  return (
    <Box textAlign="center">
      <Dialog onClose={handleClose} open={open ? open : false} maxWidth="sm">
        <DialogTitle>
          <b>{dialogTitle}</b>
        </DialogTitle>
        <Box sx={{ padding: "20px" }}>
          <Box sx={{ padding: "5px" }}>
            <TextField
              id="outlined-input"
              label="Title"
              defaultValue={title !== "" ? title : ""}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Box>
          <Box sx={{ padding: "5px" }}>
            <TextField
              id="outlined-input"
              label="Description"
              defaultValue={description !== "" ? description : ""}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Box>

          {showErrorMessage ? (
            <h2 style={{ fontSize: "15px", color: "rgb(204, 69, 69)" }}>
              {ErrorMessage}
            </h2>
          ) : (
            <></>
          )}
          <DialogActions>
            <Button color="primary" aria-label="add" onClick={onClick}>
              {buttonText}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default TaskDialog;
