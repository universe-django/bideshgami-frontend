import useAuthRedirect from "@/hooks/useAuthRedirect";
import Simplifyingskills from "../assets/Simplifyingskills.png";
import LoginForm from "./home/LoginForm";

export default function LoginUser() {
  useAuthRedirect();
  return (
    <section className="md:flex gap-5 px-5 max-w-6xl mx-auto">
      <div className="flex flex-1 items-center">
        <img
          src={Simplifyingskills}
          alt="main-pic"
          className="w-[500px] mx-auto h-auto object-cover"
        />
      </div>

      <div className="w-full  max-w-lg mx-auto mt-5 bg-white shadow-md rounded-2xl p-6 md:p-8 border border-gray-100">
        <div className="flex flex-col items-center mb-6 text-center">
          <h1 className="text-xl sm:text-3xl font-bold text-gray-800">
            Log in to your account
          </h1>
          <p className="text-gray-500 text-sm mt-3">
            Welcome back! Please enter your login details.
          </p>
        </div>
        <LoginForm />
      </div>
    </section>
  );
}
