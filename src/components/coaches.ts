export type TrainingSession = {
  id: string;
  date: string;
  type: string;
  notes: string;
};

export type Coach = {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  goals: string[];
  featured?: boolean;
  pastSessions?: TrainingSession[];
  upcomingSessions?: TrainingSession[];
};

export const coaches: Coach[] = [
  {
    id: "alex",
    name: "Alex Johnson",
    specialty: "Strength",
    bio: "Expert in strength training and hypertrophy.",
    goals: ["Strength", "Hypertrophy", "Powerlifting"],
    featured: true,
    pastSessions: [
      { id: "p1", date: "2025-12-01", type: "Strength", notes: "Heavy lifting session" },
      { id: "p2", date: "2025-12-03", type: "Strength", notes: "Bench press focus" },
    ],
    upcomingSessions: [
      { id: "u1", date: "2025-12-07", type: "Strength", notes: "Upper body workout" },
      { id: "u2", date: "2025-12-09", type: "Strength", notes: "Leg day session" },
    ],
  },
  {
    id: "maria",
    name: "Maria Lopez",
    specialty: "Endurance",
    bio: "Marathon coach with focus on stamina.",
    goals: ["Endurance", "Marathon Prep", "Triathlon"],
    featured: true,
    pastSessions: [
      { id: "p3", date: "2025-12-02", type: "Endurance", notes: "Interval run" },
      { id: "p4", date: "2025-12-05", type: "Endurance", notes: "Long slow distance run" },
    ],
    upcomingSessions: [
      { id: "u3", date: "2025-12-08", type: "Endurance", notes: "Tempo run planned" },
      { id: "u4", date: "2025-12-11", type: "Endurance", notes: "Long run" },
    ],
  },
  {
    id: "david",
    name: "David Kim",
    specialty: "Speed",
    bio: "Sprint specialist improving acceleration and top speed.",
    goals: ["Speed", "Agility", "Explosiveness"],
    featured: true,
    pastSessions: [
      { id: "p5", date: "2025-12-01", type: "Speed", notes: "Sprint intervals" },
    ],
    upcomingSessions: [
      { id: "u5", date: "2025-12-10", type: "Speed", notes: "Acceleration drills" },
    ],
  },
  {
    id: "sarah",
    name: "Sarah Patel",
    specialty: "Mental",
    bio: "Performance psychologist for focus and resilience.",
    goals: ["Mental Performance", "Focus", "Resilience"],
    featured: true,
    pastSessions: [
      { id: "p6", date: "2025-12-04", type: "Mental", notes: "Visualization exercises" },
    ],
    upcomingSessions: [
      { id: "u6", date: "2025-12-12", type: "Mental", notes: "Mindfulness training" },
    ],
  },
  {
    id: "newton",
    name: "Newton Okello",
    specialty: "Flexibility",
    bio: "Helps athletes improve mobility and prevent injuries.",
    goals: ["Flexibility", "Mobility", "Recovery"],
    pastSessions: [
      { id: "p7", date: "2025-12-02", type: "Flexibility", notes: "Stretching routine" },
    ],
    upcomingSessions: [
      { id: "u7", date: "2025-12-09", type: "Flexibility", notes: "Mobility drills" },
    ],
  },
  {
    id: "emma",
    name: "Emma Thompson",
    specialty: "Nutrition",
    bio: "Certified sports nutritionist optimizing diet for peak performance.",
    goals: ["Nutrition", "Weight Management", "Energy Optimization"],
    pastSessions: [
      { id: "p8", date: "2025-12-03", type: "Nutrition", notes: "Meal planning workshop" },
    ],
    upcomingSessions: [
      { id: "u8", date: "2025-12-13", type: "Nutrition", notes: "Diet review session" },
    ],
  },
  {
    id: "li",
    name: "Li Wei",
    specialty: "Martial Arts",
    bio: "Black belt coach specializing in discipline and combat conditioning.",
    goals: ["Martial Arts", "Discipline", "Combat Fitness"],
    pastSessions: [
      { id: "p9", date: "2025-12-01", type: "Martial Arts", notes: "Sparring drills" },
    ],
    upcomingSessions: [
      { id: "u9", date: "2025-12-14", type: "Martial Arts", notes: "Combat conditioning" },
    ],
  },
  {
    id: "fatima",
    name: "Fatima Hassan",
    specialty: "Yoga",
    bio: "Yoga instructor focusing on balance, mindfulness and injury prevention.",
    goals: ["Yoga", "Mindfulness", "Flexibility"],
    pastSessions: [
      { id: "p10", date: "2025-12-02", type: "Yoga", notes: "Morning flow" },
    ],
    upcomingSessions: [
      { id: "u10", date: "2025-12-15", type: "Yoga", notes: "Balance and mindfulness practice" },
    ],
  },
];
