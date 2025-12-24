import { useState } from "react";
import { users } from "./users";

export default function Login({ setUser }) {
  const [phone, setPhone] = useState("");

  const handleLogin = () => {
    if (users[phone]) {
      setUser(users[phone]);
    } else {
      alert("Phone number not found");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-4">🎄 Christmas is coming</h1>

      <input
        className="border p-2 mb-3 text-center"
        placeholder="Enter phone number"
        onChange={(e) => setPhone(e.target.value)}
      />

      <button
        className="bg-black text-white px-6 py-2"
        onClick={handleLogin}
      >
        Enter
      </button>
    </div>
  );
}
