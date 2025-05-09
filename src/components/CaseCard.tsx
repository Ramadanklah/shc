
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CaseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  urgency: 'low' | 'medium' | 'high';
}

const CaseCard: React.FC<CaseCardProps> = ({
  id,
  title,
  description,
  image,
  urgency
}) => {
  const getUrgencyBadge = () => {
    switch (urgency) {
      case 'high':
        return <span className="absolute top-4 right-4 bg-syria-red text-white px-3 py-1 rounded-full text-xs font-bold">Urgent</span>;
      case 'medium':
        return <span className="absolute top-4 right-4 bg-syria-orange text-white px-3 py-1 rounded-full text-xs font-bold">High Need</span>;
      default:
        return null;
    }
  };

  return (
    <Card className="overflow-hidden case-card transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-52 object-cover"
        />
        {getUrgencyBadge()}
        <div className="case-card-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 flex items-end">
          <div className="p-4">
            <Button 
              className="bg-white text-syria-teal hover:bg-syria-teal hover:text-white"
              asChild
            >
              <Link to={`/cases/${id}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-syria-dark">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="mt-4 flex justify-end items-center">
          <Button 
            size="sm" 
            className="bg-syria-teal hover:bg-syria-teal-dark text-white"
            asChild
          >
            <Link to={`/cases/${id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CaseCard;
