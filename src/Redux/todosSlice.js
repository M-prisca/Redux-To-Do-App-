import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.list.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.list.find((t) => t.id === id);
      if (todo) {
        todo.text = newText;
      }
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((t) => t.id !== action.payload);
    },
  },
});
export const { addTodo, toggleTodo, editTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
