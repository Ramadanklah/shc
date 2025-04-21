
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ClipboardPen } from "lucide-react";

const VolunteerPage: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Dummy form submit
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Thank you for volunteering! (Demo only, no data is saved)");
  }

  return (
    <main className="min-h-[70vh] bg-syria-light py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-4 text-syria-dark">Volunteer With Us</h1>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-syria-teal mb-1 flex items-center gap-1">
            <ClipboardPen size={22} /> Interested in Saving Lives?
          </h2>
          <p className="text-gray-700">
            We're looking for doctors, nurses, paramedics, pharmacists, drivers, translators, field coordinators,
            and others who want to make a difference. Whether in Syria or remote, your skills are needed!
          </p>
        </section>
        <Card className="p-6 bg-white mb-8">
          <h3 className="text-lg font-semibold mb-3 text-syria-dark">Volunteer Sign-Up</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">
                Name
              </label>
              <input
                required
                id="name"
                name="name"
                type="text"
                className="w-full px-3 py-2 border rounded focus:outline-syria-teal"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="speciality">
                Speciality / Skills
              </label>
              <input
                required
                id="speciality"
                name="speciality"
                type="text"
                className="w-full px-3 py-2 border rounded focus:outline-syria-teal"
                placeholder="E.g. Surgery, Pharmacy, Logistics"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="location">
                Location
              </label>
              <input
                required
                id="location"
                name="location"
                type="text"
                className="w-full px-3 py-2 border rounded focus:outline-syria-teal"
                placeholder="Where are you based?"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="contact">
                Contact Info (Email or Phone)
              </label>
              <input
                required
                id="contact"
                name="contact"
                type="text"
                className="w-full px-3 py-2 border rounded focus:outline-syria-teal"
                placeholder="How can we reach you?"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="cv">
                Upload CV / Credentials (Optional)
              </label>
              <input
                ref={fileInputRef}
                id="cv"
                name="cv"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                className="w-full rounded border px-3 py-1"
              />
            </div>
            <Button className="bg-syria-teal hover:bg-syria-teal-dark text-white" type="submit">
              Submit Application
            </Button>
          </form>
        </Card>
        <div className="text-gray-700 text-sm">
          Have questions? Email us at{" "}
          <a href="mailto:volunteer@syriahealthcare.com" className="underline text-syria-teal">
            volunteer@syriahealthcare.com
          </a>
        </div>
      </div>
    </main>
  );
};

export default VolunteerPage;
