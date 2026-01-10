import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export const useFileUpload = () => {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleSelectFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    event.preventDefault();
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImagePreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      toast.success("File uploaded successfully");
      const url = response.data.file;
      setUploadedUrl(response.data.file);
      setFile(null);
      setImagePreview(null);
      return url;
    } catch (error) {
      console.log(error);
      toast.error("File upload failed");
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  return {
    file,
    imagePreview,
    uploading,
    uploadedUrl,
    fileInputRef,
    handleSelectFile,
    handleFileChange,
    handleUpload,
  };
};
