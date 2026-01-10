import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { loginUsers } from "@/redux/slices/authSlice";
import { useEffect } from "react";
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.userAuth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(loginUsers({ email: data.email, password: data.password }));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-8">
      <div className="relative">
        <Mail className="absolute left-0.5 top-2 text-gray-400" size={20} />
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          placeholder="Enter your email"
          className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 p-1 pl-8 outline-none"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      <div className="relative">
        <Lock className="absolute left-0.5 top-2 text-gray-400" size={20} />
        <input
          type={showPassword ? "text" : "password"}
          {...register("password", { required: "Password is required" })}
          placeholder="Enter your password"
          className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 p-1 pl-8 pr-10 outline-none"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
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

      <Button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
      >
        {loading ? "Loading..." : "Login"}
      </Button>


      <div className="text-sm text-center text-gray-600 space-y-3">
        <p>
          Don’t have an account?{" "}
          <Link
            to="/user/register"
            className="text-blue-600 hover:underline font-semibold"
          >
            Sign up as User
          </Link>
        </p>

        <p>
          Want to join as an agent?{" "}
          <Link
            to="/agent/register"
            className="text-blue-600 hover:underline font-semibold"
          >
            Register as Agent
          </Link>
        </p>
      </div>
    </form>
  );
}


