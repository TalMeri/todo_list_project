import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      });
    },
    todoRemoved(state, action) {
      state.splice(
        state.findIndex((task) => action.payload.id === task.id),
        1
      );
    },
    todoEdit(state, action) {
      state.map((task) => {
        if (task.id === action.payload.id) {
          if (action.payload.title !== "") {
            task.title = action.payload.title;
          }
          if (action.payload.description !== "") {
            task.description = action.payload.description;
          }
        }
        return task;
      });
    },
  },
});

export const { todoAdded, todoRemoved, todoEdit } = todosSlice.actions;
export default todosSlice.reducer;
export const todo = (state) => state.todos;
