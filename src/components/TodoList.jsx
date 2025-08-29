import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../Redux/todosSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();

  // Track which todo is being edited
  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleEdit = (id, currentText) => {
    setEditingId(id);
    setNewText(currentText);
  };

  const handleSave = (id) => {
    if (newText.trim()) {
      dispatch(editTodo({ id, newText }));
    }
    setEditingId(null);
    setNewText("");
  };

  return (
    <>
      {todos.map((todo) => (
        <tr key={todo.id} className="border-b">
          {/* Task column (checkbox + text OR input when editing) */}
          <td className="px-4 py-2 flex items-center gap-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {editingId === todo.id ? (
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="border p-1 rounded w-full"
              />
            ) : (
              <span
                className={todo.completed ? "line-through text-gray-500" : ""}
              >
                {todo.text}
              </span>
            )}
          </td>

          {/* Actions column */}
          <td className="px-4 py-2 text-right space-x-3">
            {editingId === todo.id ? (
              <button
                onClick={() => handleSave(todo.id)}
                className="text-green-500"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEdit(todo.id, todo.text)}
                className="text-blue-500"
              >
                Edit
              </button>
            )}
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-red-500"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TodoList;
