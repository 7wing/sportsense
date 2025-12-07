import { useState } from "react";
import { coaches } from "@/components/coaches";
import { CalendarDays, Activity, Search } from "lucide-react";
import { Calendar } from "@/components/ui/calendar"; // assuming you have this

const Training = () => {
  const upcomingSessions = coaches.flatMap((c) => c.upcomingSessions || []);

  // Group sessions by date
  const sessionsByDate: Record<string, typeof upcomingSessions> = {};
  upcomingSessions.forEach((s) => {
    if (!sessionsByDate[s.date]) sessionsByDate[s.date] = [];
    sessionsByDate[s.date].push(s);
  });

  const sortedDates = Object.keys(sessionsByDate).sort();

  // Collect all unique goals from coaches
  const allGoals = Array.from(new Set(coaches.flatMap((c) => c.goals)));

  // State for dropdown + calendar popup
  const [selectedGoal, setSelectedGoal] = useState("");
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Filter sessions by selected goal + date
  const filteredSessionsByDate = Object.fromEntries(
    Object.entries(sessionsByDate).map(([date, sessions]) => [
      date,
      sessions.filter((s) => {
        const matchesGoal = selectedGoal
          ? coaches.some(
              (c) =>
                c.upcomingSessions?.includes(s) &&
                c.goals.includes(selectedGoal)
            )
          : true;

        const matchesDate = selectedDate ? s.date === selectedDate : true;

        return matchesGoal && matchesDate;
      }),
    ])
  );

  // Highlight only days that have sessions
  const sessionDates = new Set(sortedDates);

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Upcoming Training Agenda</h2>
          <p className="text-muted-foreground">
            Your week at a glance grouped by day.
          </p>
        </div>

        {/* Glowy Container */}
        <div className="rounded-xl bg-card p-8 shadow-lg ring-2 ring-primary/50 ring-offset-2 ring-offset-background space-y-8">
          {/* Dropdown + Calendar Row */}
          <div className="flex items-center gap-4">
            {/* Dropdown for goals */}
            <div className="flex items-center gap-2 flex-1 rounded-lg bg-muted px-3 py-2">
              <Search className="w-5 h-5 text-primary" />
              <select
                value={selectedGoal}
                onChange={(e) => setSelectedGoal(e.target.value)}
                className="appearance-none bg-muted text-foreground outline-none w-full rounded-md px-2 py-1"
              >
                <option value="">All Goals</option>
                {allGoals.map((goal) => (
                  <option key={goal} value={goal}>
                    {goal}
                  </option>
                ))}
              </select>
            </div>

            {/* Calendar Icon Button */}
            <button
              onClick={() => setCalendarOpen(true)}
              className="p-2 rounded-lg bg-muted hover:bg-muted/70 transition-colors"
            >
              <CalendarDays className="w-6 h-6 text-primary" />
            </button>
          </div>

          {/* Centered Popup Calendar */}
          {calendarOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
              <div className="bg-card p-6 rounded-xl shadow-lg">
                <Calendar
                  mode="single"
                  selected={selectedDate ? new Date(selectedDate) : undefined}
                  onSelect={(date) => {
                    if (date) {
                      // Format to local YYYY-MM-DD
                      const formatted = date.toLocaleDateString("en-CA");
                      setSelectedDate(formatted);
                    }
                    setCalendarOpen(false);
                  }}
                  modifiers={{
                    hasSession: (date) =>
                      sessionDates.has(date.toLocaleDateString("en-CA")),
                  }}
                  modifiersClassNames={{
                    hasSession: "bg-primary/30 text-primary font-bold rounded-full",
                  }}
                />
                <button
                  onClick={() => setCalendarOpen(false)}
                  className="mt-4 px-4 py-2 rounded-lg bg-primary text-primary-foreground"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Agenda List */}
          <div className="space-y-8">
            {sortedDates.map((date) => {
              const sessions = filteredSessionsByDate[date];
              if (!sessions || sessions.length === 0) return null;

              return (
                <div key={date} className="space-y-3">
                  {/* Date Header */}
                  <h3 className="flex items-center gap-2 text-xl font-semibold border-b border-border pb-1">
                    <CalendarDays className="w-5 h-5 text-primary" />
                    {date}
                  </h3>

                  {/* Sessions */}
                  <div className="space-y-2">
                    {sessions.map((s) => (
                      <div
                        key={s.id}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                      >
                        <Activity className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">{s.type}</p>
                          <p className="text-sm text-muted-foreground">{s.notes}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Fallback if no sessions */}
            {(selectedGoal || selectedDate) &&
              !Object.values(filteredSessionsByDate).some(
                (sessions) => sessions.length > 0
              ) && (
                <div className="text-center text-muted-foreground mt-6">
                  <p>
                    No sessions found for{" "}
                    {selectedGoal ? (
                      <span className="font-semibold">{selectedGoal}</span>
                    ) : (
                      "that date"
                    )}
                    .
                  </p>
                  <p className="mt-2">
                    <a href="/coach" className="text-primary hover:underline">
                      Reach a coach →
                    </a>
                  </p>
                </div>
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
