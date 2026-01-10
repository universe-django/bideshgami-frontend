import React, { useState } from "react";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function AgentForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="flex flex-col space-y-8">
      <div className="relative">
        <Mail className="absolute left-0.5 top-2 text-gray-400" size={20} />
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 p-1 pl-8 outline-none"
        />
      </div>

      <div className="relative ">
        <Lock className="absolute left-0.5 top-2 text-gray-400" size={20} />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 p-1 pl-8 outline-none"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      <div className="flex justify-between text-sm font-medium text-blue-600 mt-5">
        <label className="flex items-center gap-2 text-gray-700 ">
          <input type="checkbox" className="accent-blue-600 w-4 h-4 " />
          Remember password
        </label>
        <Link to="/" className="hover:underline">
          Forgot Password?
        </Link>
      </div>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300">
        Login
      </Button>
      <p className="text-sm text-center text-gray-600">
        Don’t have an account?
        <Link
          to="/agent/register"
          className="text-blue-600 hover:underline font-semibold ml-1"
        >
          Sign up!
        </Link>
      </p>

      {/* Divider */}
      {/* <div className="flex items-center gap-2 text-gray-400 text-sm my-2">
        <span className="flex-1 h-px bg-gray-300"></span>
        OR
        <span className="flex-1 h-px bg-gray-300"></span>
      </div> */}

      {/* Register as Customer */}
      {/* <Link
        to="/agent/register"
        className="flex items-center justify-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm px-3 py-2 font-medium rounded-lg text-center"
      >
        Register as a Customer
      </Link> */}
    </form>
  );
}
