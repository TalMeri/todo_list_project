import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdded } from "../reducers/todoReducer";
import { todo } from "../reducers/todoReducer";
import { useSelector } from "react-redux";
import TaskDialog from "./TaskDialog";
import Box from "@mui/material/Box";

const Header = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [description, setDescription] = useState("");
  const tasks = useSelector(todo);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setDescription("");
    setTitle("");
    setShowErrorMessage(false);
    setOpen(false);
  };

  const handleAdd = () => {
    if (title !== "" && description !== "") {
      const id = tasks.length;
      dispatch(todoAdded({ id: id, title: title, description: description }));
      setTitle("");
      setDescription("");
      setOpen(false);
    } else {
      setShowErrorMessage(true);
    }
  };

  const handleTitle = (value) => {
    setTitle(value);
    setShowErrorMessage(false);
  };

  const handleDescription = (value) => {
    setDescription(value);
    setShowErrorMessage(false);
  };

  return (
    <Box textAlign="center" sx={{ padding: "25px" }}>
      <h1>TODO LIST</h1>
      <Button onClick={handleClickOpen} variant="contained" size="large">
        <b>click here to add a task</b>
      </Button>
      <TaskDialog
        onClick={handleAdd}
        open={open}
        handleClose={handleClose}
        ErrorMessage="title and description are required"
        setTitle={handleTitle}
        setDescription={handleDescription}
        showErrorMessage={showErrorMessage}
        title={title}
        description={description}
        buttonText={"ADD"}
        dialogTitle={"Add Task"}
      ></TaskDialog>
    </Box>
  );
};

export default Header;
