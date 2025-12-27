import Button from "./components/propTypes/Button";

const App = () => {
  const handleClick = () => {
    console.log("Added to cart");
  };

  return (
    <div className="flex items-center mt-12 justify-center">
      <Button label="Add to cart" text="Add" onClick={handleClick} />
    </div>
  );
};

export default App;
