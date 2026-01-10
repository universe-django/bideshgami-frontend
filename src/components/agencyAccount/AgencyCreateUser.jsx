import React, { useState } from "react";
import { Upload, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import uploadIcon from "../../assets/uploadIcon.png";

export default function AgencyCreateUser() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    designation: "",
    phoneNumber: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted", formData);
  };

  return (
    <div className="w-full bg-gray-100">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-none shadow-none p-6">
        {/* Image Upload Section */}
        <div className="mb-6">
          <div className="border-2 border-dashed border-blue-300 rounded bg-blue-50/30 p-16 text-center">
            <Input
              type="file"
              id="imageUpload"
              className="hidden"
              accept="image/*"
              onChange={handleImageSelect}
            />
            <Label htmlFor="imageUpload" className="cursor-pointer block">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="mx-auto max-h-24 rounded"
                />
              ) : (
                <>
                  <div className="flex justify-center mb-2">
                    <img src={uploadIcon} alt="" />
                  </div>
                  <p className="text-gray-400 text-base">Browse Image</p>
                </>
              )}
            </Label>
          </div>
          <button
            type="button"
            onClick={() => document.getElementById("imageUpload").click()}
            className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded"
          >
            Upload
          </button>
        </div>

        {/* Basic Information Section */}
        <div className="mb-6">
          <h2 className="text-blue-600 font-semibold text-base mb-4">
            Basic Information
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="fullName"
                className="text-xs font-normal text-gray-700 mb-1 block"
              >
                Full Name
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Full Name"
                className="h-10 bg-white border-gray-300 rounded"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>
            <div>
              <Label
                htmlFor="designation"
                className="text-xs font-normal text-gray-700 mb-1 block"
              >
                Designation
              </Label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, designation: value })
                }
              >
                <SelectTrigger className="h-10 bg-white border-gray-300 rounded">
                  <SelectValue placeholder="Designation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="designer">Designer</SelectItem>
                  <SelectItem value="analyst">Analyst</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Login Information Section */}
        <div className="mb-6">
          <h2 className="text-blue-600 font-semibold text-base mb-4">
            Login Information
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <Label
                htmlFor="phoneNumber"
                className="text-xs font-normal text-gray-700 mb-1 block"
              >
                Phone Number
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="Phone Number"
                className="h-10 bg-white border-gray-300 rounded"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
              />
            </div>
            <div>
              <Label
                htmlFor="email"
                className="text-xs font-normal text-gray-700 mb-1 block"
              >
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="E-mail"
                className="h-10 bg-white border-gray-300 rounded"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="newPassword"
                className="text-xs font-normal text-gray-700 mb-1 block"
              >
                New Password
              </Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="New Password"
                  className="h-10 bg-white border-gray-300 rounded pr-10"
                  value={formData.newPassword}
                  onChange={(e) =>
                    setFormData({ ...formData, newPassword: e.target.value })
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showNewPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <Label
                htmlFor="confirmPassword"
                className="text-xs font-normal text-gray-700 mb-1 block"
              >
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="h-10 bg-white border-gray-300 rounded pr-10"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-12 rounded"
          >
            Create New User
          </button>
        </div>
      </div>
    </div>
  );
}
