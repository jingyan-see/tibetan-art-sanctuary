import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";
import ThangkaDetailPage from "./pages/ThangkaDetailPage.tsx";
import DeityCatalogPage from "./pages/DeityCatalogPage.tsx";
import FindBuddhaPage from "./pages/FindBuddhaPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gallery/:type" element={<GalleryPage />} />
          <Route path="/thangka/:id" element={<ThangkaDetailPage />} />
          <Route path="/deities" element={<DeityCatalogPage />} />
          <Route path="/find-buddha" element={<FindBuddhaPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
