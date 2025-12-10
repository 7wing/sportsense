import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, AlertTriangle, MessageSquare, Sparkles } from "lucide-react";

const AIAssistant = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Powered by Advanced AI</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Your AI Training Coach</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get personalized insights and recommendations based on your performance data
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8 justify-center items-start md:items-stretch">
          <Card className="flex flex-col h-full border-primary/20 shadow-glow w-full sm:w-[95%] md:w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                Performance Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 space-y-4">
              <InsightCard
                type="success"
                icon={<TrendingUp className="w-5 h-5" />}
                title="Endurance Improvement"
                message="Your sustained effort zone increased 12% over the last 2 weeks. Great progress on aerobic capacity!"
              />
              <InsightCard
                type="warning"
                icon={<AlertTriangle className="w-5 h-5" />}
                title="Fatigue Detection"
                message="Sprint acceleration dropped 12% after 3 minutes. Consider adding interval recovery training."
              />
              <InsightCard
                type="info"
                icon={<TrendingUp className="w-5 h-5" />}
                title="Reaction Time Optimized"
                message="Your response latency decreased by 3.5%. Cognitive drills are showing results!"
              />
            </CardContent>
          </Card>

          <Card className="flex flex-col h-full border-primary/20 shadow-glow w-full sm:w-[95%] md:w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Ask Your AI Coach
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-1">
              <div className="space-y-4 mb-4 flex-1">
                <ChatMessage
                  isUser={true}
                  message="What should I focus on to improve my sprint times?"
                />
                <ChatMessage
                  isUser={false}
                  message="Based on your recent data, I recommend focusing on explosive power training. Your acceleration phase is strong, but maintaining top speed needs work. Try 6x200m sprints with 3-minute recovery twice per week."
                />
                <ChatMessage
                  isUser={true}
                  message="How's my endurance compared to last month?"
                />
                <ChatMessage
                  isUser={false}
                  message="Compared to last month, your endurance has improved by 8%. Long-distance pace is steadier, but recovery between intervals still needs work. I recommend adding one extra recovery run per week."
                />
              </div>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Ask about your training..." 
                  className="flex-1 px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button>Start</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <Button variant="outline" className="border-primary/50">
            <Brain className="w-4 h-4 mr-2" />
            Generate Training Plan
          </Button>
          <Button variant="outline" className="border-primary/50">
            <TrendingUp className="w-4 h-4 mr-2" />
            Compare Progress
          </Button>
          <Button variant="outline" className="border-primary/50">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Injury Risk Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

const InsightCard = ({
  type,
  icon,
  title,
  message
}: {
  type: 'success' | 'warning' | 'info';
  icon: React.ReactNode;
  title: string;
  message: string;
}) => {
  const colors = {
    success: 'border-primary/30 bg-primary/5',
    warning: 'border-accent/30 bg-accent/5',
    info: 'border-chart-3/30 bg-chart-3/5',
  };

  const badgeColors = {
    success: 'bg-primary/20 text-primary border-primary/30',
    warning: 'bg-accent/20 text-accent border-accent/30',
    info: 'bg-chart-3/20 text-chart-3 border-chart-3/30',
  };

  return (
    <div className={`p-4 rounded-lg border ${colors[type]} transition-all duration-300 hover:scale-[1.02]`}>
      <div className="flex items-start gap-3">
        <div className="mt-1">{icon}</div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-semibold">{title}</h4>
            <Badge variant="outline" className={badgeColors[type]}>AI</Badge>
          </div>
          <p className="text-sm text-muted-foreground">{message}</p>
        </div>
      </div>
    </div>
  );
};

const ChatMessage = ({ isUser, message }: { isUser: boolean; message: string }) => (
  <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
    <div className={`max-w-[80%] px-4 py-3 rounded-lg ${
      isUser 
        ? 'bg-primary text-primary-foreground' 
        : 'bg-card border border-border'
    }`}>
      <p className="text-sm">{message}</p>
    </div>
  </div>
);

export default AIAssistant;
