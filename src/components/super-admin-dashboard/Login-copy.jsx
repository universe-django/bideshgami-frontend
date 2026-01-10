import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ReusableForm from "../common/ReusableForm";
const userSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6),
});
export default function Login() {
  const form = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      password: "",
    },
  });
  const fields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your Password",
    },
  ];

  const onSubmit = async (data) => {
    console.log("Form submitted:", data);
  };
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

          <ReusableForm
            form={form}
            fields={fields}
            onSubmit={onSubmit}
            submitLabel="Login"
            isLoading={form.formState.isSubmitting}
          />
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
