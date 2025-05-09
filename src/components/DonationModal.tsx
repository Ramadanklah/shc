
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

interface DonationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ open, onOpenChange }) => {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="mb-2">{t('about.title')}</DialogTitle>
          <DialogDescription>{t('about.missionText')}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <p>Our platform focuses on connecting healthcare providers with needed resources rather than monetary donations. 
             We help facilitate the exchange of medical equipment, supplies, and services between organizations.</p>
          <p className="text-sm text-gray-600">
            If you're interested in contributing, please register your organization to offer services or resources directly.
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">{t('donate.close')}</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;
