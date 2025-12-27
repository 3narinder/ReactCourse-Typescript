import type { ReactNode } from "react";

interface UserProps {
  children: ReactNode;
}

const User = ({ children }: UserProps) => {
  return <div>{children}</div>;
};

export default User;
