import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-semibold">{count}</h1>

      <div className="mt-4 flex items-center gap-4">
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="bg-blue-500/90 text-blue-50 px-4 py-1 rounded-sm cursor-pointer"
        >
          +
        </button>

        <button
          onClick={() => setCount((prev) => prev - 1)}
          className="bg-blue-500/90 text-blue-50 px-4 py-1 rounded-sm cursor-pointer"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
