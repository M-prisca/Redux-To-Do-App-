import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-4">Todo List</h1>
        <TodoInput />
        <TodoList />
      </div>
    </>
  );
}

export default App;
