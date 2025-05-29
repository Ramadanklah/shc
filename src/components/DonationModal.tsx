
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";
import DonationForm from "./DonationForm";

interface DonationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ open, onOpenChange }) => {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-syria-dark mb-2">
            Donate Now
          </DialogTitle>
        </DialogHeader>
        
        <DonationForm onSuccess={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;
