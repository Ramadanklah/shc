
import React from "react";
import { Card } from "@/components/ui/card";
import { Mail, Info } from "lucide-react";

const AboutPage: React.FC = () => (
  <main className="min-h-[70vh] bg-syria-light py-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-4 text-syria-dark">About Us</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-syria-teal mb-2">Our Mission</h2>
        <p className="text-gray-700">
          SyriaHealthcare.com connects donors and health professionals to deliver vital medical assistance
          to those affected by the crisis in Syria. We ensure your donations go directly to lifesaving care.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-syria-teal mb-2">Who We Are</h2>
        <p className="text-gray-700">
          Our team is a coalition of Syrian and international volunteers, medical workers, tech specialists, and advocates,
          working transparently to maximize the impact of every donation.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-syria-teal mb-2">How The System Works</h2>
        <ul className="list-disc ml-8 text-gray-700">
          <li>Verified medical cases are submitted by individuals or organisations.</li>
          <li>Donors choose cases to support and donate securely.</li>
          <li>All donations are tracked, with real-time updates.</li>
          <li>Our team and partners ensure funds go to the right patients.</li>
        </ul>
      </section>
      <Card className="p-6 bg-white flex flex-col gap-2">
        <div className="flex items-center gap-2 text-syria-teal text-lg font-medium mb-1">
          <Info size={20} /> General Inquiries / Contact Us
        </div>
        <p className="text-gray-700 mb-3">Feel free to contact us with questions or suggestions:</p>
        <div className="flex items-center gap-3 text-gray-800">
          <Mail size={18} />{" "}
          <a
            href="mailto:info@syriahealthcare.com"
            className="underline hover:text-syria-teal"
          >
            info@syriahealthcare.com
          </a>
        </div>
      </Card>
    </div>
  </main>
);

export default AboutPage;
