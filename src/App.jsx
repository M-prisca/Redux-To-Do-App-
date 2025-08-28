import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">
          Manage Your Tasks!
        </h1>

        {/* Input */}
        <div className="mb-6">
          <TodoInput />
        </div>

        {/* Table Layout */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm">
                <th className="px-4 py-3 border-b">Task</th>
                {/* <th className="px-4 py-3 border-b text-center">Status</th> */}
                <th className="px-4 py-3 border-b text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* TodoList renders rows */}
              <TodoList />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
