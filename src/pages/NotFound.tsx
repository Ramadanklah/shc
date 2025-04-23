
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-syria-light">
        <div className="text-center px-4 py-12">
          <h1 className="text-7xl font-bold text-syria-teal mb-6">{t('notFound.title')}</h1>
          <p className="text-2xl text-syria-dark mb-8">{t('notFound.message')}</p>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            {t('notFound.description')}
          </p>
          <Button 
            className="bg-syria-teal hover:bg-syria-teal-dark text-white"
            size="lg"
            asChild
          >
            <Link to="/">{t('notFound.returnButton')}</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
