type UserProps = {
  name: string;
  age: number;
  isStudent: boolean;
};

const User = ({ name, age, isStudent }: UserProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{isStudent ? "Student" : "Professional"}</h1>
    </div>
  );
};

export default User;
