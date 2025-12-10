import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dumbbell, HeartPulse, Zap, Brain } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AIAssistant from "@/components/AIAssistant";
import { coaches } from "@/components/coaches";

const Coach = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    credentials: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    alert(`Coach ${formData.username} registered with credentials: ${formData.credentials}`);
    setFormData({ username: "", email: "", password: "", credentials: "" });
  };

  return (
    <div className="container mx-auto py-20 space-y-16">
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-4">Get a Coach</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Connect with certified human coaches for personalized training plans and mentorship.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <Button onClick={() => navigate("/join")}>Find a Coach</Button>
          <Button variant="outline" onClick={() => navigate("/coaches")}>
            Browse Coaches
          </Button>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Suggested Coaches</span>
        </div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
  {coaches.filter((c) => c.featured).map((coach) => (
    <CoachCard
      key={coach.id}
      id={coach.id}
      name={coach.name}
      specialty={coach.specialty}
      icon={getCoachIcon(coach.specialty)}
      onViewProfile={() => navigate(`/coach/${coach.id}`)}
    />
  ))}
</div>

      </section>

      <AIAssistant />

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Register as a Coach</h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Are you a certified coach? Register here to help athletes achieve their goals.
        </p>
        <div className="max-w-2xl mx-auto space-y-4">
          <Input
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <Input
            name="credentials"
            placeholder="Credentials (e.g., certification ID)"
            value={formData.credentials}
            onChange={handleChange}
          />
          <Button className="w-full mt-4" onClick={handleRegister}>
            Register
          </Button>
        </div>
      </section>
    </div>
  );
};

const CoachCard = ({
  id,
  name,
  specialty,
  icon,
  onViewProfile,
}: {
  id: string;
  name: string;
  specialty: string;
  icon: React.ReactNode;
  onViewProfile: () => void;
}) => (
  <Card className="shadow-glow border-border/50 hover:scale-[1.02] transition-transform text-center">
    <CardHeader>
      <CardTitle className="flex flex-col items-center gap-2">
        {icon}
        <span>{name}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">{specialty}</p>
      <Button variant="outline" className="w-full mt-3" onClick={onViewProfile}>
        View Profile
      </Button>
    </CardContent>
  </Card>
);

function getCoachIcon(specialty: string) {
  switch (specialty.toLowerCase()) {
    case "strength":
      return <Dumbbell className="w-6 h-6 text-primary" />;
    case "endurance":
      return <HeartPulse className="w-6 h-6 text-accent" />;
    case "speed":
      return <Zap className="w-6 h-6 text-chart-3" />;
    case "mental":
      return <Brain className="w-6 h-6 text-secondary" />;
    default:
      return <Zap className="w-6 h-6 text-primary" />;
  }
}

export default Coach;
