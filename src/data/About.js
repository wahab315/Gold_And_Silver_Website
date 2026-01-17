import { assets } from "../constants/assets";

export const aboutData = {
  meetOurTeam: {
    title: "Meet Our",
    highlightTitle: "Team",
    subtitle: "Experts dedicated to providing you the best service.",
    members: [
      {
        name: "Andreas Charalambous",
        role: "HEAD OF OPERATIONS",
        description:
          "Leading vision and strategy with 18+ years in luxury goods.",
        image: assets.profile,
      },
      {
        name: "Andonis Charalambous",
        role: "CEO",
        description:
          "Ensuring smooth operations and exceptional client experience.",
        image: assets.profile,
      },
    ],
  },
  whyChooseUs: {
    title: "Why",
    highlightTitle: "Choose Us",
    cards: [
      {
        icon: assets.Icons,
        title: "Best Market Rates",
        description:
          "We offer the most competitive interest rates and fair pricing in the industry.",
      },
      {
        icon: assets.secure_outline,
        title: "100% Secure & Confidential",
        description:
          "Every transaction is handled with complete discretion and security.",
      },
      {
        icon: assets.secured,
        title: "Certified Expert Evaluations",
        description:
          "Our specialists ensure authenticity, quality, and fair assessments.",
      },
      {
        icon: assets.Star,
        title: "Fast & Easy Process",
        description:
          "Get quotes within 24 hours and quick payment upon acceptance",
      },
    ],
  },
};
