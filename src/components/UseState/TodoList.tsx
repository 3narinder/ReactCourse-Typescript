import { useState } from "react";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const TodoList = () => {
  const [list, setList] = useState<Todo[]>([]);
  const [val, setVal] = useState<string>("");

  const addTask = () => {
    if (val?.trim() === "") return;

    const newTask: Todo = {
      id: list?.length > 0 ? Math.max(...list.map((t) => t.id)) + 1 : 1,
      task: val?.trim(),
      completed: false,
    };

    setList([...list, newTask]);
    setVal("");
  };

  const toggleComplete = (id: number) => {
    setList(
      list?.map((todo) =>
        todo?.id === id ? { ...todo, completed: !todo?.completed } : todo
      )
    );
  };

  const deleteTask = (id: number) => {
    setList(list?.filter((todo) => todo?.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Todo List</h1>

      <div className="flex items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Enter a new task"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          className="flex-1 outline-none text-sm border border-gray-400 px-3 py-2 rounded-md focus:border-blue-500"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors"
        >
          Add
        </button>
      </div>

      {list?.length === 0 ? (
        <p className="text-gray-500 text-center">
          No tasks yet. Add one above!
        </p>
      ) : (
        <ul className="space-y-3">
          {list?.map((todo) => (
            <li
              key={todo?.id}
              className="flex items-center gap-3 bg-gray-50 p-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              <input
                type="checkbox"
                checked={todo?.completed}
                onChange={() => toggleComplete(todo?.id)}
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <span
                className={`flex-1 ${
                  todo?.completed
                    ? "line-through text-gray-500"
                    : "text-gray-800"
                }`}
              >
                {todo.task}
              </span>
              <button
                onClick={() => deleteTask(todo?.id)}
                className="text-red-500 hover:text-red-700 text-sm font-medium cursor-pointer"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
