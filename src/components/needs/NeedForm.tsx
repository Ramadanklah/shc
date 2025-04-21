
import React, { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface NeedFormProps {
  onSubmit: (form: any) => void;
}

const NeedForm: React.FC<NeedFormProps> = ({ onSubmit }) => {
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
    
    setTimeout(() => {
      onSubmit({
        ...form,
        status: "Needed",
        organisation: "Your Organisation",
      });
      setSubmitting(false);
      setForm({
        title: "",
        description: "",
        quantity: 1,
        category: "Equipment",
        location: "",
      });
      
      toast.success("Need submitted successfully", {
        description: "Your request for " + form.title + " has been recorded."
      });
    }, 500);
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

export default NeedForm;
