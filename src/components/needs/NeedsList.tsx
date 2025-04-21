
import React from "react";
import { Heart } from "lucide-react";

interface Need {
  id: number;
  title: string;
  description: string;
  quantity: number;
  category: string;
  location?: string;
  organisation: string;
  status: string;
}

interface NeedsListProps {
  needs: Need[];
}

const NeedsList: React.FC<NeedsListProps> = ({ needs }) => {
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

export default NeedsList;
