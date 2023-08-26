import React from "react";
import { useDispatch } from "react-redux";
import { todoRemoved, todoEdit } from "../reducers/todoReducer";
import ListItem from "@mui/material/ListItem";
import { Fab } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import TaskDialog from "./TaskDialog";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";

const Task = ({ id, title, description }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [titleEdited, setTitleEdited] = useState(title);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [descriptionEdited, setDescriptionEdited] = useState(description);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setTitleEdited("");
    setDescriptionEdited("");
    setShowErrorMessage(false);
    setOpen(false);
  };

  const handleEdit = () => {
    if (titleEdited !== "" && descriptionEdited !== "") {
      dispatch(
        todoEdit({ id: id, title: titleEdited, description: descriptionEdited })
      );
      setOpen(false);
    } else {
      setShowErrorMessage(true);
    }
  };

  const handleTitleEdited = (value) => {
    setTitleEdited(value);
    setShowErrorMessage(false);
  };

  const handleDescriptionEdited = (value) => {
    setDescriptionEdited(value);
    setShowErrorMessage(false);
  };

  return (
    <div key={`div_${id}`}>
      <ListItem key={`list_item_${id}`}>
        <ListItemText
          key={`list_item_text_${id}`}
          primary={title}
          secondary={description}
        />
        <Box key={`remove_box_${id}`} sx={{ padding: "5px" }}>
          <Fab
            aria-label="add"
            onClick={() => dispatch(todoRemoved({ id: id }))}
            color="success"
            size="small"
            key={`remove_fab_${id}`}
          >
            <DeleteIcon key={`remove_icon_${id}`} />
          </Fab>
        </Box>
        <Box key={`edit_box_${id}`} sx={{ padding: "5px" }}>
          <Fab
            aria-label="add"
            onClick={handleClickOpen}
            color="secondary"
            size="small"
            key={`edit_fab_${id}`}
          >
            <EditIcon key={`edit_icon_${id}`} />
          </Fab>
        </Box>
      </ListItem>
      <TaskDialog
        key={`taskdialog_${id}`}
        onClick={handleEdit}
        open={open}
        handleClose={handleClose}
        ErrorMessage="title and description are required"
        setTitle={handleTitleEdited}
        setDescription={handleDescriptionEdited}
        showErrorMessage={showErrorMessage}
        title={titleEdited}
        description={descriptionEdited}
        buttonText={"Edit"}
        dialogTitle={"Edit Task"}
      ></TaskDialog>
    </div>
  );
};

export default Task;
