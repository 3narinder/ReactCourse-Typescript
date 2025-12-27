import Admin from "./components/ReusableTypes/Admin";
import User from "./components/ReusableTypes/User";

import type { AdminInfo, Info } from "./components/ReusableTypes/Types";

const user: Info = {
  id: 1,
  name: "John Wick",
  email: "john@gmail.com",
};

const admin: AdminInfo = {
  id: 2,
  name: "maria",
  email: "maria@gmail.com",
  role: "admin",
};

const App = () => {
  return (
    <div className="flex flex-col items-center mt-12 justify-center">
      <User user={user} />

      <Admin admin={admin} />
    </div>
  );
};

export default App;
