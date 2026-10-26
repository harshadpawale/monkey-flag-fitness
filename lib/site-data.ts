export const SITE = {
  name: "Monkey Flag Fitness",
  legalName: "Monkey Flag Fitness",
  domain: "https://monkeyflagfitness.com",
  tagline: "The Best Hour of Your Day.",
  location: "Pune, India",
  address: {
    streetAddress: "Pune (address placeholder)",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411001",
    addressCountry: "IN",
  },
  geo: {
    latitude: 18.5204,
    longitude: 73.8567,
  },
  phone: "+91-00000-00000",
  email: "hello@monkeyflagfitness.com",
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "06:00", closes: "21:00" },
    { days: ["Friday"], opens: "06:00", closes: "20:00" },
    { days: ["Saturday"], opens: "07:00", closes: "12:00" },
    { days: ["Sunday"], opens: "08:00", closes: "11:00" },
  ],
} as const;

export const SITE_LINKS = {
  introBookingUrl: "https://monkeyflag.funfit.dev/services",
  trainTrackRegisterUrl: "https://traintrack.app/register-placeholder",
  trainTrackIosUrl: "https://apps.apple.com/",
  trainTrackAndroidUrl: "https://play.google.com/store",
} as const;

export const NAV_LINKS = [
  { href: "/#why", label: "Why Monkey Flag" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#coaches", label: "Coaches" },
  { href: "/#timetable", label: "Timetable" },
  { href: "/#chalk-bucket", label: "Events & Blog" },
  { href: "/#traintrack", label: "TrainTrack App" },
  { href: "/#faq", label: "FAQ" },
] as const;

export interface Coach {
  slug: string;
  name: string;
  role: string;
  certifications: string[];
  philosophy: string;
  story: string;
  credentials: string[];
  specialties: string[];
  favoriteWod: string;
  image: string;
  imageAlt: string;
}

export interface FitnessEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  status: "Registration Open" | "Members + Guests" | "Members Only";
  summary: string;
  actionLabel: string;
  actionHref: string;
}

export interface OwnerPost {
  slug: string;
  title: string;
  category: "Programming Philosophy" | "Nutrition & Recovery" | "Mindset" | "Community Stories";
  excerpt: string;
  content: string[];
  author: string;
  authorRole: string;
  authorAvatar: string;
  publishedAt: string;
  readingTime: string;
}

export interface ClassSlot {
  time: string;
  name: string;
  duration: string;
  notes?: string;
}

export interface ClassScheduleDay {
  id: "weekday" | "friday" | "saturday" | "sunday";
  label: string;
  subtitle: string;
  slots: ClassSlot[];
}

export interface Testimonial {
  id: string;
  name: string;
  tenure: string;
  quote: string;
  highlight: string;
}

export interface FAQItem {
  id: string;
  category: "Newcomers & Intro Sessions" | "Training & Scaling" | "TrainTrack App & Memberships";
  question: string;
  answer: string;
  htmlAnswer?: string;
}

export const coaches: Coach[] = [
  {
    slug: "arjun-mehta",
    name: "Arjun Mehta",
    role: "Owner & Head Coach",
    certifications: ["CF-L2", "Strength & Conditioning", "First Aid"],
    philosophy: "Show up, do the work, leave better than you arrived.",
    story:
      "Arjun opened Monkey Flag Fitness after a decade of training athletes across Pune who were tired of ego-driven boxes and cookie-cutter classes. He built the floor around coaching first: every hour should feel like the best hour of your day, whether you are hitting a PR or learning your first squat. Off the floor he is still in the gym notebook, rewriting programming so the work stays honest and scalable.",
    credentials: [
      "CrossFit Level 2 Trainer",
      "Strength & Conditioning specialist",
      "Sports First Aid & CPR",
      "10+ years coaching group classes and 1:1 athletes",
    ],
    specialties: [
      "Barbell mechanics for beginners and competitors",
      "Scaling around old injuries without watering down the session",
      "Building consistent training habits for working professionals",
    ],
    favoriteWod: "Fran — 21-15-9 thrusters and pull-ups, honest and loud.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Head coach Arjun Mehta on the training floor",
  },
  {
    slug: "priya-kulkarni",
    name: "Priya Kulkarni",
    role: "Strength Coach",
    certifications: ["CF-L2", "Weightlifting", "Mobility"],
    philosophy: "Strong positions first. Intensity is earned, not assumed.",
    story:
      "Priya came up through Olympic weightlifting and found CrossFit when she wanted her strength to actually move. She coaches the barbell club, runs clinics, and is the person who will spend an extra five minutes on your pull until it looks like a lift you can own for years. She is fiercely protective of new lifters and allergic to sloppy loading.",
    credentials: [
      "CrossFit Level 2 Trainer",
      "Olympic Weightlifting coach",
      "Mobility & positional work specialist",
    ],
    specialties: [
      "Snatch and clean & jerk progressions",
      "Posterior chain strength",
      "Women's strength development",
    ],
    favoriteWod: "Grace — 30 clean & jerks for time. Simple. Brutal. Honest.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Strength coach Priya Kulkarni coaching a lift",
  },
  {
    slug: "rohan-deshpande",
    name: "Rohan Deshpande",
    role: "Coach",
    certifications: ["CF-L1", "Gymnastics", "Endurance"],
    philosophy: "Engine work should feel purposeful, not punitive.",
    story:
      "Rohan is the engine guy. A former distance runner who fell in love with the rig, he coaches gymnastics skill days and mixed-modal metcons with the same patience. Members know him as the coach who will scale a muscle-up into a drill that still makes you feel like an athlete, then cheer the last person through the door.",
    credentials: [
      "CrossFit Level 1 Trainer",
      "Gymnastics skill progressions",
      "Aerobic capacity & mixed modal conditioning",
    ],
    specialties: [
      "Pull-up and muscle-up progressions",
      "Engine building for busy professionals",
      "Community WOD energy on Saturday mornings",
    ],
    favoriteWod: "Cindy — 20 minutes of pull-ups, push-ups, and squats. No hiding.",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Coach Rohan Deshpande during a conditioning session",
  },
  {
    slug: "sana-sheikh",
    name: "Sana Sheikh",
    role: "Foundations Coach",
    certifications: ["CF-L1", "Mobility", "Prenatal & Postnatal"],
    philosophy: "Every athlete starts somewhere. We start together.",
    story:
      "Sana runs intros and foundations because she remembers what it feels like to walk into a box for the first time. She maps movement history, past injuries, and real-life schedules before anyone touches a barbell. Her sessions are calm, exacting, and surprisingly fun — the on-ramp that makes people stay.",
    credentials: [
      "CrossFit Level 1 Trainer",
      "Foundations & intro programming",
      "Prenatal and postnatal training considerations",
    ],
    specialties: [
      "New athlete onboarding",
      "Injury-aware scaling",
      "Building confidence on the barbell and the rig",
    ],
    favoriteWod: "Karen — 150 wall balls. The community always finishes as a pack.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Foundations coach Sana Sheikh working with a new member",
  },
];

export const events: FitnessEvent[] = [
  {
    id: "throwdown-nov",
    title: "In-House Throwdown",
    date: "15 Nov 2026",
    time: "8:00 AM",
    status: "Registration Open",
    summary:
      "A friendly three-workout test of fitness. Scaled and Rx divisions. Bring your crew, chalk up, and leave it on the floor.",
    actionLabel: "Register via Funfit",
    actionHref: SITE_LINKS.introBookingUrl,
  },
  {
    id: "bring-a-friend",
    title: "Bring-a-Friend Saturday",
    date: "Every Saturday",
    time: "8:00 AM WOD",
    status: "Members + Guests",
    summary:
      "Members can bring one friend to the community WOD. We scale everyone, introduce the floor rules, and sweat together.",
    actionLabel: "Book a guest intro",
    actionHref: SITE_LINKS.introBookingUrl,
  },
  {
    id: "barbell-clinic",
    title: "Weightlifting Clinic",
    date: "29 Nov 2026",
    time: "10:00 AM",
    status: "Members Only",
    summary:
      "Two hours of snatch and clean positions with Priya. Small group, lots of eyes on the bar, film review at the end.",
    actionLabel: "Hold your spot on TrainTrack",
    actionHref: SITE_LINKS.trainTrackRegisterUrl,
  },
  {
    id: "community-social",
    title: "Community Social",
    date: "6 Dec 2026",
    time: "6:30 PM",
    status: "Members + Guests",
    summary:
      "Off the floor, still the tribe. Food, stories, and the kind of hang that makes Monday easier to show up for.",
    actionLabel: "Join the tribe",
    actionHref: SITE_LINKS.introBookingUrl,
  },
];

export const ownerPosts: OwnerPost[] = [
  {
    slug: "why-we-scale-every-session",
    title: "Why we scale every session — and never water it down",
    category: "Programming Philosophy",
    excerpt:
      "Scaling is not a softer workout. It is the same stimulus, honest mechanics, and a door that stays open for every athlete on the floor.",
    content: [
      "If you have never trained at a CrossFit box, scaling can look like a compromise. It is not. At Monkey Flag, the workout on the whiteboard is a stimulus: a dose of strength, a dose of engine, a skill that needs practice. The prescription is one expression of that stimulus. Your version — lighter, shorter, or a different movement — is another.",
    "We coach the floor this way because Pune professionals, parents, former athletes, and complete beginners share the same hour. The last person to finish still did the work. The Rx athlete still got taxed. Nobody got left behind, and nobody got a watered-down class.",
      "That is the programming philosophy we will keep defending: hard work, grit, and a coach who can change the movement without changing the intent.",
    ],
    author: "Arjun Mehta",
    authorRole: "Owner & Head Coach",
    authorAvatar:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=200&q=80",
    publishedAt: "2026-09-12",
    readingTime: "4 min",
  },
  {
    slug: "sleep-beats-supplements",
    title: "Sleep beats supplements. Recovery is training.",
    category: "Nutrition & Recovery",
    excerpt:
      "You cannot out-program a 5-hour night. Here is how we ask members to treat recovery as part of the work, not an afterthought.",
    content: [
      "The best hour of your day only works if the other 23 hours let you adapt. We see it every cycle: the athlete who trains four days, sleeps, eats protein, and walks, beats the athlete who lives on the floor and lives on fumes.",
      "We are not a nutrition cult. We will not sell you a stack. We will ask you about sleep, hydration, and whether you are actually eating enough to support the work. If you want a starting point: 7 hours, water on the floor, and a protein-forward meal after class.",
      "Come talk to a coach after your intro. We will help you map recovery around shift work, kids, and Pune traffic — the real constraints, not the brochure ones.",
    ],
    author: "Priya Kulkarni",
    authorRole: "Strength Coach",
    authorAvatar:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=200&q=80",
    publishedAt: "2026-08-28",
    readingTime: "3 min",
  },
  {
    slug: "check-your-ego-at-the-door",
    title: "Check your ego at the door. Keep your standards.",
    category: "Mindset",
    excerpt:
      "Box etiquette is not decoration. It is how a mixed-ability floor stays safe, fast, and welcoming at 6 a.m. and 7 p.m.",
    content: [
      "We wrote five floor rules and we mean them. Be on time. Check your ego. Introduce yourself. Do not strip your bar until the last athlete finishes. Leave the floor better than you found it.",
      "Ego shows up as going Rx when the coach asked you to scale. Ego also shows up as hiding in the back because you are new. Both waste the hour. Standards are the opposite of ego: empty barbell until the position is honest, then load.",
      "If you are visiting Pune and dropping in, you are held to the same rules. That is the compliment. You are on this floor with us.",
    ],
    author: "Arjun Mehta",
    authorRole: "Owner & Head Coach",
    authorAvatar:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=200&q=80",
    publishedAt: "2026-07-19",
    readingTime: "3 min",
  },
  {
    slug: "saturday-is-the-tribe",
    title: "Saturday is the tribe",
    category: "Community Stories",
    excerpt:
      "The community WOD is not extra. It is the reason people stay when motivation dips and work gets loud.",
    content: [
      "Watch a Saturday at Monkey Flag. Someone is on their first wall ball. Someone else is chasing a PR. They finish within a minute of each other because we design it that way, and then they pick up plates that are not theirs.",
      "Bring-a-Friend Saturdays are how most of our members arrived. A colleague, a partner, a sibling who was 'not a gym person.' They booked an intro afterwards. That is the funnel we actually believe in: a real hour, a real coach, a real welcome.",
      "If you have been waiting for a sign to walk in, this is it. Book the intro. We will take care of the rest.",
    ],
    author: "Sana Sheikh",
    authorRole: "Foundations Coach",
    authorAvatar:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=200&q=80",
    publishedAt: "2026-06-07",
    readingTime: "3 min",
  },
];

export const schedule: ClassScheduleDay[] = [
  {
    id: "weekday",
    label: "Monday–Thursday",
    subtitle: "The working week. Sixty minutes. Coach on the floor.",
    slots: [
      { time: "06:00", name: "CrossFit Group Class", duration: "60 min" },
      { time: "07:15", name: "CrossFit Group Class", duration: "60 min" },
      { time: "09:30", name: "Foundations / Intro", duration: "60 min", notes: "By booking" },
      { time: "12:15", name: "CrossFit Group Class", duration: "60 min" },
      { time: "17:30", name: "CrossFit Group Class", duration: "60 min" },
      { time: "18:45", name: "CrossFit Group Class", duration: "60 min" },
      { time: "20:00", name: "Barbell Club / Open Gym", duration: "60 min" },
    ],
  },
  {
    id: "friday",
    label: "Friday",
    subtitle: "Engine, skill, and a slightly earlier close.",
    slots: [
      { time: "06:00", name: "CrossFit Group Class", duration: "60 min" },
      { time: "07:15", name: "CrossFit Group Class", duration: "60 min" },
      { time: "12:15", name: "CrossFit Group Class", duration: "60 min" },
      { time: "17:30", name: "CrossFit Group Class", duration: "60 min" },
      { time: "18:45", name: "CrossFit Group Class", duration: "60 min" },
    ],
  },
  {
    id: "saturday",
    label: "Saturday",
    subtitle: "Community WOD. Guests welcome with a member.",
    slots: [
      { time: "07:00", name: "Foundations / Intro", duration: "60 min" },
      { time: "08:00", name: "Saturday Community WOD", duration: "60 min" },
      { time: "09:30", name: "Barbell Club / Open Gym", duration: "60 min" },
    ],
  },
  {
    id: "sunday",
    label: "Sunday",
    subtitle: "Optional extra. Mobility, make-up, or quiet barbell work.",
    slots: [
      { time: "08:00", name: "CrossFit Group Class", duration: "60 min" },
      { time: "09:30", name: "Barbell Club / Open Gym", duration: "60 min" },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "neha",
    name: "Neha S.",
    tenure: "Member · 14 months",
    highlight: "Scaled around a knee that used to bench me.",
    quote:
      "I walked in convinced I had to get fit first. Sana mapped my old running injury, swapped jump rope for bike, and still made the hour feel like a workout. The coaches remember your name and your limitation. That is why I have not missed a week in months.",
  },
  {
    id: "vikram",
    name: "Vikram P.",
    tenure: "Member · 2 years",
    highlight: "Ego-free floor. Headphones stay in the bag.",
    quote:
      "I dropped in from another box expecting the usual scene. Nobody was filming themselves. Arjun corrected my clean in the first ten minutes and then introduced me to three people. I switched memberships the next day. This is coaching, not content.",
  },
  {
    id: "meera",
    name: "Meera D.",
    tenure: "Member · 8 months",
    highlight: "The community is why 6 a.m. still happens.",
    quote:
      "I am a consultant. My schedule is hostile. The timetable actually fits, TrainTrack lets me grab a slot on the commute, and if I am last on the floor someone still waits to strip the bar with me. Best hour of the day is not marketing. It is 7:15 a.m.",
  },
];

export const faqs: FAQItem[] = [
  {
    id: "need-to-be-fit",
    category: "Newcomers & Intro Sessions",
    question: "Do I need to be fit before I start at Monkey Flag Fitness?",
    answer:
      "No. You need a willingness to learn. Workouts are scaled for every fitness level — empty barbells, box-assisted pull-ups, and extra rest are normal on this floor. The intro session is built for people who have never touched a barbell.",
  },
  {
    id: "book-first",
    category: "Newcomers & Intro Sessions",
    question: "How do I book my first session?",
    answer:
      "Book your intro through Funfit. You will meet a coach, tour the box, talk through goals and injuries, and experience a scaled session. Current members and visiting athletes use TrainTrack for class slots after they are onboarded.",
    htmlAnswer:
      'Book your intro through Funfit at <a href="https://monkeyflag.funfit.dev/services">monkeyflag.funfit.dev/services</a>. You will meet a coach, tour the box, talk through goals and injuries, and experience a scaled session. Current members and visiting athletes use TrainTrack for class slots after they are onboarded.',
  },
  {
    id: "funfit-vs-traintrack",
    category: "TrainTrack App & Memberships",
    question: "What is the difference between the Funfit Intro link and the TrainTrack app?",
    answer:
      "Funfit is how new people book an intro session with our team. TrainTrack is the member app: class reservations, daily WODs, scores, and PRs. Start with Funfit if you are new. Register on TrainTrack once you join the tribe.",
  },
  {
    id: "scaling-injury",
    category: "Training & Scaling",
    question: "How does scaling work if I have never lifted weights or have an old injury?",
    answer:
      "Tell the coach before the whiteboard brief. We will change load, range, or movement while keeping the intended stimulus. Old knees, shoulders, and backs are common here. We train around them instead of pretending they do not exist.",
  },
  {
    id: "drop-in",
    category: "Training & Scaling",
    question: "Can visiting CrossFit athletes drop in for a WOD?",
    answer:
      "Yes. Visiting athletes are welcome. Book an intro/drop-in slot via Funfit so we can put you on the floor with a coach, then we will point you to TrainTrack if you are in Pune for longer. Same floor rules as members.",
    htmlAnswer:
      'Yes. Visiting athletes are welcome. Book an intro/drop-in slot via <a href="https://monkeyflag.funfit.dev/services">monkeyflag.funfit.dev/services</a> so we can put you on the floor with a coach, then we will point you to TrainTrack if you are in Pune for longer. Same floor rules as members.',
  },
  {
    id: "class-length",
    category: "Training & Scaling",
    question: "How long is a class and what should I bring?",
    answer:
      "Classes are 60 minutes: brief, warm-up, strength or skill, metcon, and a cool-down. Bring trainers you can squat in, water, and a willingness to be coached. We have bars, plates, and rigs. Headphones stay in the bag.",
  },
  {
    id: "traintrack-booking",
    category: "TrainTrack App & Memberships",
    question: "How do members book classes on TrainTrack?",
    answer:
      "After you join, complete TrainTrack registration, download the iOS or Android app, and reserve your slot. You will see the daily WOD before you arrive, log your lifts and times, and watch the leaderboard fill up after class.",
  },
];

export const pillars = [
  {
    title: "World-Class Coaching",
    body: "Certified coaches on the floor correcting mechanics and scaling every movement to your ability.",
  },
  {
    title: "True Functional Programming",
    body: "Strength, conditioning, gymnastics, and mobility — never watered down, always purposeful.",
  },
  {
    title: "Ego-Free Community",
    body: "We train hard together. No mirrors, no headphones — nobody gets left behind.",
  },
  {
    title: "Premium Floor & Equipment",
    body: "Competition-grade barbells, rigs, and conditioning gear built for serious training.",
  },
] as const;

export const boxEtiquette = [
  "Be On Time",
  "Check Your Ego at the Door",
  "Introduce Yourself to Newcomers",
  "Don't Break Down Your Bar Until the Last Athlete Finishes",
  "Leave the Floor Better Than You Found It",
] as const;

export const onboardingSteps = [
  {
    n: "01",
    title: "Book Your Intro",
    body: "Pick a slot that works for you. We'll chat about your goals, movement history, and any past injuries.",
    href: SITE_LINKS.introBookingUrl,
  },
  {
    n: "02",
    title: "Experience the Floor",
    body: "Step into a coach-led session where every movement is tailored and scaled to your current fitness level.",
  },
  {
    n: "03",
    title: "Join the Tribe & Onboard to TrainTrack",
    body: "Lock in your membership, download the TrainTrack app, and start logging your progress alongside the community.",
  },
] as const;

export const newcomerChecklist = [
  "Book your Funfit intro — no fitness test required.",
  "Tell us about injuries, training history, and your actual schedule.",
  "Show up 10 minutes early. Meet a coach. Tour the box.",
  "Leave with a plan: membership, TrainTrack, and your next class.",
] as const;

export const postCategories = [
  "All",
  "Programming Philosophy",
  "Nutrition & Recovery",
  "Mindset",
  "Community Stories",
] as const;

export function getPost(slug: string) {
  return ownerPosts.find((post) => post.slug === slug);
}

export function getCoach(slug: string) {
  return coaches.find((coach) => coach.slug === slug);
}
