
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Upload, Image, List, Folder, BedDouble } from "lucide-react";

const categories = [
  "Equipment",
  "Consumables", 
  "Services",
];

interface FormProps {
  onSubmit: (data: any) => void;
}

const ContributionForm: React.FC<FormProps> = ({ onSubmit }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    quantity: 1,
    image: null as File | null,
    imageUrl: "",
    category: categories[0],
    location: "",
  });
  const [preview, setPreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setForm({
      ...form,
      image: file,
      imageUrl: file ? URL.createObjectURL(file) : "",
    });
    setPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
        image: form.imageUrl,
      });
      setSubmitting(false);
      setForm({
        title: "",
        description: "",
        quantity: 1,
        image: null,
        imageUrl: "",
        category: categories[0],
        location: "",
      });
      setPreview(null);
    }, 500); // Small timeout to simulate processing
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm px-6 py-6 mb-8 space-y-5">
      <h3 className="text-lg font-semibold text-syria-dark mb-2 flex gap-2 items-center">
        <BedDouble className="w-5 h-5 text-syria-teal" /> Submit a New Contribution
      </h3>
      <div>
        <label className="font-medium mb-1 block">Contribution Title *</label>
        <Input
          name="title"
          value={form.title}
          onChange={handleChange}
          required
          placeholder="e.g. X-Ray Machine, Wheelchairs"
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
          placeholder="Describe the contribution and its condition."
          className="bg-gray-50"
          rows={3}
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
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex-1">
          <label className="font-medium mb-1 block">Location <span className="text-xs text-gray-400">(optional)</span></label>
          <Input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="e.g. Aleppo, Idlib Hospital"
            className="bg-gray-50"
          />
        </div>
        <div className="flex-1">
          <label className="font-medium mb-1 block">Image <span className="text-xs text-gray-400">(optional)</span></label>
          <div className="flex items-center gap-3">
            <label className="flex items-center cursor-pointer bg-syria-teal text-white px-4 py-2 rounded hover:bg-syria-teal-dark gap-2 w-max">
              <Upload className="w-4 h-4" />
              <span>Upload</span>
              <input 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleFileChange}
              />
            </label>
            {preview && (
              <img src={preview} alt="Preview" className="w-12 h-12 object-cover rounded border" />
            )}
          </div>
        </div>
      </div>
      <Button
        className="bg-syria-teal hover:bg-syria-teal-dark text-white"
        type="submit"
        size="lg"
        disabled={submitting}
      >
        {submitting ? "Submitting..." : "Submit Contribution"}
      </Button>
    </form>
  );
};

export default ContributionForm;
