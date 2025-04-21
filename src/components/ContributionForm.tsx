
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BedDouble } from "lucide-react";
import ContributionFields from "./contributions/ContributionFields";
import ImageUpload from "./contributions/ImageUpload";

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
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm px-6 py-6 mb-8 space-y-5">
      <h3 className="text-lg font-semibold text-syria-dark mb-2 flex gap-2 items-center">
        <BedDouble className="w-5 h-5 text-syria-teal" /> Submit a New Contribution
      </h3>
      
      <ContributionFields 
        form={form}
        categories={categories}
        handleChange={handleChange}
      />

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <ImageUpload preview={preview} onFileChange={handleFileChange} />
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
