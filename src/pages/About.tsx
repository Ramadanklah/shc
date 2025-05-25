import React from "react";
import { Card } from "@/components/ui/card";
import { Mail, Info, Heart, Users, Settings, ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-syria-light to-white">
      <Header />
      <main className="min-h-[70vh] py-16 flex-grow">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-syria-dark">
              {t('about.title')}
            </h1>
            <div className="w-24 h-1 bg-syria-teal mx-auto rounded-full"></div>
          </motion.div>

          {/* Mission Section */}
          <motion.section 
            className="mb-16 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            {...fadeInUp}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-syria-teal/10 rounded-full">
                <Heart className="w-6 h-6 text-syria-teal" />
              </div>
              <h2 className="text-2xl font-semibold text-syria-dark">{t('about.mission')}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {t('about.missionText')}
            </p>
          </motion.section>

          {/* Who We Are Section */}
          <motion.section 
            className="mb-16 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            {...fadeInUp}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-syria-teal/10 rounded-full">
                <Users className="w-6 h-6 text-syria-teal" />
              </div>
              <h2 className="text-2xl font-semibold text-syria-dark">{t('about.whoWeAre')}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {t('about.whoWeAreText')}
            </p>
          </motion.section>

          {/* How It Works Section */}
          <motion.section 
            className="mb-16 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            {...fadeInUp}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-syria-teal/10 rounded-full">
                <Settings className="w-6 h-6 text-syria-teal" />
              </div>
              <h2 className="text-2xl font-semibold text-syria-dark">{t('about.howItWorks')}</h2>
            </div>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <motion.div 
                className="flex gap-6 p-6 bg-syria-light/30 rounded-xl hover:bg-syria-light/40 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-syria-teal rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-syria-dark mb-2">Identify Needs</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('about.howItWorksSteps.step1')}
                  </p>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-syria-teal" />
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                className="flex gap-6 p-6 bg-syria-light/30 rounded-xl hover:bg-syria-light/40 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-syria-teal rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-syria-dark mb-2">Collect Donations</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('about.howItWorksSteps.step2')}
                  </p>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-syria-teal" />
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                className="flex gap-6 p-6 bg-syria-light/30 rounded-xl hover:bg-syria-light/40 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-syria-teal rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-syria-dark mb-2">Coordinate Delivery</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('about.howItWorksSteps.step3')}
                  </p>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-syria-teal" />
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            {...fadeInUp}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-syria-teal/10 rounded-full">
                <Info className="w-6 h-6 text-syria-teal" />
              </div>
              <h2 className="text-2xl font-semibold text-syria-dark">
                {t('about.generalInquiries')} / {t('about.contact')}
              </h2>
            </div>
            <p className="text-gray-700 mb-6">{t('about.contactText')}</p>
            <a
              href="mailto:info@syriahc.com"
              className="inline-flex items-center gap-2 text-syria-teal hover:text-syria-teal-dark transition-colors duration-300 group"
            >
              <Mail size={20} />
              <span className="underline">{t('about.email')}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
