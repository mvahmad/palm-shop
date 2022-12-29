import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit", name, username);
  };
  return (
    <div className="flex justify-start flex-col">
      <h1 className="text-4xl">form</h1>
      <form className="border border-slate-400" onSubmit={handleSubmit}>
        <div className="flex flex-col ml-3 items-start">
          <span className="font-bold text-xl">Name</span>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="w-72"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col ml-3 items-start">
          <span className="font-bold text-xl">Username</span>
          <input
            type="text"
            name="username"
            placeholder="username"
            className="w-72 "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mt-2 mb-2 flex gap-2 justify-center ml-3">
          <button className="btn bg-gray-600  hover:bg-blue-500 text-white felx justify-center items-center w-28 rounded">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
