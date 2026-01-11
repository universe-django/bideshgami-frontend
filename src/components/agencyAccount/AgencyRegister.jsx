import { useFileUpload } from "@/hooks/useFileUpload";
import { Eye } from "@/utils/svg-utils";
import axios from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Agency1 from "../../assets/Agency1.jpg";
import Agency2 from "../../assets/Agency2.jpg";
import Agency3 from "../../assets/Agency3.jpg";
import uploadIcon from "../../assets/uploadIcon.png";

import { Card } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const gender = [
  { id: 1, gen: "male" },
  { id: 2, gen: "female" },
  { id: 3, gen: "other" },
];

const AGENCY_TYPES = [
  {
    id: 1,
    title: "Recruiting Agency",
    type: "Recruiting",
    image: Agency2,
  },
  {
    id: 2,
    title: "Hajj & Umrah Agency",
    type: "Hajj",
    image: Agency1,
  },
  {
    id: 3,
    title: "Student Consultancy",
    type: "Student",
    image: Agency3,
  },
];

const FileUploader = ({
  label,
  required,
  initialUrl,
  fileType,
  onUploadComplete,
}) => {
  const {
    file,
    imagePreview,
    uploading,
    uploadedUrl,
    fileInputRef,
    handleSelectFile,
    handleFileChange,
    handleUpload,
  } = useFileUpload();

  const [displayUrl, setDisplayUrl] = useState(initialUrl || "");

  useEffect(() => {
    setDisplayUrl(initialUrl);
  }, [initialUrl]);

  useEffect(() => {
    if (imagePreview) {
      setDisplayUrl(imagePreview);
    }
  }, [imagePreview]);

  useEffect(() => {
    if (uploadedUrl) {
      setDisplayUrl(uploadedUrl);
    }
  }, [uploadedUrl]);

  const handleUploadClick = async () => {
    const url = await handleUpload();
    if (url) {
      onUploadComplete(fileType, url);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <p className="text-sm font-medium text-gray-700 mb-2">
        {label} {required && "*"}
      </p>
      <div
        className="w-full flex flex-col items-center justify-center h-28 rounded-md bg-blue-100 overflow-hidden"
        onClick={handleSelectFile}
      >
        {displayUrl ? (
          <img
            src={displayUrl}
            alt="Preview"
            className="h-full w-full object-contain"
          />
        ) : (
          <>
            <img src={uploadIcon} alt="" className="h-12" />
            <span className="text-gray-500 text-sm">Browse Image</span>
          </>
        )}
      </div>
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
        multiple={false}
      />
      <button
        type="button"
        onClick={handleUploadClick}
        disabled={uploading || !file}
        className="mt-1 w-full bg-primary text-white py-1.5 rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default function AgencyRegister() {
  const [agencyType, setAgencyType] = useState("");
  const [isTypeSelected, setIsTypeSelected] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [fileUrls, setFileUrls] = useState({
    companyPhoto: "",
    uploadNID: "",
    uploadTradeLicence: "",
    uploadHLOrRL: "",
    uploadCivilAviationLicence: "",
  });

  useEffect(() => {
    console.log("Updated fileUrls:", fileUrls);
  }, [fileUrls]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const handleTypeSelection = (type) => {
    setAgencyType(type);
    setIsTypeSelected(true);
  };

  const handleFileUploadComplete = (fileType, url) => {
    console.log(`File uploaded for ${fileType}:`, url);
    setFileUrls((prev) => ({
      ...prev,
      [fileType]: url,
    }));
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const submissionData = {
        ...data,
        agencyType,
        ...fileUrls,
      };

      console.log("Submitting data:", submissionData);

      const response = await axios.post(
        "https://bideshgami.onrender.com/api/v1/users/register/agency",
        submissionData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      console.log("responses data", response);
      toast.success("Registration successful!");
      reset();
      setIsTypeSelected(false);
      setAgencyType("");
      setFileUrls({
        companyPhoto: "",
        uploadNID: "",
        uploadTradeLicence: "",
        uploadHLOrRL: "",
        uploadCivilAviationLicence: "",
      });
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center py-4">
      <div className="w-full p-8">
        {!isTypeSelected ? (
          <section className="min-h-screen rounded-lg bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4 py-12">
            <div className="w-full max-w-6xl">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Welcome to <span className="text-blue-600">Bideshgami</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 font-medium">
                  Select the type of account you want to create
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {AGENCY_TYPES.map((agency) => (
                  <button
                    onClick={() => handleTypeSelection(agency.type)}
                    key={agency.id}
                    className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={agency.image}
                        alt={agency.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-bold text-xl md:text-2xl text-center drop-shadow-lg">
                        {agency.title}
                      </h3>
                    </div>
                    <div className="absolute inset-0 ring-4 ring-blue-500/0 group-hover:ring-blue-500/30 rounded-2xl transition-all duration-300" />
                  </button>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-500 text-base">
                  Already have an account?{" "}
                  <Link
                    // to={"/login"}
                    to={"/agency"}
                    className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                  >
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </section>
        ) : (
          <Card className="px-8 max-w-4xl mx-auto">
            <h2 className="sm:text-3xl text-xl mb-2 font-semibold text-center">
              Become a Bideshgami{" "}
              {agencyType === "Recruiting"
                ? "Recruiting Agency"
                : agencyType === "Hajj"
                  ? "Hajj & Umrah Agency"
                  : "Student Consultancy"}
            </h2>
            <p className="text-center mb-10 text-gray-700 text-sm">
              Fill out the basic info. and get a chance to grow your business
              with us{" "}
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-6">
                <h3 className="text-2xl text-primary font-semibold mb-4">
                  Basic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1">
                      Agency Name
                    </label>
                    <input
                      type="text"
                      placeholder="Agency Name"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                      {...register("agencyName", {
                        required: "Agency name is required",
                      })}
                    />
                    {errors.agencyName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.agencyName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1">
                      Select Your Gender
                    </label>
                    <Controller
                      name="gender"
                      control={control}
                      rules={{ required: "Gender is required" }}
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full border border-gray-300 rounded-md py-3 px-4 flex justify-between items-center gap-2">
                            <SelectValue placeholder="Gender" />
                          </SelectTrigger>
                          <SelectContent className="w-full">
                            <SelectGroup>
                              <SelectLabel>Gender</SelectLabel>
                              {gender.map((data) => (
                                <SelectItem key={data.id} value={data.gen}>
                                  {data.gen}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.gender && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.gender.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1">
                      Designation
                    </label>
                    <input
                      type="text"
                      placeholder="Designation"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                      {...register("designation", {
                        required: "Designation is required",
                      })}
                    />
                    {errors.designation && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.designation.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1">
                      Agency Address
                    </label>
                    <input
                      type="text"
                      placeholder="Agency Address"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                      {...register("agencyAddress", {
                        required: "Agency address is required",
                      })}
                    />
                    {errors.agencyAddress && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.agencyAddress.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1">
                      License Number
                    </label>
                    <input
                      type="text"
                      placeholder="License Number"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                      {...register("licenseNumber", {
                        required: "License number is required",
                      })}
                    />
                    {errors.licenseNumber && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.licenseNumber.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10,15}$/,
                          message: "Invalid phone number",
                        },
                      })}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Account Info */}
              <div className="mt-6">
                <h3 className="text-primary text-2xl font-semibold mb-4">
                  Account Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="relative">
                    <label className="text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Create Password"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:border-primary"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                      })}
                    />
                    <span className="absolute right-3 top-9 text-gray-400 cursor-pointer">
                      <Eye />
                    </span>
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Bank Info */}
              <div className="mt-6">
                <h3 className="text-primary text-2xl font-semibold mb-4">
                  Bank Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      placeholder="Bank Name"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                      {...register("bankName")}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1">
                      Account Name
                    </label>
                    <input
                      type="text"
                      placeholder="Account Name"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                      {...register("accountName")}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1">
                      Account Number
                    </label>
                    <input
                      type="text"
                      placeholder="Account Number"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                      {...register("accountNumber")}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1">
                      Branch Name
                    </label>
                    <input
                      type="text"
                      placeholder="Branch Name"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                      {...register("branchName")}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1">
                      Routing Number
                    </label>
                    <input
                      type="text"
                      placeholder="Routing Number"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                      {...register("routingNumber")}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl text-primary font-semibold mb-4">
                  Document Uploads
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FileUploader
                    label="Upload Company Photo"
                    required={false}
                    initialUrl={fileUrls.companyPhoto}
                    fileType="companyPhoto"
                    onUploadComplete={handleFileUploadComplete}
                  />

                  <FileUploader
                    label="Upload NID"
                    required={false}
                    initialUrl={fileUrls.uploadNID}
                    fileType="uploadNID"
                    onUploadComplete={handleFileUploadComplete}
                  />

                  <FileUploader
                    label="Upload Trade License"
                    required={false}
                    initialUrl={fileUrls.uploadTradeLicence}
                    fileType="uploadTradeLicence"
                    onUploadComplete={handleFileUploadComplete}
                  />

                  <FileUploader
                    label={
                      agencyType === "Hajj"
                        ? "Upload Hajj License"
                        : agencyType === "Recruiting"
                          ? "Upload Recruiting License"
                          : "Upload License"
                    }
                    required={false}
                    initialUrl={fileUrls.uploadHLOrRL}
                    fileType="uploadHLOrRL"
                    onUploadComplete={handleFileUploadComplete}
                  />

                  <FileUploader
                    label="Upload Civil Aviation License"
                    required={false}
                    initialUrl={fileUrls.uploadCivilAviationLicence}
                    fileType="uploadCivilAviationLicence"
                    onUploadComplete={handleFileUploadComplete}
                  />
                </div>
              </div>

              <div className="flex items-start mb-4 my-6">
                <input
                  type="checkbox"
                  className="mt-1 text-primary"
                  {...register("terms", {
                    required: "You must agree to terms and conditions",
                  })}
                />
                <label className="ml-2 text-sm text-gray-600">
                  By Continuing, I agree to the website{" "}
                  <a href="#" className="text-primary hover:underline">
                    Terms And Condition
                  </a>{" "}
                  and Privacy Policy
                </label>
              </div>
              {errors.terms && (
                <p className="text-red-500 text-xs mb-4">
                  {errors.terms.message}
                </p>
              )}

              {/* Submit Button  */}
              <div className="flex w-full">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-center sm:w-5/6 w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium mx-auto disabled:opacity-70"
                >
                  {isSubmitting ? "Creating..." : "Create Account"}
                </button>
              </div>
            </form>
          </Card>
        )}
      </div>
    </div>
  );
}
