import User from "./components/propTypes/User";

const App = () => {
  return (
    <div className="flex items-center mt-12 justify-center">
      <User>
        <h1>Name: John Wick</h1>
        <h1>Age: 32</h1>
        <h1>Professional</h1>
      </User>
    </div>
  );
};

export default App;
