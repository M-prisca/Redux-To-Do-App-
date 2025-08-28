import TodoInput from "./components/TodoInput";
import "./index.css";

function App() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-4">Todo List</h1>
        <TodoInput />
      </div>
    </>
  );
}

export default App;
