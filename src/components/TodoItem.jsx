import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../Redux/todosSlice";
import { useState } from "react";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (newText.trim()) {
      dispatch(editTodo({ id: todo.id, newText }));
      setIsEditing(false);
    }
  };

  return (
    <li className="flex justify-between items-center bg-white p-3 mb-2 rounded-lg shadow">
      {isEditing ? (
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="border rounded px-2 py-1 flex-1 mr-2"
        />
      ) : (
        <span
          onClick={() => dispatch(toggleTodo(todo.id))}
          className={`cursor-pointer flex-1 ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.text}
        </span>
      )}

      {isEditing ? (
        <button
          onClick={handleSave}
          className="text-green-500 hover:text-green-700 ml-2"
        >
          Save
        </button>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="text-blue-500 hover:text-blue-700 ml-2"
        >
          Edit
        </button>
      )}

      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="text-red-500 hover:text-red-700 ml-4"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
