import React from "react";
import { BedDouble, Wheelchair, Image } from "lucide-react";

interface Contribution {
  id: number;
  title: string;
  description: string;
  quantity: number;
  image?: string;
  category: string;
  location?: string;
  organisation: string;
  status: string;
}

interface Props {
  contributions: Contribution[];
}

const getCategoryIcon = (cat: string) => {
  switch (cat) {
    case "Equipment": return <BedDouble className="w-6 h-6 text-syria-teal" />;
    case "Consumables": return <Image className="w-6 h-6 text-syria-teal" />;
    case "Services": return <Wheelchair className="w-6 h-6 text-syria-teal" />;
    default: return <BedDouble className="w-6 h-6 text-syria-teal" />;
  }
};

const ContributionsList: React.FC<Props> = ({ contributions }) => {
  if (!contributions.length) {
    return <div className="text-gray-400 italic">No contributions to display yet.</div>;
  }
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {contributions.map((c) => (
        <div
          key={c.id}
          className="flex flex-col h-full bg-white rounded-lg shadow group overflow-hidden border hover:shadow-lg transition"
        >
          <div className="flex items-center gap-3 p-4 border-b">
            {getCategoryIcon(c.category)}
            <span className="text-lg font-semibold text-syria-dark">{c.title}</span>
            <span className="ml-auto text-xs rounded bg-syria-teal/10 px-3 py-1 text-syria-teal font-semibold">
              {c.category}
            </span>
          </div>
          {c.image && (
            <img
              src={c.image}
              alt={c.title}
              className="w-full h-44 object-cover"
              style={{ background: "#eee" }}
            />
          )}
          <div className="flex-1 px-4 py-3 flex flex-col gap-2">
            <div className="text-gray-700 mb-1">{c.description}</div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Quantity:</span> {c.quantity}
              {c.location && (
                <>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="font-medium">Location:</span> {c.location}
                </>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Status:</span>
              <span className={`px-2 py-0.5 rounded text-xs font-semibold ${c.status === "Available" ? "bg-green-100 text-green-800" : "bg-gray-100 text-syria-teal"}`}>{c.status}</span>
            </div>
            <div className="flex items-center mt-3">
              <span className="text-xs text-gray-500">Donated by <span className="font-semibold">{c.organisation}</span></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContributionsList;
