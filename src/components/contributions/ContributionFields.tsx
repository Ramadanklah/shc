
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContributionFieldsProps {
  form: {
    title: string;
    description: string;
    quantity: number;
    category: string;
    location: string;
  };
  categories: string[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const ContributionFields: React.FC<ContributionFieldsProps> = ({ form, categories, handleChange }) => {
  return (
    <>
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
    </>
  );
};

export default ContributionFields;
