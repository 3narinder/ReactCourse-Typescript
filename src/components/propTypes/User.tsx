// type UserProps = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

interface UserProps {
  name: string;
  age: number;
  isStudent?: boolean; //Optional prop
}

const User = ({ name, age }: UserProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  );
};

export default User;
