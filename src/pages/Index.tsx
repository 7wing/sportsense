import Hero from "@/components/Hero";
import WelcomeModal from "@/components/WelcomeModal"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <WelcomeModal />
      <Hero />
    </div>
  );
};

export default Index;
