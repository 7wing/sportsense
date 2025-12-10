import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { coaches } from "@/components/coaches";

const CoachProfileModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const prefilledGoal = query.get("goal") || "";
  const [goal, setGoal] = useState(prefilledGoal);
  const [availability, setAvailability] = useState("");

  const coach = coaches.find((c) => c.id === id);
  if (!coach) return null;

  const handleRequest = () => {
    navigate(`/chat/${id}?goal=${goal}&availability=${availability}`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="max-w-md w-full shadow-glow relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <CardHeader>
          <CardTitle className="text-center">{coach.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-muted-foreground">{coach.specialty}</p>
          <p className="text-center mb-6">{coach.bio}</p>

          <fieldset className="space-y-2">
            <legend className="text-sm font-medium text-foreground">Training Goal</legend>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:ring-2 focus:ring-primary"
            >
              <option value="" disabled className="text-muted-foreground">Choose a goal</option>
              {coach.goals.map((g) => (
                <option key={g} value={g} className="bg-card text-foreground">
                  {g}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset className="space-y-2">
            <legend className="text-sm font-medium text-foreground">Availability</legend>
            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:ring-2 focus:ring-primary"
            >
              <option value="" disabled className="text-muted-foreground">Choose availability</option>
              <option value="Morning" className="bg-card text-foreground">Morning</option>
              <option value="Afternoon" className="bg-card text-foreground">Afternoon</option>
              <option value="Evening" className="bg-card text-foreground">Evening</option>
              <option value="Weekends" className="bg-card text-foreground">Weekends</option>
            </select>
          </fieldset>

          <Button className="w-full mt-4" disabled={!goal || !availability} onClick={handleRequest}>
            Request Coaching
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CoachProfileModal;
