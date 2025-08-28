import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.list);

  if (todos.length === 0) {
    return (
      <tr>
        <td colSpan="3" className="text-center text-gray-500 italic py-4">
          No tasks yet. Start by adding one!
        </td>
      </tr>
    );
  }
  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
