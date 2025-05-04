
import React from "react";
import { Upload } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

interface LogoUploadProps {
  logoPreview: string | null;
  onLogoChange: (file: File | null) => void;
}

export const LogoUpload: React.FC<LogoUploadProps> = ({ 
  logoPreview, 
  onLogoChange 
}) => {
  const { t } = useTranslation();

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error(t('register.logoTooLarge'));
        return;
      }
      
      onLogoChange(file);
    } else {
      onLogoChange(null);
    }
  };

  return (
    <div>
      <label className="block font-semibold mb-1">
        {t('register.logo')}
      </label>
      <div className="flex items-center gap-4">
        <label className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-syria-teal text-white rounded hover:bg-syria-teal-dark">
          <Upload className="w-5 h-5" />
          <span>{t('register.uploadLogo')}</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleLogoChange}
          />
        </label>
        {logoPreview && (
          <img
            src={logoPreview}
            alt="Logo preview"
            className="w-12 h-12 object-cover rounded-full border"
          />
        )}
      </div>
    </div>
  );
};
