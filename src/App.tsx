import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RegisterOrganisation from "./pages/RegisterOrganisation";
import CasesPage from "./pages/Cases";
import AboutPage from "./pages/About";
import VolunteerPage from "./pages/Volunteer";
import CaseDetailPage from "./pages/CaseDetail";
import OrganisationContributions from "./pages/OrganisationContributions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register-organisation" element={<RegisterOrganisation />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/cases/:id" element={<CaseDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/organisations/contributions" element={<OrganisationContributions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
