import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <footer className="bg-syria-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 group mb-6"
              aria-label="Syria Health Connect"
            >
       
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-syria-teal transition-colors duration-200">
                 <span className="text-syria-teal"> Syria Health Connect</span>
                </h3>
                <span className="text-sm text-gray-400 mt-1">
                  {t('footer.tagline', 'Saving Lives Through Healthcare')}
                </span>
              </div>
            </Link>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              {t('footer.description', 'Connecting donors with medical needs in Syria to save lives and provide essential healthcare.')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-6">
            <h3 className="text-xl font-semibold mb-6">{t('footer.quickLinks', 'Quick Links')}</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/cases" className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t('nav.medicalCases')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t('nav.about')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-semibold mb-6">{t('footer.legal', 'Legal')}</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t('footer.privacyPolicy', 'Privacy Policy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t('footer.termsOfService', 'Terms of Service')}
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  {t('footer.impactReport', 'Impact Report')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SyriaHealthcare. {t('footer.allRightsReserved', 'All rights reserved.')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
