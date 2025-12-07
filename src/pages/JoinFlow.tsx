import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowLeft, X } from "lucide-react";
import { coaches } from "@/components/coaches";

const JoinFlow = () => {
  const [goal, setGoal] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const matchedCoach = coaches.find((c) =>
      c.goals.some((g) => g.toLowerCase() === goal.toLowerCase())
    );
    const matchedCoachId = matchedCoach?.id || coaches[0].id;
    navigate(`/coach/${matchedCoachId}?goal=${goal}`);
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

        <CardHeader className="flex items-center gap-2">
          <CardTitle className="text-center flex-1">Find a Coach</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="text-muted-foreground text-center">
            Answer a quick question to get matched with the right coach.
          </p>

          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:ring-2 focus:ring-primary"
          >
            <option value="" disabled>Select Training Goal</option>
            {[...new Set(coaches.flatMap((c) => c.goals))].map((g) => (
              <option key={g} value={g} className="bg-card text-foreground">
                {g}
              </option>
            ))}
          </select>

          <Button onClick={handleSubmit} disabled={!goal} className="w-full">
            Get Matched
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default JoinFlow;
