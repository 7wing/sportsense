import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, Zap, Timer } from "lucide-react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const mockHeartRateData = [
  { time: "0:00", value: 65 },
  { time: "0:30", value: 85 },
  { time: "1:00", value: 120 },
  { time: "1:30", value: 145 },
  { time: "2:00", value: 160 },
  { time: "2:30", value: 155 },
  { time: "3:00", value: 148 },
  { time: "3:30", value: 142 },
];

const mockSpeedData = [
  { time: "0:00", value: 0 },
  { time: "0:30", value: 15 },
  { time: "1:00", value: 22 },
  { time: "1:30", value: 28 },
  { time: "2:00", value: 32 },
  { time: "2:30", value: 30 },
  { time: "3:00", value: 26 },
  { time: "3:30", value: 24 },
];

const MetricsDashboard = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Performance Metrics</h2>
          <p className="text-lg text-muted-foreground">Real-time analytics to optimize your training</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={<Activity className="w-5 h-5" />}
            label="Avg Speed"
            value="24.5"
            unit="km/h"
            change="+5.2%"
          />
          <StatCard
            icon={<Heart className="w-5 h-5" />}
            label="Heart Rate"
            value="148"
            unit="bpm"
            change="+2.1%"
          />
          <StatCard
            icon={<Zap className="w-5 h-5" />}
            label="Power Output"
            value="285"
            unit="W"
            change="+8.3%"
          />
          <StatCard
            icon={<Timer className="w-5 h-5" />}
            label="Reaction Time"
            value="0.24"
            unit="sec"
            change="-3.5%"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-destructive" />
                Heart Rate Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={mockHeartRateData}>
                  <defs>
                    <linearGradient id="heartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis 
                    dataKey="time" 
                    stroke="hsl(var(--muted-foreground))" 
                    style={{ fontSize: '0.75rem' }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))" 
                    style={{ fontSize: '0.75rem' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(var(--destructive))" 
                    strokeWidth={2}
                    fill="url(#heartGradient)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Speed Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={mockSpeedData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis 
                    dataKey="time" 
                    stroke="hsl(var(--muted-foreground))" 
                    style={{ fontSize: '0.75rem' }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))" 
                    style={{ fontSize: '0.75rem' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))', r: 4 }}
                    activeDot={{ r: 6, fill: 'hsl(var(--primary))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ 
  icon, 
  label, 
  value, 
  unit, 
  change 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  unit: string; 
  change: string; 
}) => {
  const isPositive = change.startsWith('+');
  const changeColor = label === "Reaction Time" ? (!isPositive ? 'text-primary' : 'text-destructive') : (isPositive ? 'text-primary' : 'text-destructive');

  return (
    <Card className="border-border/50 hover:border-primary/50 transition-colors duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="text-muted-foreground">{icon}</div>
          <span className={`text-xs font-medium ${changeColor}`}>{change}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-1">{label}</p>
        <p className="text-2xl font-bold">
          {value}
          <span className="text-sm text-muted-foreground ml-1">{unit}</span>
        </p>
      </CardContent>
    </Card>
  );
};

export default MetricsDashboard;
