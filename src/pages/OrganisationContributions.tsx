import React, { useState } from "react";
import Header from "@/components/Header";
import ContributionForm from "@/components/ContributionForm";
import ContributionsList from "@/components/ContributionsList";
import Footer from "@/components/Footer";
import { Upload } from "lucide-react";

const OrganisationContributions = () => {
  // For demo: keep contributions in state (replace with backend integration later)
  const [contributions, setContributions] = useState([
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
  ]);

  // Handle new contribution
  const handleContributionSubmit = (form: any) => {
    setContributions([
      {
        ...form,
        id: Date.now(),
        organisation: "Your Organisation", // Replace with real org data when backend exists
        status: "Pending Approval",
      },
      ...contributions,
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
          Submit the medical equipment, tools, or services your organisation is donating. All submissions are reviewed by admin before becoming available to NGOs and cases in need.
        </p>
        <ContributionForm onSubmit={handleContributionSubmit} />
        <div className="my-10 border-t pt-6">
          <h2 className="text-xl font-semibold text-syria-teal mb-3">All Contributions</h2>
          <ContributionsList contributions={contributions} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrganisationContributions;
