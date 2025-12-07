import { Button } from "@/components/ui/button";
import { Activity, Brain, Target } from "lucide-react";
import heroImage from "@/assets/hero-training.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-32">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Activity className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-medium">Next-Gen Athletic Intelligence</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
          Train Smarter with
          <br />
          <span className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
            SportSense
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Real-time performance metrics, AI-powered coaching and immersive training simulations
          to elevate your athletic performance.
        </p>

        {/* CTA */}
        <div className="flex justify-center mb-20 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <Link to="/coach">
            <Button
              size="lg"
              className="text-lg shadow-glow hover:shadow-glow-accent transition-all duration-300"
            >
              Start Training
            </Button>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          <FeatureCard
            icon={<Activity className="w-8 h-8 text-primary" />}
            title="Live Metrics"
            description="Track speed, cadence, heart rate and reaction times in real-time"
          />
          <FeatureCard
            icon={<Brain className="w-8 h-8 text-primary" />}
            title="AI Coaching"
            description="Personalized insights and training recommendations powered by AI"
          />
          <FeatureCard
            icon={<Target className="w-8 h-8 text-primary" />}
            title="Immersive Training"
            description="Virtual routes, reaction drills and gamified challenges"
          />
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="group relative">
    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300 blur-xl" />
    <div className="relative bg-background/90 border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 shadow-md text-foreground">
      <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default Hero;
