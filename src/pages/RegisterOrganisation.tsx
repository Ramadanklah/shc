import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Upload, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const RegisterOrganisation = () => {
  // Form state
  const [orgName, setOrgName] = useState("");
  const [logo, setLogo] = useState<File | null>(null);
  const [location, setLocation] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [license, setLicense] = useState("");
  const [about, setAbout] = useState("");
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [whatsapp, setWhatsapp] = useState("");

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setLogo(file || null);
    if (file) {
      setLogoPreview(URL.createObjectURL(file));
    } else {
      setLogoPreview(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (whatsapp && !whatsapp.match(/^\+?[1-9]\d{1,14}$/)) {
      toast.error("Please enter a valid WhatsApp number");
      return;
    }

    // Placeholder for submit logic (to be replaced with backend/API logic)
    alert(
      "Organisation Registration Submitted!\n\nThis is a UI prototype. Backend integration and admin approval will be added later."
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-syria-light">
      <div className="w-full max-w-xl mt-12 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-syria-teal flex items-center gap-2">
          <Upload className="w-7 h-7 text-syria-teal" /> Register Your Organisation
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-semibold mb-1">
              Organisation Name *
            </label>
            <Input
              required
              value={orgName}
              onChange={e => setOrgName(e.target.value)}
              placeholder="e.g. Syrian Health Initiative"
              className="bg-gray-50"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">
              Organisation Logo
            </label>
            <div className="flex items-center gap-4">
              <label className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-syria-teal text-white rounded hover:bg-syria-teal-dark">
                <Upload className="w-5 h-5" />
                <span>Upload Logo</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleLogoChange}
                />
              </label>
              {logoPreview && (
                <img
                  src={logoPreview}
                  alt="Logo preview"
                  className="w-12 h-12 object-cover rounded-full border"
                />
              )}
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1">
              Location *
            </label>
            <Input
              required
              value={location}
              onChange={e => setLocation(e.target.value)}
              placeholder="e.g. Aleppo, Syria"
              className="bg-gray-50"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">
              Contact Person *
            </label>
            <Input
              required
              value={contactPerson}
              onChange={e => setContactPerson(e.target.value)}
              placeholder="Full name of main contact"
              className="bg-gray-50"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">
              Contact Email *
            </label>
            <Input
              required
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="organisation@email.com"
              className="bg-gray-50"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">
              Licence / Registration Number
              <span className="text-xs text-gray-500"> (if applicable)</span>
            </label>
            <Input
              value={license}
              onChange={e => setLicense(e.target.value)}
              placeholder="Reg # or leave blank"
              className="bg-gray-50"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">About Organisation</label>
            <Textarea
              value={about}
              onChange={e => setAbout(e.target.value)}
              placeholder="Briefly describe your organisation and its humanitarian/medical activities."
              className="bg-gray-50"
              rows={3}
            />
          </div>
          <div className="text-center">
            <label className="block font-semibold mb-1">
              WhatsApp Number
              <span className="text-xs text-gray-500"> (with country code)</span>
            </label>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-green-600" />
              <Input
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value)}
                placeholder="+1234567890"
                className="bg-gray-50"
                type="tel"
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <Button
              className="bg-syria-teal hover:bg-syria-teal-dark text-white"
              type="submit"
              size="lg"
            >
              Register Organisation
            </Button>
            <Link to="/" className="text-syria-teal underline">
              Cancel
            </Link>
          </div>
        </form>
      </div>
      <div className="mt-8 mb-16 text-gray-500 text-sm">
        Already registered?{" "}
        <Link to="/login" className="text-syria-teal underline">
          Login here
        </Link>
      </div>
    </div>
  );
};

export default RegisterOrganisation;
