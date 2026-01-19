import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PlantLibrary from "./pages/PlantLibrary";
import PlantDetail from "./pages/PlantDetail";
import GuidedTours from "./pages/GuidedTours";
import TourDetail from "./pages/TourDetail";
import Bookmarks from "./pages/Bookmarks";
import AboutAyush from "./pages/AboutAyush";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/plants" element={<PlantLibrary />} />
          <Route path="/plants/:id" element={<PlantDetail />} />
          <Route path="/tours" element={<GuidedTours />} />
          <Route path="/tours/:id" element={<TourDetail />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/about" element={<AboutAyush />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
