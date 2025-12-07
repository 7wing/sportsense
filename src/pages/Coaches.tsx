import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { coaches } from "@/components/coaches"; // centralized coach data

const Coaches = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Header with back arrow */}
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-2 mb-8">
  {/* Back arrow */}
  <Button
    variant="ghost"
    size="icon"
    onClick={() => navigate(-1)}
    className="mb-0 sm:mb-0 self-start sm:self-auto"
  >
    <ArrowLeft className="w-5 h-5" />
  </Button>

  {/* Heading */}
  <h2 className="text-3xl font-bold text-center w-full sm:w-auto sm:flex-1">
    Browse Coaches
  </h2>
</div>


        {/* Coaches grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coaches.map((coach) => (
            <Card key={coach.id} className="shadow-glow flex flex-col text-center">
              <CardHeader>
                <CardTitle>{coach.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-muted-foreground mb-4">{coach.specialty}</p>
                <p className="text-sm mb-6">{coach.bio}</p>
                <Button onClick={() => navigate(`/coach/${coach.id}`)} className="mt-auto">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaches;
