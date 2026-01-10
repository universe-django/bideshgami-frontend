import { Lock, Mail } from "lucide-react";
import { Button } from "../ui/button";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <section className="relative w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white border border-gray-200 rounded-2xl shadow-lg mx-auto my-10 px-6 py-10 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-primary/20"></div>
        <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-primary/20"></div>

        <div className="relative z-10 max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Admin Login 👋
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Please log in to access your dashboard
          </p>

          <form className="flex flex-col space-y-5">
            {/* Email */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-1 font-semibold text-gray-700"
              >
                Email Address
              </label>
              <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-primary">
                <Mail className="ml-3 text-gray-400" size={18} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full p-2 outline-none rounded-md"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="mb-1 font-semibold text-gray-700"
              >
                Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-primary">
                <Lock className="ml-3 text-gray-400" size={18} />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  className="w-full p-2 outline-none rounded-md"
                />
              </div>
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-primary" />
                <span className="text-gray-600">Remember Me</span>
              </label>
              <a href="#" className="text-primary hover:underline font-medium">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="bg-primary w-full text-white py-2 rounded-lg text-lg hover:bg-primary/90 transition duration-300"
            >
              Login
            </Button>
          </form>

          {/* Registration Link */}
          {/* <p className="text-center text-gray-500 mt-6">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-primary font-medium hover:underline"
            >
              Register here
            </Link>
          </p> */}

          {/* Optional Google Login */}
          {/* <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-2 text-gray-500 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div> */}

          {/* <Button
            type="button"
            variant="outline"
            className="w-full flex items-center justify-center space-x-2 border border-gray-300 hover:bg-gray-50 transition"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Continue with Google</span>
          </Button> */}
        </div>
      </section>
    </div>
  );
}
