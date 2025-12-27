interface ButtonProps {
  label: string;
  text: string;
  onClick: () => void;
  disable?: boolean;
}

const Button = ({ text, label, onClick, disable }: ButtonProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold text-gray-600 tracking-wide">
        {label}
      </label>

      <button
        disabled={disable}
        onClick={onClick}
        className="bg-blue-500/90 text-blue-50/90 px-4 py-1 rounded-md cursor-pointer w-36"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
