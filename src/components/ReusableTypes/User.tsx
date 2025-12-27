import type { Info } from "./Types";

interface UserProp {
  user: Info;
}

const User = ({ user }: UserProp) => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold tracking-wider capitalize">
        user Information
      </h1>

      <h1 className="text-lg capitalize tracking-wide text-gray-800">
        Name: {user?.name}
      </h1>
      <h1 className="text-lg capitalize tracking-wide text-gray-800">
        Email: {user?.email}
      </h1>
    </div>
  );
};

export default User;
