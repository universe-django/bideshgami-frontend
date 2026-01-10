import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import uploadIcon from "../../assets/uploadIcon.png";
import { useFileUpload } from "../../hooks/useFileUpload";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const FileUpload = ({ setBannerUrl, bannerUrl }) => {
  const {
    imagePreview,
    uploading,
    uploadedUrl,
    fileInputRef,
    handleSelectFile,
    handleFileChange,
    handleUpload,
  } = useFileUpload();

  useEffect(() => {
    if (uploadedUrl) {
      setBannerUrl(uploadedUrl);
    }
  }, [uploadedUrl, setBannerUrl]);

  return (
    <div>
      <div
        onClick={handleSelectFile}
        className="w-full mb-4 h-64 bg-white border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-primary/10 transition-all relative overflow-hidden"
      >
        {imagePreview || bannerUrl ? (
          <img
            src={imagePreview || bannerUrl}
            alt="Banner"
            className="absolute w-full h-full object-contain aspect-video"
          />
        ) : (
          <>
            <div className="w-1/2 p-2 overflow-hidden flex flex-col gap-3 items-center">
              <img
                src={uploadIcon}
                alt="Upload"
                className="h-20 w-full object-contain"
              />
            </div>
            <p className="text-gray-600 font-medium text-lg">
              Upload Ad Banner
            </p>
          </>
        )}
        <Input
          ref={fileInputRef}
          accept="image/*"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      <Button
        type="button"
        onClick={handleUpload}
        className="bg-[#0066FFCC] text-white font-semibold rounded-md w-full py-2"
      >
        {uploading ? (
          <Loader2 className="animate-spin mx-auto" />
        ) : (
          "Upload Banner"
        )}
      </Button>
    </div>
  );
};

export default FileUpload;
