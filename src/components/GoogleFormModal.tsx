import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";

interface GoogleFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GoogleFormModal: React.FC<GoogleFormModalProps> = ({ open, onOpenChange }) => {
  const { t } = useTranslation();
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScUA5HweHBk8MLt1NZC4liqVTRUeCwxYpI06KIxn3pVdDoP6Q/viewform?usp=header";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-syria-dark mb-2">
            {t('donate.title')}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="text-center space-y-2">
            <p className="text-gray-600">
              {t('donate.redirectMessage')}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Button
              className="w-full bg-syria-teal hover:bg-syria-teal-dark text-white py-6"
              onClick={() => window.open(formUrl, '_blank', 'noopener,noreferrer')}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              {t('donate.contribute')}
            </Button>
            
            <Button
              variant="outline"
              className="w-full border-syria-teal text-syria-teal hover:bg-syria-teal/10"
              onClick={() => onOpenChange(false)}
            >
              {t('donate.close')}
            </Button>
          </div>

          <div className="text-sm text-gray-500 text-center">
            {t('donate.note')}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GoogleFormModal; 