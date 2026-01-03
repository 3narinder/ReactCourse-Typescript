import { useRef } from "react";

const FocusInput = () => {
  const focusInput = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    focusInput.current?.focus();
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <input
        type="text"
        placeholder="Focus on this input"
        ref={focusInput}
        className="outline-none border border-gray-500 text-sm px-4 py-1 rounded-md"
      />

      <button
        type="submit"
        onClick={handleFocus}
        className=" text-sm bg-blue-600 text-blue-50 px-4 py-1.5 rounded-md cursor-pointer hover:bg-blue-500 active:scale-95 transition-all ease-in-out"
      >
        Focus
      </button>
    </div>
  );
};

export default FocusInput;
