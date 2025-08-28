import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/todosSlice";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };
  return (
    <div className="flex gap-1 mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task..."
        className="border px-4 py-2 w rounded-lg "
      />

      <button
        onClick={handleAdd}
        className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
