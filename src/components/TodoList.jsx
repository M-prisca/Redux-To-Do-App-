import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.list);

  if (todos.length === 0) {
    return <p className="text-gray-500">No todos yet!</p>;
  }

  return (
    <ul className="w-80">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
