import { useRef, useState, type FormEvent } from "react";

interface FormInput {
  name: string;
  email: string;
  password: string;
}

const Forms = () => {
  const [userData, setUserData] = useState<FormInput>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUserData({
      name: name.current?.value || "",
      email: email.current?.value || "",
      password: password?.current?.value || "",
    });
  };

  return (
    <div className="mx-6">
      <form
        onSubmit={handleSubmit}
        className="flex md:flex-row flex-col items-center gap-4"
      >
        <input
          className="outline-none px-4 py-1 rounded-md border border-gray-300"
          placeholder="Enter your name"
          type="text"
          ref={name}
        />
        <input
          className="outline-none px-4 py-1 rounded-md border border-gray-300"
          placeholder="Enter your email"
          type="email"
          ref={email}
        />
        <input
          className="outline-none px-4 py-1 rounded-md border border-gray-300"
          placeholder="Enter your password"
          type="password"
          ref={password}
        />

        <button
          type="submit"
          className=" text-sm bg-blue-600 text-blue-50 px-4 py-1.5 rounded-md cursor-pointer hover:bg-blue-500 active:scale-95 transition-all ease-in-out"
        >
          Submit
        </button>
      </form>

      <div className="mt-12">
        <h1>Name: {userData?.name}</h1>
        <h1>Email: {userData?.email}</h1>
        <h1>Password: {userData?.password}</h1>
      </div>
    </div>
  );
};

export default Forms;
