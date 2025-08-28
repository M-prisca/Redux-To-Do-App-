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
    <tr className="border-b hover:bg-gray-50">
      {/* Task Column */}
      <td className="px-4 py-2">
        {isEditing ? (
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border rounded px-2 py-1 w-full"
          />
        ) : (
          <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            className={`cursor-pointer ${
              todo.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {todo.text}
          </span>
        )}
      </td>

      {/* Status Column
      <td className="px-4 py-2 text-center">
        {todo.completed ? (
          <span className="text-green-600 font-semibold">Done</span>
        ) : (
          <span className="text-yellow-500 font-semibold">Pending</span>
        )}
      </td> */}

      {/* Actions Column */}
      <td className="px-4 py-2 text-right">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-green-500 hover:text-green-700 mr-2"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-700 mr-2"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
