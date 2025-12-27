import User from "./components/propTypes/User";

const App = () => {
  return (
    <div className="flex items-center mt-12 justify-center">
      <User name="John wick" age={20} isStudent={true} />
    </div>
  );
};

export default App;
