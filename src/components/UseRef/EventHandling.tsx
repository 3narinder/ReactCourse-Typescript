const EventHandling = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("clicked", e.currentTarget);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("mouse enter", e.currentTarget);
  };

  return (
    <div>
      <h1 onMouseEnter={handleMouseEnter} className="text-2xl capitalize">
        event Handling Examples
      </h1>

      <button
        onClick={handleClick}
        className=" text-sm bg-blue-600 text-blue-50 px-4 py-1.5 rounded-md cursor-pointer hover:bg-blue-500 active:scale-95 transition-all ease-in-out"
      >
        click
      </button>
    </div>
  );
};

export default EventHandling;
