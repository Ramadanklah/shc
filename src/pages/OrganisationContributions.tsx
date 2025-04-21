
import React, { useState } from "react";
import Header from "@/components/Header";
import ContributionForm from "@/components/ContributionForm";
import ContributionsList from "@/components/ContributionsList";
import Footer from "@/components/Footer";
import { Upload, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

const NeedForm = ({ onSubmit }: { onSubmit: (form: any) => void }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    quantity: 1,
    category: "Equipment",
    location: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const categories = ["Equipment", "Consumables", "Services"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "quantity" ? Number(value) : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate submitting to a backend
    setTimeout(() => {
      onSubmit({
        ...form,
        status: "Needed",
        organisation: "Your Organisation", // Replace when using real organisation data
      });
      setSubmitting(false);
      setForm({
        title: "",
        description: "",
        quantity: 1,
        category: "Equipment",
        location: "",
      });
      
      // Show success toast
      toast.success("Need submitted successfully", {
        description: "Your request for " + form.title + " has been recorded."
      });
    }, 500); // Small timeout to simulate processing
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm px-6 py-5 mb-7 space-y-4">
      <h3 className="text-lg font-semibold text-syria-dark mb-2 flex gap-2 items-center">
        <Heart className="w-5 h-5 text-syria-teal" />
        Submit a New Need
      </h3>
      <div>
        <label className="font-medium mb-1 block">Need Title *</label>
        <Input
          name="title"
          value={form.title}
          onChange={handleChange}
          required
          placeholder="e.g. Ventilators, Medical Masks"
          className="bg-gray-50"
        />
      </div>
      <div>
        <label className="font-medium mb-1 block">Description *</label>
        <Textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
          placeholder="Describe the need and urgency."
          className="bg-gray-50"
          rows={2}
        />
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="font-medium mb-1 block">Quantity *</label>
          <Input
            name="quantity"
            type="number"
            min={1}
            value={form.quantity}
            onChange={handleChange}
            required
            className="bg-gray-50 w-full"
          />
        </div>
        <div className="flex-1">
          <label className="font-medium mb-1 block">Category *</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
            className="bg-gray-50 border border-gray-300 rounded px-3 py-2 w-full"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="font-medium mb-1 block">Location <span className="text-xs text-gray-400">(optional)</span></label>
        <Input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="e.g. Aleppo, Idlib Hospital"
          className="bg-gray-50"
        />
      </div>
      <Button
        className="bg-syria-teal hover:bg-syria-teal-dark text-white"
        type="submit"
        disabled={submitting}
      >
        {submitting ? "Submitting..." : "Submit Need"}
      </Button>
    </form>
  );
};

const NeedsList = ({ needs }: { needs: any[] }) => {
  if (!needs.length) {
    return <div className="text-gray-400 italic">No needs to display yet.</div>;
  }
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {needs.map((need) => (
        <div
          key={need.id}
          className="flex flex-col h-full bg-white rounded-lg shadow group overflow-hidden border hover:shadow-lg transition"
        >
          <div className="flex items-center gap-3 p-4 border-b">
            {/* Icon for category */}
            <Heart className="w-6 h-6 text-syria-teal" />
            <span className="text-lg font-semibold text-syria-dark">{need.title}</span>
            <span className="ml-auto text-xs rounded bg-syria-teal/10 px-3 py-1 text-syria-teal font-semibold">
              {need.category}
            </span>
          </div>
          <div className="flex-1 px-4 py-3 flex flex-col gap-2">
            <div className="text-gray-700 mb-1">{need.description}</div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Quantity:</span> {need.quantity}
              {need.location && (
                <>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="font-medium">Location:</span> {need.location}
                </>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Status:</span>
              <span className={`px-2 py-0.5 rounded text-xs font-semibold bg-yellow-100 text-yellow-800`}>{need.status}</span>
            </div>
            <div className="flex items-center mt-3">
              <span className="text-xs text-gray-500">Organisation: <span className="font-semibold">{need.organisation}</span></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const OrganisationContributions = () => {
  const [contributions, setContributions] = useState(initialContributions);
  const [needs, setNeeds] = useState(initialNeeds);

  // Handle new contribution
  const handleContributionSubmit = (form: any) => {
    const newContribution = {
      ...form,
      id: Date.now(),
      organisation: "Your Organisation", // Replace with real org data when backend exists
      status: "Pending Approval",
    };
    
    setContributions([newContribution, ...contributions]);
    
    // Show success toast
    toast.success("Contribution submitted successfully", {
      description: "Your contribution of " + form.title + " is pending approval."
    });
  };

  // Handle new need
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
        {/* Section: Offers */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-syria-teal mb-3">What our organisation offers</h2>
          <ContributionForm onSubmit={handleContributionSubmit} />
          <div>
            <ContributionsList contributions={contributions} />
          </div>
        </section>
        {/* Section: Needs */}
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
