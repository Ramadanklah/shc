
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RegisterOrganisation from "./pages/RegisterOrganisation";
import CasesPage from "./pages/Cases";
import AboutPage from "./pages/About";
import VolunteerPage from "./pages/Volunteer";
import CaseDetailPage from "./pages/CaseDetail";
import OrganisationContributions from "./pages/OrganisationContributions";
import Auth from "./pages/Auth";

const queryClient = new QueryClient();

const App = () => {
  const { i18n } = useTranslation();

  // Ensure language persistence and proper HTML direction setting
  useEffect(() => {
    const savedLanguage = localStorage.getItem("i18nextLng");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/register-organisation" element={<RegisterOrganisation />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/cases" element={<CasesPage />} />
              <Route path="/cases/:id" element={<CaseDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/volunteer" element={<VolunteerPage />} />
              <Route 
                path="/organisations/contributions" 
                element={
                  <ProtectedRoute>
                    <OrganisationContributions />
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
