import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import { todo } from "../reducers/todoReducer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";

const Todolist = () => {
  const tasks = useSelector(todo);
  return (
    <Box textAlign="center" sx={{ paddingBottom: "50px" }}>
      {tasks.length > 0 ? (
        tasks.map((task) => {
          return (
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                position: "relative",
                overflow: "auto",
                margin: "auto",
              }}
            >
              <Task
                title={task.title}
                description={task.description}
                id={task.id}
                key={task}
              ></Task>
            </List>
          );
        })
      ) : (
        <div>
          <h2 style={{ fontSize: "16px", color: "rgb(73, 80, 85)" }}>
            Your TODO list is empty.. add new tasks to track
          </h2>
        </div>
      )}
    </Box>
  );
};

export default Todolist;
