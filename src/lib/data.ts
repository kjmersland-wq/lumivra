import { Product, BlogPost, WellnessRoutine } from "./types"

// ─── PRODUCTS ──────────────────────────────────────────────────────────────

export const products: Product[] = [
  {
    id: "mag-glycinate-001",
    name: "Magnesium Glycinate 400mg",
    brand: "Thorne",
    category: "sleep",
    rating: 4.8,
    reviewCount: 2341,
    price: "$32",
    originalPrice: "$42",
    description:
      "Highly bioavailable magnesium that crosses the blood-brain barrier — the single most impactful supplement I've added to my sleep routine.",
    personalNote:
      "I was skeptical at first. I'd tried magnesium oxide before and felt nothing. Then I switched to glycinate and within four nights I was sleeping deeper than I had in years. This is the one I recommend to everyone who asks me about sleep.",
    pros: [
      "Superior absorption vs magnesium oxide",
      "Noticeably calmer mind before bed",
      "No digestive side effects",
      "Third-party tested by NSF",
      "Works within 3–5 days for most people",
    ],
    cons: [
      "Premium price point",
      "Large capsules — some find them hard to swallow",
    ],
    bestFor: "Anyone struggling with racing thoughts at bedtime",
    affiliateUrl: "/comparisons/",
    imageAlt: "Thorne Magnesium Glycinate supplement bottle on white surface",
    badge: "Editor's Pick",
    featured: true,
  },
  {
    id: "ashwagandha-ksm-002",
    name: "Ashwagandha KSM-66 600mg",
    brand: "Jarrow Formulas",
    category: "recovery",
    rating: 4.6,
    reviewCount: 1872,
    price: "$28",
    description:
      "The most clinically studied form of ashwagandha — I've taken this daily for two years and the difference in how I handle stress is genuinely hard to overstate.",
    personalNote:
      "After a particularly brutal stretch at work, a friend suggested I try KSM-66. I was dubious — 'adaptogen' sounded like marketing fluff. Eight weeks in, I realized I was simply reacting less. Calmer under pressure. Sleeping better. Still taking it every morning.",
    pros: [
      "Backed by 22+ clinical trials",
      "Reduces cortisol levels measurably",
      "Improves sleep quality alongside stress",
      "Full-spectrum root extract — nothing synthetic",
      "Consistent batch quality",
    ],
    cons: [
      "Takes 4–8 weeks for full effect",
      "Slight earthy taste if you open capsules",
    ],
    bestFor: "High-stress professionals and anyone with elevated cortisol",
    affiliateUrl: "/comparisons/",
    imageAlt: "Ashwagandha KSM-66 supplement capsules in amber bottle",
    badge: "Top Rated",
    featured: true,
  },
  {
    id: "creatine-mono-003",
    name: "Creatine Monohydrate 5g",
    brand: "Momentous",
    category: "energy",
    rating: 4.9,
    reviewCount: 4103,
    price: "$45",
    description:
      "The most research-backed performance supplement on the planet — and it costs less than a daily coffee. I genuinely don't understand why more people don't take it.",
    personalNote:
      "Creatine is the supplement I wish I'd started at 25. Now in my 30s, the cognitive lift alone — yes, creatine is a nootropic — is worth it. The strength gains are a nice bonus. Momentous is NSF Certified for Sport, which means it's what the pros use.",
    pros: [
      "5g/day is all you need — loading is unnecessary",
      "Cognitive benefits beyond physical performance",
      "NSF Certified for Sport",
      "Mixes perfectly — totally tasteless",
      "Supported by 500+ studies",
    ],
    cons: [
      "Takes 2–3 weeks to saturate muscles",
      "Requires consistent daily use to maintain benefits",
    ],
    bestFor: "Athletes, knowledge workers, and anyone over 30",
    affiliateUrl: "/comparisons/",
    imageAlt: "Momentous creatine monohydrate white powder supplement",
    badge: "Best Value",
    featured: true,
  },
  {
    id: "nmn-supplement-004",
    name: "NMN 500mg + Trans-Resveratrol",
    brand: "Elysium Health",
    category: "aging",
    rating: 4.5,
    reviewCount: 987,
    price: "$60",
    description:
      "The longevity stack that made Dr. David Sinclair famous. I started taking this combination after reading Lifespan — the science is compelling enough that I didn't want to wait for peer consensus.",
    personalNote:
      "Look, the research on NMN is still evolving — I want to be honest about that. But the mechanistic case for boosting NAD+ as you age is solid, and Elysium is run by serious scientists. I've been taking this for 18 months. My energy in the afternoon has genuinely changed.",
    pros: [
      "Synergistic combination supported by Sinclair's research",
      "Elysium co-founded by Nobel laureates",
      "Pharmaceutical-grade manufacturing",
      "Noticeable afternoon energy improvement",
      "Growing body of human trial data",
    ],
    cons: [
      "Expensive — this is a serious commitment",
      "Long-term human RCTs still limited",
      "Best taken consistently for months before judging",
    ],
    bestFor: "Biohackers serious about longevity science",
    affiliateUrl: "/comparisons/",
    imageAlt: "Elysium Health NMN and resveratrol longevity supplement",
    badge: "Longevity Pick",
    featured: true,
  },
  {
    id: "lions-mane-005",
    name: "Lion's Mane Mushroom 1000mg",
    brand: "Host Defense",
    category: "focus",
    rating: 4.7,
    reviewCount: 1543,
    price: "$38",
    description:
      "The mushroom that neuroscientists are quietly excited about. Lion's Mane stimulates Nerve Growth Factor — and for cognitive clarity, I haven't found anything quite like it.",
    personalNote:
      "I started taking Lion's Mane during a period where I felt mentally foggy and unmotivated. Three weeks in, I noticed I was finishing creative work faster and with more flow. It's not a stimulant — it's subtler than that. More like having a clearer signal.",
    pros: [
      "Stimulates NGF (Nerve Growth Factor) production",
      "Improves focus without caffeine jitters",
      "Paul Stamets formula — the gold standard",
      "Also supports gut health",
      "Stackable with other nootropics",
    ],
    cons: [
      "Effects are subtle — takes patience",
      "Mushroom taste if powder form",
    ],
    bestFor: "Writers, developers, and deep-work professionals",
    affiliateUrl: "/comparisons/",
    imageAlt: "Host Defense Lion's Mane mushroom capsules in forest green bottle",
    badge: "Focus Favorite",
    featured: false,
  },
  {
    id: "collagen-peptides-006",
    name: "Collagen Peptides + Vitamin C",
    brand: "Vital Proteins",
    category: "aging",
    rating: 4.6,
    reviewCount: 6234,
    price: "$43",
    description:
      "After 25, your collagen production drops by about 1% per year. This is the easiest, most seamless way I've found to get ahead of that curve.",
    personalNote:
      "My skin, my joints, and honestly my nails all changed within two months of adding collagen peptides to my morning coffee. It's invisible — no taste, dissolves completely. This is one of those supplements that quietly earns its keep.",
    pros: [
      "Dissolves completely in hot and cold liquids",
      "Pasture-raised bovine source",
      "Paired with Vitamin C for optimal absorption",
      "Supports skin, joint, and gut health",
      "Unflavored — works in anything",
    ],
    cons: [
      "Bovine-sourced — not suitable for vegetarians",
      "Results take 6–8 weeks to become visible",
    ],
    bestFor: "Anyone over 30 focused on skin, joints, and healthy aging",
    affiliateUrl: "/comparisons/",
    imageAlt: "Vital Proteins collagen peptides white powder in bag",
    featured: false,
    badge: "Most Popular",
  },
]

// ─── BLOG POSTS ─────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    id: "blog-001",
    slug: "why-magnesium-changed-my-sleep",
    title: "Why Magnesium Changed My Sleep (And Why Your Doctor Probably Never Mentioned It)",
    excerpt:
      "After years of lying awake at midnight, I tried one supplement. Here's the honest, science-backed story of what happened — and why 68% of Americans are deficient in this mineral.",
    personalNote:
      "This is probably the most personal article I've written on Lumivra. I was genuinely struggling with sleep for three years before I figured this out.",
    category: "sleep",
    readingTime: 8,
    publishedAt: "2026-05-20",
    imageAlt: "Peaceful bedroom with soft morning light and white linen sheets",
    tags: ["magnesium", "sleep quality", "supplements", "insomnia"],
    featured: true,
  },
  {
    id: "blog-002",
    slug: "creatine-not-just-for-gym-bros",
    title: "Creatine Is Not Just for Gym Bros — It Might Be the Best Brain Supplement You're Not Taking",
    excerpt:
      "The research is in, and it's surprising: creatine improves cognitive performance, working memory, and may even protect against neurodegenerative disease. I've been taking it for two years.",
    personalNote:
      "I almost didn't write this because I thought no one would believe me. 'Creatine for your brain?' But the studies don't lie.",
    category: "energy",
    readingTime: 11,
    publishedAt: "2026-05-14",
    imageAlt: "Person reading book at clean modern desk with morning coffee",
    tags: ["creatine", "nootropics", "cognitive performance", "brain health"],
    featured: true,
  },
  {
    id: "blog-003",
    slug: "cold-exposure-recovery-science",
    title: "I Did Cold Showers Every Morning for 90 Days. Here's What the Science Actually Says",
    excerpt:
      "Cold exposure is everywhere right now — but what does the research actually show? I went through 40+ studies and then did it myself for three months. The results were not what I expected.",
    personalNote:
      "Spoiler: cold showers are real, but not for the reasons most people think. The dopamine angle is where things get genuinely interesting.",
    category: "recovery",
    readingTime: 13,
    publishedAt: "2026-05-07",
    imageAlt: "Cold water droplets on glass with morning frost",
    tags: ["cold exposure", "recovery", "dopamine", "inflammation", "Huberman"],
    featured: true,
  },
  {
    id: "blog-004",
    slug: "nad-longevity-explained",
    title: "NAD+ and Longevity: What We Actually Know in 2026 (A Skeptic's Guide)",
    excerpt:
      "David Sinclair's work made NAD+ famous. But what does the science actually support, what's still speculative, and is it worth the price? I spent two months reading the research so you don't have to.",
    personalNote:
      "I try to be honest when the science is murky. NAD+ sits in an interesting place — compelling mechanisms, growing evidence, but still evolving. Here's where I've landed.",
    category: "aging",
    readingTime: 16,
    publishedAt: "2026-04-29",
    imageAlt: "DNA double helix microscopy image with blue and green tones",
    tags: ["NAD+", "NMN", "longevity", "David Sinclair", "aging science"],
    featured: false,
  },
  {
    id: "blog-005",
    slug: "sleep-stack-ultimate-guide",
    title: "The Sleep Stack That Actually Works: My Evening Protocol After Testing 30+ Supplements",
    excerpt:
      "Three years of sleep tracking, 30+ supplements tested, and hundreds of hours of research — here's the exact protocol I use, what I've cut, and what I'll never stop taking.",
    personalNote:
      "This took me a long time to figure out. I'm sharing it because I wish someone had given me this when I started.",
    category: "sleep",
    readingTime: 14,
    publishedAt: "2026-04-22",
    imageAlt: "Flat lay of sleep supplements, sleep mask and journal on dark surface",
    tags: ["sleep stack", "protocol", "magnesium", "glycine", "L-theanine"],
    featured: false,
  },
  {
    id: "blog-006",
    slug: "zone-2-training-longevity",
    title: "Zone 2 Training: The Most Underrated Longevity Protocol Nobody Talks About",
    excerpt:
      "Peter Attia calls it the foundation of longevity fitness. I spent six months building a Zone 2 base — my VO2 max, resting heart rate, and morning HRV all changed. Here's what I learned.",
    personalNote:
      "If I could give one fitness recommendation for healthy aging, it would be this. Not HIIT, not lifting heavy — Zone 2. Here's why.",
    category: "aging",
    readingTime: 12,
    publishedAt: "2026-04-15",
    imageAlt: "Person running on forest trail in soft morning light",
    tags: ["Zone 2", "cardio", "longevity", "Peter Attia", "VO2 max"],
    featured: false,
  },
]

// ─── WELLNESS ROUTINES ───────────────────────────────────────────────────────

export const routines: WellnessRoutine[] = [
  {
    id: "routine-001",
    title: "The 20-Minute Morning Protocol",
    description:
      "The morning routine I've refined over three years — designed for people who actually have to get to work. No hour-long rituals, just the highest-ROI habits stacked together.",
    personalNote:
      "I used to think morning routines were for people with nothing to do. Then I realized mine was costing me two hours of productivity by not having one.",
    duration: "20 minutes",
    difficulty: "Enkel",
    category: "energy",
    steps: [
      "Get sunlight in your eyes within 20 minutes of waking (5 min outside)",
      "Delay caffeine by 90 minutes — let adenosine clear first",
      "Take creatine, collagen, and vitamin D with a glass of water",
      "10 minutes of movement — walk, stretch, or breathwork",
      "Set your three priorities for the day before opening email",
    ],
  },
  {
    id: "routine-002",
    title: "The Non-Negotiable Sleep Wind-Down",
    description:
      "Sleep is the most powerful recovery tool you have — and most people destroy it in the 90 minutes before bed. This protocol fixes that.",
    personalNote:
      "The biggest upgrade to my sleep wasn't a supplement — it was what I stopped doing two hours before bed.",
    duration: "60 minutes",
    difficulty: "Enkel",
    category: "sleep",
    steps: [
      "Dim all lights to orange/red spectrum 90 minutes before bed",
      "No screens after 9pm, or use blue light glasses",
      "Take magnesium glycinate 400mg + L-theanine 200mg at 9pm",
      "10 minutes of reading (physical book — not tablet)",
      "Keep bedroom at 65–68°F (18–20°C)",
      "No alcohol within 3 hours of sleep — it destroys sleep architecture",
    ],
  },
  {
    id: "routine-003",
    title: "The Post-Workout Recovery Stack",
    description:
      "Training breaks your body down. Recovery is where adaptation happens. This is the protocol I use after every serious session.",
    personalNote:
      "I used to skip recovery entirely. Then my progress stalled for months. Turns out, you don't get stronger during training — you get stronger while recovering from it.",
    duration: "15 minutes",
    difficulty: "Moderat",
    category: "recovery",
    steps: [
      "Within 30 min post-workout: 40g protein + 5g creatine",
      "Tart cherry juice 30ml — clinically proven to reduce muscle soreness",
      "10 minutes of slow walking or light stretching",
      "Electrolytes if you trained hard: sodium, potassium, magnesium",
      "Cold exposure optional: 2–3 min cold shower for inflammation",
    ],
  },
  {
    id: "routine-004",
    title: "The Deep Focus Protocol",
    description:
      "My system for getting into flow state consistently — built on neuroscience, not productivity hacks.",
    personalNote:
      "I used to think focus was about willpower. Now I understand it's about creating the right neurochemical conditions. Here's how I do it.",
    duration: "10 minutes",
    difficulty: "Enkel",
    category: "focus",
    steps: [
      "Set a clear single objective before starting — vague goals kill focus",
      "Lion's Mane 1000mg + L-theanine 200mg with morning coffee",
      "Put phone in another room — not on silent, in another room",
      "Use noise that helps your brain: try brown noise or binaural beats",
      "Work in 90-minute blocks — this matches your ultradian rhythm",
      "No multitasking. One tab, one document, one task.",
    ],
  },
]

// ─── COMPARISON TABLE DATA ───────────────────────────────────────────────────

export const sleepSupplementComparison = [
  {
    name: "Magnesium Glycinate",
    brand: "Thorne",
    price: "$32",
    rating: 4.8,
    onset: "3–5 days",
    sideEffects: "None reported",
    bioavailability: "Excellent",
    verdict: "Best overall",
  },
  {
    name: "Magnesium L-Threonate",
    brand: "Life Extension",
    price: "$48",
    rating: 4.6,
    onset: "1–2 weeks",
    sideEffects: "Mild headache (rare)",
    bioavailability: "Excellent (crosses BBB)",
    verdict: "Best for cognition",
  },
  {
    name: "Ashwagandha KSM-66",
    brand: "Jarrow",
    price: "$28",
    rating: 4.6,
    onset: "4–6 weeks",
    sideEffects: "Mild drowsiness",
    bioavailability: "Good",
    verdict: "Best for stress + sleep",
  },
  {
    name: "L-Theanine 200mg",
    brand: "NOW Foods",
    price: "$18",
    rating: 4.5,
    onset: "Same day",
    sideEffects: "None reported",
    bioavailability: "Good",
    verdict: "Best budget option",
  },
]

export const aiResponses: Record<string, { title: string; summary: string; recommendations: string[]; routine: string; article: string }> = {
  sleep: {
    title: "Better Sleep Protocol",
    summary:
      "Based on what you've described, the most impactful changes will come from your wind-down routine — not from adding more supplements. Here's where I'd start:",
    recommendations: [
      "Magnesium Glycinate 400mg (taken 60 min before bed)",
      "L-Theanine 200mg to quiet a racing mind",
      "Block all blue light 90 min before sleep",
      "Keep bedroom below 68°F / 20°C",
    ],
    routine: "The Non-Negotiable Sleep Wind-Down",
    article: "why-magnesium-changed-my-sleep",
  },
  energy: {
    title: "Sustained Energy Protocol",
    summary:
      "Most energy problems aren't about stimulants — they're about foundation: sleep quality, morning light, and nutrient timing. Here's the honest answer:",
    recommendations: [
      "Creatine Monohydrate 5g/day (cognitive + physical energy)",
      "Delay caffeine by 90 min after waking — massive difference",
      "Morning sunlight within 20 min of waking",
      "Vitamin D3 + K2 if you're deficient (most people are)",
    ],
    routine: "The 20-Minute Morning Protocol",
    article: "creatine-not-just-for-gym-bros",
  },
  focus: {
    title: "Deep Focus Protocol",
    summary:
      "Focus is a neurochemical state, not a willpower challenge. These are the tools that actually move the needle for sustained cognitive performance:",
    recommendations: [
      "Lion's Mane Mushroom 1000mg (NGF stimulation — takes 3 weeks)",
      "L-Theanine 200mg + Caffeine 100mg stack for clean focus",
      "Omega-3 DHA 1000mg+ daily for brain membrane health",
      "Single-tasking + 90-min work blocks (matches ultradian rhythm)",
    ],
    routine: "The Deep Focus Protocol",
    article: "creatine-not-just-for-gym-bros",
  },
  recovery: {
    title: "Recovery & Stress Protocol",
    summary:
      "Recovery isn't passive — it's a skill. The combination of stress reduction and physical recovery go hand in hand. Here's what works:",
    recommendations: [
      "Ashwagandha KSM-66 600mg daily (cortisol reduction)",
      "Tart Cherry Extract post-workout (proven DOMS reduction)",
      "Magnesium Glycinate (sleep quality = recovery quality)",
      "Zone 2 cardio 3x/week — the longevity foundation",
    ],
    routine: "The Post-Workout Recovery Stack",
    article: "cold-exposure-recovery-science",
  },
}
