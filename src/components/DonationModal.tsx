
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

const BANK_NAME = "Syrian Solidarity Bank";
const ACCOUNT_HOLDER = "Syria Healthcare Foundation";
const IBAN = "SY12 3456 7890 1234 5678 90";
const SWIFT = "SSBKSYDA";
const CURRENCY = "USD / EUR / SYP";
const PAYPAL_EMAIL = "donate@syriahealthcare.com";
const NOTE = "After sending your donation, please email a copy of your transaction to donations@syriahealthcare.com to help us verify and track your contribution.";

interface DonationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ open, onOpenChange }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PAYPAL_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="mb-2">Donate to Support This Case</DialogTitle>
          <DialogDescription>Choose a donation option below.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <div>
            <h4 className="font-semibold mb-1">Bank Transfer</h4>
            <div className="text-sm bg-gray-50 border rounded p-3">
              <div><span className="font-medium">Bank Name:</span> {BANK_NAME}</div>
              <div><span className="font-medium">Account Holder:</span> {ACCOUNT_HOLDER}</div>
              <div><span className="font-medium">IBAN:</span> {IBAN}</div>
              <div><span className="font-medium">SWIFT/BIC:</span> {SWIFT}</div>
              <div><span className="font-medium">Currency:</span> {CURRENCY}</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">PayPal</h4>
            <div className="flex items-center gap-2 bg-gray-50 border rounded p-3 select-all">
              <span className="font-medium">Email:</span>
              <span>{PAYPAL_EMAIL}</span>
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={handleCopy}
                className="ml-2 px-2"
              >
                <Copy size={16} className="mr-1" />
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>
          <p className="text-xs text-gray-600 italic">{NOTE}</p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;
