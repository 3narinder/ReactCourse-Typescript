import type { AdminInfo } from "./Types";

interface AdminProps {
  admin: AdminInfo;
}

const Admin = ({ admin }: AdminProps) => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold tracking-wider capitalize">
        Admin Information
      </h1>
      <h4 className="text-lg capitalize tracking-wide text-gray-800">
        Name: {admin?.name}
      </h4>
      <h4 className="text-lg capitalize tracking-wide text-gray-800">
        Email: {admin?.email}
      </h4>
      <h4 className="text-lg capitalize tracking-wide text-gray-800">
        Role: {admin?.role}
      </h4>
    </div>
  );
};

export default Admin;
