
import React from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import LatestCases from "../components/LatestCases";
import DonationForm from "../components/DonationForm";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <LatestCases />
        
        <section className="py-16 bg-gradient-to-br from-syria-teal/20 to-syria-blue/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-syria-dark">
                  Make a Difference Today
                </h2>
                <p className="text-gray-700 mb-6">
                  Your donation directly funds life-saving medical care for Syrian 
                  patients in desperate need. We ensure that 100% of your contribution 
                  goes to medical treatment, supplies, and support.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-syria-teal/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-syria-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-syria-dark">Transparent Tracking</h3>
                      <p className="text-sm text-gray-600">Follow your donation's impact with regular updates</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-syria-teal/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-syria-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-syria-dark">Secure Processing</h3>
                      <p className="text-sm text-gray-600">Fully encrypted transactions and data protection</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-syria-teal/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-syria-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-syria-dark">Tax-Deductible</h3>
                      <p className="text-sm text-gray-600">Donations eligible for tax deduction in many countries</p>
                    </div>
                  </div>
                </div>
                <Button 
                  className="bg-syria-teal hover:bg-syria-teal-dark text-white animate-pulse-gentle"
                  size="lg"
                  asChild
                >
                  <Link to="/donate">Donate Now</Link>
                </Button>
              </div>
              
              <div>
                <DonationForm />
              </div>
            </div>
          </div>
        </section>
        
        <AboutSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-syria-dark">Testimonials</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from those who have been helped by your generous contributions and the difference it has made in their lives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-syria-light p-6 rounded-lg relative">
                <div className="text-syria-teal text-5xl absolute -top-4 left-4">"</div>
                <div className="pt-4">
                  <p className="text-gray-700 mb-4 italic">
                    "Without this surgery, I wouldn't be able to walk today. Thank you to everyone who donated to help me recover from my injuries."
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-syria-dark">Fatima S.</h4>
                      <p className="text-xs text-gray-500">Received emergency surgery in Idlib</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-syria-light p-6 rounded-lg relative">
                <div className="text-syria-teal text-5xl absolute -top-4 left-4">"</div>
                <div className="pt-4">
                  <p className="text-gray-700 mb-4 italic">
                    "As a doctor working in northern Syria, the medical supplies we receive through this platform have saved countless lives in our community clinic."
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-syria-dark">Dr. Hassan M.</h4>
                      <p className="text-xs text-gray-500">Physician at Aleppo Regional Hospital</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-syria-light p-6 rounded-lg relative">
                <div className="text-syria-teal text-5xl absolute -top-4 left-4">"</div>
                <div className="pt-4">
                  <p className="text-gray-700 mb-4 italic">
                    "My son needed specialized care that wasn't available locally. This platform connected us with doctors and funded his treatment. He's now recovering well."
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-syria-dark">Amina K.</h4>
                      <p className="text-xs text-gray-500">Mother of patient from Homs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-syria-teal text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission Today</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Every donation, no matter how small, contributes to saving lives and providing critical 
              healthcare to those who need it most in Syria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-syria-teal hover:bg-gray-100"
                size="lg"
                asChild
              >
                <Link to="/donate">Make a Donation</Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                size="lg"
                asChild
              >
                <Link to="/volunteer">Volunteer With Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
