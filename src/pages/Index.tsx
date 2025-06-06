
import Hero from "@/components/Hero";
import HtmlBasics from "@/components/HtmlBasics";
import ElementsShowcase from "@/components/ElementsShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Hero />
      <HtmlBasics />
      <ElementsShowcase />
      <Footer />
    </div>
  );
};

export default Index;
