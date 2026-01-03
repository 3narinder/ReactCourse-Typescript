import { useState, type ChangeEvent, type FormEvent } from "react";
interface FormInfo {
  name: string;
  email: string;
}

const ContactForm = () => {
  const [user, setUser] = useState<FormInfo>({
    name: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(user);
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4"
      >
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600 tracking-wide">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={user?.name}
            onChange={handleChange}
            className="outline-none border border-gray-500 text-sm px-4 py-1 rounded-md"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600 tracking-wide">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={user?.email}
            onChange={handleChange}
            className="outline-none border border-gray-500 text-sm px-4 py-1 rounded-md"
          />
        </div>

        <button
          type="submit"
          className=" text-sm bg-blue-600 text-blue-50 px-4 py-1.5 rounded-md cursor-pointer hover:bg-blue-500 active:scale-95 transition-all ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
