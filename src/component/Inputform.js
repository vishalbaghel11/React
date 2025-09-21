import { useState } from "react";

const Inputform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    alert("Mock Login Success ");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center">Welcome Back</h2>
        <p className="text-gray-600 text-center mb-4">Please login to continue</p>

        <div className="flex flex-col gap-1">
          <label className="font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded transition-colors"
        >
          Login
        </button>

        <p className="text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-green-500 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Inputform;
