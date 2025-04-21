
import React, { useState } from "react";
import Header from "@/components/Header";
import ContributionForm from "@/components/ContributionForm";
import ContributionsList from "@/components/ContributionsList";
import NeedForm from "@/components/needs/NeedForm";
import NeedsList from "@/components/needs/NeedsList";
import Footer from "@/components/Footer";
import { Upload, Heart } from "lucide-react";
import { toast } from "sonner";

// Dummy initial offers for demo
const initialContributions = [
  {
    id: 1,
    title: "X-Ray Machine",
    description: "Portable digital X-Ray machine, suitable for clinics.",
    quantity: 1,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    category: "Equipment",
    location: "Idlib Hospital",
    organisation: "Syrian Health Initiative",
    status: "Available",
  },
  {
    id: 2,
    title: "Wheelchairs",
    description: "Strong, foldable wheelchairs, brand new.",
    quantity: 12,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80",
    category: "Equipment",
    location: "Damascus",
    organisation: "Relief4Syria",
    status: "Available",
  },
];

// Dummy initial needs for demo
const initialNeeds = [
  {
    id: 1,
    title: "Ventilators",
    description: "Urgent need for 3 ventilators in the ICU.",
    quantity: 3,
    category: "Equipment",
    location: "Homs Central Hospital",
    organisation: "Syrian Health Initiative",
    status: "Needed",
  },
];

const OrganisationContributions = () => {
  const [contributions, setContributions] = useState(initialContributions);
  const [needs, setNeeds] = useState(initialNeeds);

  const handleContributionSubmit = (form: any) => {
    const newContribution = {
      ...form,
      id: Date.now(),
      organisation: "Your Organisation",
      status: "Pending Approval",
    };
    
    setContributions([newContribution, ...contributions]);
    
    toast.success("Contribution submitted successfully", {
      description: "Your contribution of " + form.title + " is pending approval."
    });
  };

  const handleNeedSubmit = (form: any) => {
    setNeeds([
      {
        ...form,
        id: Date.now(),
      },
      ...needs,
    ]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-syria-light">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto w-full px-4 py-10">
        <h1 className="text-3xl font-bold text-syria-teal mb-2 flex items-center gap-2">
          <Upload className="w-7 h-7 text-syria-teal" />
          Organisation Contributions
        </h1>
        <p className="text-gray-600 mb-6">
          Submit the medical equipment, tools, or services your organisation is donating or needs. All submissions are reviewed by admin before becoming available to NGOs and cases in need.
        </p>
        
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-syria-teal mb-3">What our organisation offers</h2>
          <ContributionForm onSubmit={handleContributionSubmit} />
          <ContributionsList contributions={contributions} />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-syria-teal mb-3">What our organisation needs</h2>
          <NeedForm onSubmit={handleNeedSubmit} />
          <NeedsList needs={needs} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OrganisationContributions;
