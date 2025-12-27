import { useState } from "react";

interface User {
  name: string;
  age: number;
  role?: string;
}

const UserProfile = () => {
  const [user, setUser] = useState<User>({
    name: "John wick",
    age: 33,
    role: "assassin",
  });

  const updateUser = (newAge: number) => {
    setUser({ ...user, age: newAge });
  };

  return (
    <div className="flex flex-col gap-2 text-gray-700">
      <h1 className="text-xl capitalize">Name: {user?.name}</h1>
      <h1 className="text-xl capitalize">age: {user?.age}</h1>
      <h1 className="text-xl capitalize">profession: {user?.role}</h1>

      <button
        onClick={() => updateUser(17)}
        className="bg-blue-500/90 text-blue-50 px-4 py-1 rounded-sm cursor-pointer"
      >
        Update age
      </button>
    </div>
  );
};

export default UserProfile;
