
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Eye } from '@/utils/svg-utils';
import uploadIcon from "../../assets/uploadIcon.png";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectValue,
    SelectLabel,
    SelectItem,
    SelectTrigger,
} from "../ui/select";
import { useFileUpload } from '@/hooks/useFileUpload';

const gender = [
    { id: 1, gen: "male" },
    { id: 2, gen: "female" },
    { id: 3, gen: "others" },
];

// FileUploader component using the useFileUpload hook
const FileUploader = ({ label, required, initialUrl, fileType, onUploadComplete }) => {
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

    // State to track the current image URL to display
    const [displayUrl, setDisplayUrl] = useState(initialUrl || "");

    // Update display URL when initialUrl changes (from parent)
    React.useEffect(() => {
        setDisplayUrl(initialUrl);
    }, [initialUrl]);

    // Update display URL when a new file is selected (local preview)
    React.useEffect(() => {
        if (imagePreview) {
            setDisplayUrl(imagePreview);
        }
    }, [imagePreview]);

    // Update display URL when upload is complete
    React.useEffect(() => {
        if (uploadedUrl) {
            setDisplayUrl(uploadedUrl);
        }
    }, [uploadedUrl]);

    // Handle upload and notify parent
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
            <div className="w-full flex flex-col items-center justify-center h-28 rounded-md bg-blue-100 overflow-hidden cursor-pointer"
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
                {uploading ? 'Uploading...' : 'Upload'}
            </button>
            {uploadedUrl && (
                <p className="text-green-500 text-xs mt-1">File uploaded successfully!</p>
            )}
        </div>
    );
};

const AgentRegister = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");

    // State to store uploaded file URLs
    const [fileUrls, setFileUrls] = useState({
        photo: "",
        nid: "",
        tradeLicense: "",
        hlLicense: "",
    });

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
        watch,
    } = useForm();

    // Function to handle file upload completion
    const handleFileUploadComplete = (fileType, url) => {
        console.log(`File uploaded for ${fileType}:`, url);
        setFileUrls(prev => ({
            ...prev,
            [fileType]: url
        }));
    };

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        try {
            // Prepare the data with file URLs
            const submissionData = {
                ...data,
                ...fileUrls // Include all file URLs
            };

            console.log("Submitting data:", submissionData);

            // API call using Axios with JSON data
            const response = await axios.post('https://bideshgami.onrender.com/api/v1/users/register/merchant', submissionData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            toast.success('Registration successful!');
            reset();
            // Reset file URLs
            setFileUrls({
                photo: "",
                nid: "",
                tradeLicense: "",
                hlLicense: "",
            });
        } catch (error) {
            console.error('Registration error:', error);
            toast.error(error.response?.data?.message || 'Registration failed');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen py-4">
            <div className="border border-gray-200 shadow-sm rounded-sm w-full max-w-3xl p-8">
                {/* Title */}
                <h2 className="text-2xl font-bold text-center">Become A Bideshgami Agent</h2>
                <p className="text-center text-gray-500 text-sm mt-1">
                    Fill out the basic info, and get a chance to grow your business with us
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Basic Info */}
                    <div className="mt-6">
                        <h3 className="text-primary font-semibold mb-4">Basic Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1">Enter Your Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Full Name"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1">Select Your Gender</label>
                                <Controller
                                    name="gender"
                                    control={control}
                                    rules={{ required: "Gender is required" }}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
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
                                {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>}
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1">Agent/Shop Name</label>
                                <input
                                    type="text"
                                    placeholder="Agent/Shop Name"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                    {...register("agentShopName", { required: "Agent name is required" })}
                                />
                                {errors.agentShopName && <p className="text-red-500 text-xs mt-1">{errors.agentShopName.message}</p>}
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1">Agent/Shop Address</label>
                                <input
                                    type="text"
                                    placeholder="Agent/Shop Address"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                                    {...register("agentShopAddress", { required: "Agency address is required" })}
                                />
                                {errors.agentShopAddress && <p className="text-red-500 text-xs mt-1">{errors.agentShopAddress.message}</p>}
                            </div>
                        </div>
                    </div>

                    {/* Login Info  */}
                    <div className="mt-6">
                        <h3 className="text-primary font-semibold mb-4">Login Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1">Enter Your Phone Number</label>
                                <input
                                    type="tel"
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
                                {errors.loginPhone && <p className="text-red-500 text-xs mt-1">{errors.loginPhone.message}</p>}
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1">Enter Your E-mail</label>
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
                                <label className="text-sm font-medium text-gray-700 mb-1">Create New Password</label>
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

                    {/* Upload Section  */}
                    <div className="mt-6">
                        <h3 className="text-primary font-semibold mb-4">Document Uploads</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <FileUploader
                                label="Upload Your Photo"
                                required={true}
                                initialUrl={fileUrls.photo}
                                fileType="photo"
                                onUploadComplete={handleFileUploadComplete}
                            />

                            <FileUploader
                                label="Upload NID"
                                required={true}
                                initialUrl={fileUrls.nid}
                                fileType="nid"
                                onUploadComplete={handleFileUploadComplete}
                            />

                            <FileUploader
                                label="Upload Trade License"
                                required={false}
                                initialUrl={fileUrls.tradeLicense}
                                fileType="tradeLicense"
                                onUploadComplete={handleFileUploadComplete}
                            />

                            {selectedCategory === "Hajj & Umrah" && (
                                <FileUploader
                                    label="Upload HL License"
                                    required={true}
                                    initialUrl={fileUrls.hlLicense}
                                    fileType="hlLicense"
                                    onUploadComplete={handleFileUploadComplete}
                                />
                            )}
                        </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start mt-6">
                        <input
                            type="checkbox"
                            className="mt-1 text-primary"
                            {...register("terms", { required: "You must agree to terms and conditions" })}
                        />
                        <label className="ml-2 text-sm text-gray-600">
                            By Continuing, I agree to the website <a href="#" className="text-primary hover:underline">Terms And
                                Condition</a> and Privacy Policy
                        </label>
                    </div>
                    {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms.message}</p>}

                    {/* Submit Button  */}
                    <div className="mt-6 text-center">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-40 bg-primary text-white py-2 rounded-md hover:bg-blue-700 font-medium disabled:opacity-70"
                        >
                            {isSubmitting ? 'Creating...' : 'Create'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AgentRegister;