
import React from 'react';
import { Button } from "@/components/ui/button";
import CaseCard from "./CaseCard";
import { Link } from "react-router-dom";

// Sample data for the latest cases
const LATEST_CASES = [
  {
    id: "case-001",
    title: "Emergency Surgery for 9-year-old Layla",
    description: "Layla needs urgent surgery following injuries sustained in Aleppo. Your support will help cover surgical costs and essential post-operative care.",
    image: "https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?auto=format&fit=crop&q=80",
    amountRaised: 4230,
    goalAmount: 7500,
    urgency: 'high' as const,
  },
  {
    id: "case-002",
    title: "Dialysis Treatment for Ahmad",
    description: "Ahmad, 45, requires ongoing dialysis treatment after kidney failure. Help fund his life-saving weekly treatments for the next six months.",
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80",
    amountRaised: 2845,
    goalAmount: 5000,
    urgency: 'medium' as const,
  },
  {
    id: "case-003",
    title: "Medical Supplies for Rural Clinic",
    description: "This clinic in rural Idlib serves over 200 patients weekly. Your donation will provide essential medicines and supplies for three months.",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80",
    amountRaised: 12300,
    goalAmount: 15000,
    urgency: 'low' as const,
  }
];

const LatestCases = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-syria-dark">Recent Medical Cases</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These individuals and communities urgently need medical assistance. 
            Your contribution can make the difference between life and death.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LATEST_CASES.map(caseItem => (
            <CaseCard 
              key={caseItem.id}
              id={caseItem.id}
              title={caseItem.title}
              description={caseItem.description}
              image={caseItem.image}
              amountRaised={caseItem.amountRaised}
              goalAmount={caseItem.goalAmount}
              urgency={caseItem.urgency}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-syria-teal text-syria-teal hover:bg-syria-teal/10"
            asChild
          >
            <Link to="/cases">View All Medical Cases</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestCases;
