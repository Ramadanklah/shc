import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MessageCircle } from "lucide-react";
import DonationModal from "@/components/DonationModal";

const CASES = [
  {
    id: "001",
    patient: "Layla (9yo)",
    title: "Emergency Surgery",
    description: "Layla needs urgent surgery following injuries sustained in Aleppo. Help fund her post-operative treatment and care.",
    amountRaised: 4230,
    goalAmount: 7500,
  },
  {
    id: "002",
    patient: "Ahmad (45yo)",
    title: "Dialysis Treatment",
    description: "Ahmad requires ongoing dialysis after kidney failure. Donations cover 6 months of therapy.",
    amountRaised: 2845,
    goalAmount: 5000,
  },
  {
    id: "003",
    patient: "Anonymous",
    title: "Clinic Supplies",
    description: "A rural Idlib clinic needs medicines and consumables to serve over 200 patients weekly.",
    amountRaised: 12300,
    goalAmount: 15000,
  },
];

const CaseDetailPage: React.FC = () => {
  const { id } = useParams();
  const caseDetail = CASES.find((c) => c.id === id);
  const [showModal, setShowModal] = useState(false);

  if (!caseDetail) {
    return (
      <main className="min-h-[70vh] bg-white py-16 flex flex-col items-center justify-center">
        <div className="bg-gray-100 rounded p-8 shadow text-center">
          <p className="text-xl font-bold mb-4">Case Not Found</p>
          <Link to="/cases">
            <Button variant="outline">Back to Medical Cases</Button>
          </Link>
        </div>
      </main>
    );
  }

  const percent = Math.min((caseDetail.amountRaised / caseDetail.goalAmount) * 100, 100);
  
  const whatsappNumber = "+1234567890";
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in case "${caseDetail.title}" (ID: ${caseDetail.id})`
  );

  return (
    <main className="min-h-[70vh] bg-white py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="p-8 shadow flex flex-col mb-8">
          <div className="mb-2 text-syria-teal font-medium text-sm">{caseDetail.patient}</div>
          <h1 className="text-2xl font-bold mb-2">{caseDetail.title}</h1>
          <p className="mb-4 text-gray-600">{caseDetail.description}</p>
          <Progress value={percent} className="mb-3" />
          <div className="flex justify-between text-sm mb-2">
            <span className="font-semibold">${caseDetail.amountRaised.toLocaleString()} raised</span>
            <span className="text-gray-500">of ${caseDetail.goalAmount.toLocaleString()}</span>
          </div>
          
          <div className="flex gap-4 mt-4">
            <Button
              className="flex-1 bg-syria-teal hover:bg-syria-teal-dark text-white"
              onClick={() => setShowModal(true)}
            >
              Donate
            </Button>
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
                Contact via WhatsApp
              </a>
            </Button>
          </div>
          <DonationModal open={showModal} onOpenChange={setShowModal} />
        </Card>
        <div className="text-center">
          <Link to="/cases">
            <Button variant="outline" className="mt-2">Back to All Cases</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CaseDetailPage;
