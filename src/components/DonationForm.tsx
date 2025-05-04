
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from '@/integrations/supabase/client';

const DONATION_OPTIONS = [50, 100, 250, 500, 1000];

const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form data for step 2
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [receiveUpdates, setReceiveUpdates] = useState(true);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null);
    }
  };

  const getActualAmount = () => {
    if (selectedAmount) return selectedAmount;
    if (customAmount) return parseInt(customAmount);
    return 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      setStep(2);
      return;
    }
    
    // Process payment in step 2
    setIsSubmitting(true);
    
    try {
      const amount = getActualAmount();
      
      // In a real implementation, this would integrate with a payment processor
      // For now, we'll just add an entry to the donations table
      
      // Generate a mock transaction ID
      const transactionId = `DEMO-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
      
      // Get current user if logged in
      const { data: { session } } = await supabase.auth.getSession();
      const userId = session?.user?.id;
      
      // Record donation
      const { error } = await supabase.from('donations').insert({
        amount,
        is_monthly: isMonthly,
        is_anonymous: isAnonymous,
        donor_id: userId, // Will be null for non-logged in users
        transaction_id: transactionId,
        payment_status: 'completed' // In a real app, this would be updated by the payment processor webhook
      });
      
      if (error) throw error;
      
      // Show success message
      toast.success("Thank you for your donation!", {
        description: `Your ${isMonthly ? "monthly" : "one-time"} donation of $${amount} has been processed.`,
      });
      
      // Reset form
      setStep(1);
      setSelectedAmount(100);
      setCustomAmount("");
      setIsMonthly(false);
      setFullName("");
      setEmail("");
      setIsAnonymous(false);
      setReceiveUpdates(true);
      
    } catch (error) {
      console.error("Donation error:", error);
      toast.error("Donation processing error", {
        description: "There was an error processing your donation. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-6 shadow-md bg-white">
      <form onSubmit={handleSubmit}>
        {step === 1 ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-syria-dark text-center">Make a Donation</h2>
            <div className="mb-6">
              <Label htmlFor="donation-type" className="block mb-3 text-sm font-medium">
                Donation Type
              </Label>
              <div className="flex gap-4 mb-6">
                <Button
                  type="button"
                  variant={!isMonthly ? "default" : "outline"}
                  className={!isMonthly ? "bg-syria-teal hover:bg-syria-teal-dark text-white flex-1" : "border-syria-teal text-syria-teal hover:bg-syria-teal/10 flex-1"}
                  onClick={() => setIsMonthly(false)}
                >
                  One-time
                </Button>
                <Button
                  type="button"
                  variant={isMonthly ? "default" : "outline"}
                  className={isMonthly ? "bg-syria-teal hover:bg-syria-teal-dark text-white flex-1" : "border-syria-teal text-syria-teal hover:bg-syria-teal/10 flex-1"}
                  onClick={() => setIsMonthly(true)}
                >
                  Monthly
                </Button>
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="donation-amount" className="block mb-3 text-sm font-medium">
                Donation Amount
              </Label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {DONATION_OPTIONS.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => handleAmountSelect(amount)}
                    className={`py-3 px-4 border-2 rounded-md font-medium transition-colors focus:outline-none ${
                      selectedAmount === amount 
                        ? 'border-syria-teal text-syria-teal bg-syria-teal/5' 
                        : 'border-gray-200 text-gray-700 hover:border-syria-teal/30'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <Label htmlFor="custom-amount" className="block mb-2 text-sm font-medium">
                  Custom Amount
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-500">$</span>
                  </div>
                  <Input
                    id="custom-amount"
                    placeholder="Enter amount"
                    className="pl-8"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-syria-dark">Payment Details</h2>
              <p className="text-gray-600 mt-2">
                {isMonthly ? "Monthly" : "One-time"} donation of ${getActualAmount()}
              </p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <Label htmlFor="full-name">Full Name</Label>
                <Input 
                  id="full-name" 
                  placeholder="John Doe" 
                  required 
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-4">
                  This is a demo version. In a real implementation, secure payment fields
                  would appear here (credit card, PayPal, etc.).
                </p>
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="anonymous" 
                  checked={isAnonymous}
                  onCheckedChange={(checked) => setIsAnonymous(checked === true)}
                />
                <Label htmlFor="anonymous" className="text-sm leading-tight">
                  Make this donation anonymous
                </Label>
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="newsletter" 
                  checked={receiveUpdates}
                  onCheckedChange={(checked) => setReceiveUpdates(checked === true)}
                />
                <Label htmlFor="newsletter" className="text-sm leading-tight">
                  Send me updates about the impact of my donation
                </Label>
              </div>
            </div>
            
            <div className="mt-4 flex gap-4">
              <Button 
                type="button" 
                variant="outline" 
                className="flex-1"
                onClick={() => setStep(1)}
                disabled={isSubmitting}
              >
                Back
              </Button>
              <Button 
                type="submit" 
                className="bg-syria-teal hover:bg-syria-teal-dark text-white flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Complete Donation"
                )}
              </Button>
            </div>
          </>
        )}
        
        {step === 1 && (
          <Button 
            type="submit" 
            className="w-full mt-6 bg-syria-teal hover:bg-syria-teal-dark text-white py-6"
            disabled={(!selectedAmount && !customAmount) || (customAmount && parseInt(customAmount) <= 0)}
          >
            Continue
          </Button>
        )}
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-600 text-center">
            Your donation is secure and helps provide essential medical care to those in need.
            SyriaHealthcare.com ensures that 100% of your contribution goes directly to medical aid.
          </p>
        </div>
      </form>
    </Card>
  );
};

export default DonationForm;
