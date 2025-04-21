
import React from "react";
import { Image, Upload } from "lucide-react";

interface ImageUploadProps {
  preview: string | null;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ preview, onFileChange }) => {
  return (
    <div className="flex-1">
      <label className="font-medium mb-1 block">Image <span className="text-xs text-gray-400">(optional)</span></label>
      <div className="flex items-center gap-3">
        <label className="flex items-center cursor-pointer bg-syria-teal text-white px-4 py-2 rounded hover:bg-syria-teal-dark gap-2 w-max">
          <Upload className="w-4 h-4" />
          <span>Upload</span>
          <input 
            type="file" 
            accept="image/*" 
            className="hidden" 
            onChange={onFileChange}
          />
        </label>
        {preview && (
          <img src={preview} alt="Preview" className="w-12 h-12 object-cover rounded border" />
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
