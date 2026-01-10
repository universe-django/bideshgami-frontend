import { Eye } from "@/utils/svg-utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectValue,
  SelectLabel,
  SelectItem,
  SelectTrigger,
} from "../ui/select";
import { Link } from "react-router";
import axios from 'axios';
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from 'sonner';
import { Controller, useForm } from "react-hook-form";

export default function UserRegister() {
  const { register,
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
    reset,
    watch,
  } = useForm();

  const gender = [
    { id: 1, gen: "Male" },
    { id: 2, gen: "Female" },
    { id: 3, gen: "Others" },
  ]

  const station = [
    { id: 1, val: "Dhaka" },
    { id: 2, val: "Cumilla" },
    { id: 3, val: "Chandpur" },
    { id: 4, val: "Rajshahi" },
    { id: 5, val: "Borishal" },
    { id: 6, val: "Rangpur" },
    { id: 7, val: "Dinajpur" },
    { id: 8, val: "Sylhet" },
    { id: 9, val: "Chittagong" },
  ];


  // const onSubmit = async (data) => {
  //   // isSubmitting(true);

  //   try {
  //     // Prepare the data with file URLs
  //     const submissionData = {
  //       ...data,
  //     };

  //     console.log("Submitting data:", submissionData);

  //     // API call using Axios with JSON data
  //     const response = await axios.post('https://bideshgami.onrender.com/api/v1/users/register/customer', submissionData, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     toast.success('Registration successful!');
  //     reset();
  //   } catch (error) {
  //     console.error('Registration error:', error);
  //     toast.error(error.response?.data?.message || 'Registration failed');
  //   } finally {
  //     // isSubmitting(false);
  //   }
  // };

  const onSubmit = async (data) => {
    try {
      const submissionData = { ...data };

      console.log("Submitting data:", submissionData);

      await axios.post(
        "https://bideshgami.onrender.com/api/v1/users/register/customer",
        submissionData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success("Registration successful!");
      reset();
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };


  return (
    <section className="flex items-center justify-center min-h-screen py-4">
      <div className="border border-gray-200 shadow-sm rounded-sm w-full max-w-3xl p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center">Create A New Profile</h2>
        <p className="text-center text-gray-500 text-sm mt-1">
          Welcome Back Bideshgami! Please Enter Your Login Details
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Basic Info  */}
          <div className="mt-6">
            <h3 className="text-[#0066FFCC] font-semibold mb-4 text-lg">
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Enter Your Name
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Select Your Gender
                </label>
                <Controller
                  name="gender"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Gender is required" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full border border-gray-300 rounded-md py-3 px-4 flex justify-between items-center gap-2">
                        <SelectValue placeholder="Gender" />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        <SelectGroup>
                          <SelectLabel>Gender</SelectLabel>
                          {gender.map((data) => {
                            return (
                              <SelectItem key={data.id} value={data.gen}>
                                {data.gen}
                              </SelectItem>
                            );
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  placeholder="Date of Birth"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                  {...register("dateOfBirth", { required: "Date of Birth is required" })}
                />
                {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth.message}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Setect Your District
                </label>
                <Controller
                  name="district"
                  control={control}
                  defaultValue=""
                  rules={{ required: "District is required" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full border border-gray-300 rounded-md py-3 px-4 flex justify-between items-center gap-2">
                        <SelectValue placeholder="District" />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        <SelectGroup>
                          <SelectLabel>District</SelectLabel>
                          {station.map((data) => {
                            return (
                              <SelectItem key={data.id} value={data.val}>
                                {data.val}
                              </SelectItem>
                            );
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.district && <p className="text-red-500 text-xs mt-1">{errors.district.message}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Select Your Police Station
                </label>
                <Controller
                  name="policeStation"
                  control={control}
                  defaultValue=""
                  rules={{ required: "District is required" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full border border-gray-300 rounded-md py-3 px-4 flex justify-between items-center gap-2">
                        <SelectValue placeholder="Police Station" />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        <SelectGroup>
                          <SelectLabel>Police Station</SelectLabel>
                          {station.map((data) => {
                            return (
                              <SelectItem key={data.id} value={data.val}>
                                {data.val}
                              </SelectItem>
                            );
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.policeStation && <p className="text-red-500 text-xs mt-1">{errors.policeStation.message}</p>}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-[#0066FFCC] text-lg font-semibold mb-4">
              Login Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Enter Your Phone Number
                </label>
                <input
                  type="number"
                  placeholder="Enter Your Phone Number"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message: "Invalid phone number"
                    }
                  })}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-1">
                  Enter Your E-mail
                </Label>

                <input
                  type="email"
                  placeholder="Your E-mail"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div className="relative">
                <Label className="text-sm font-medium text-gray-700 mb-1">
                  Create New Password
                </Label>

                <input
                  type="password"
                  placeholder="Create New Password"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:border-primary"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters"
                    }
                  })}
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
              </div>

            </div>
          </div>

          {/* Submit Button  */}
          <div className="mt-6 text-center">
            {/* <Link to="/user/verify-with-otp"> */}
            <button type="submit"
              disabled={isSubmitting}
              className="w-40 bg-primary text-white py-2 rounded-md hover:bg-blue-700 font-medium disabled:opacity-70"
            >
              {isSubmitting ? 'Creating...' : 'Create'}
            </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </section>
  );
}
