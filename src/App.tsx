import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Index from "@/pages/Index";
import Coach from "@/pages/Coach";
import Training from "@/pages/Training";
import Metrics from "@/pages/Metrics";
import Coaches from "@/pages/Coaches";
import CoachProfileModal from "@/pages/CoachProfileModal";
import CoachChat from "@/pages/CoachChat";
import JoinFlow from "@/pages/JoinFlow";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/coach" element={<Coach />} />
      <Route path="/training" element={<Training />} />
      <Route path="/coaches" element={<Coaches />} />
      <Route path="/coach/:id" element={<CoachProfileModal />} />
      <Route path="/chat/:coachId" element={<CoachChat />} />
      <Route path="/join" element={<JoinFlow />} />
      <Route path="/metrics" element={<Metrics />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
