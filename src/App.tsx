import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BookProvider } from "@/context/BookContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import BrowsePage from "./pages/BrowsePage";
import BookDetailPage from "./pages/BookDetailPage";
import CategoriesPage from "./pages/CategoriesPage";
import TrackerPage from "./pages/TrackerPage";
import FavoritesPage from "./pages/FavoritesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BookProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/browse" element={<BrowsePage />} />
              <Route path="/book/:id" element={<BookDetailPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/tracker" element={<TrackerPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </BookProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
