import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { coaches } from "@/components/coaches";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const CoachChat = () => {
  const { coachId } = useParams();
  const navigate = useNavigate();
  const query = useQuery();
  const goal = query.get("goal");
  const availability = query.get("availability");

  const coach = coaches.find((c) => c.id === coachId);

  const [messages, setMessages] = useState(() => {
    if (goal && availability && coach) {
      return [
        { isUser: true, text: `My training goal is ${goal} and I’m available ${availability}.` },
        { isUser: false, text: `Great! As a ${coach.specialty} coach, I’ll tailor a plan for ${goal} with sessions in the ${availability}. Let’s get started.` },
      ];
    }
    return [];
  });

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (text: string) => {
    setMessages([
      ...messages,
      { isUser: true, text },
      { isUser: false, text: `Thanks for sharing! I’ll adjust your ${coach?.specialty} plan accordingly.` },
    ]);
  };

  return (
    <div className="h-screen flex flex-col bg-background pt-16">
      {/* Centered glowing container */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-4xl h-full flex flex-col shadow-glow border border-border rounded-lg bg-card">

          {/* Sticky Header with back arrow */}
          <div className="flex items-center gap-2 p-4 border-b border-border sticky top-0 bg-card z-10">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h2 className="text-lg font-semibold">Chat with Coach {coach?.name}</h2>
          </div>

          {/* Messages aligned to bottom */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-end space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-lg ${
                    msg.isUser
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-foreground"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex gap-2 p-4 border-t border-border">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 rounded-lg bg-card text-foreground border border-border focus:ring-2 focus:ring-primary"
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.currentTarget.value) {
                  handleSend(e.currentTarget.value);
                  e.currentTarget.value = "";
                }
              }}
            />
            <Button
              onClick={() => {
                const input = document.querySelector<HTMLInputElement>("input[type=text]");
                if (input && input.value) {
                  handleSend(input.value);
                  input.value = "";
                }
              }}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachChat;
