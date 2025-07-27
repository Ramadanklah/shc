
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ContactSectionProps {
  hospitalId: string;
  hospitalName: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ hospitalId, hospitalName }) => {
  const { t } = useTranslation();
  
  const whatsappNumber = "+491629233934";
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in helping ${hospitalName} (ID: ${hospitalId})`
  );

  return (
    <div className="flex gap-4 mt-8">
      <Button
        variant="outline"
        className="flex items-center gap-2 text-green-600 border-green-600 hover:bg-green-50"
        asChild
      >
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="w-5 h-5" />
          {t('caseDetail.contact')}
        </a>
      </Button>
    </div>
  );
};

export default ContactSection;
