import { assets } from "../constants/assets";
export const homeData = {
  banner: {
    title: "Where Luxury Finds Its ",
    subTitle: "True Value",
    description:
      "The premium marketplace to Buy, Sell, and Pawn luxury timepieces. Instant valuation by certified experts",
  },
  brands: {
    title: "WE WORK WITH THE WORLD'S FINEST BRANDS",
    brands: [
      "ROLEX",
      "PATEK PHILIPPE",
      "AUDEMARS PIGUET",
      "CARTIER",
      "PANERAI",
      "JAEGER-LECOULTRE",
      "HUBLOT",
      "BREGUET",
      "VACHERON CONSTANTINE",
      "FRANCK MULLER",
      "TUDOR",
      "ROGER DUBUIS",
    ],
  },
  services: {
    header: "OUR SERVICES",
    title: "How Can We Help You?",
    description:
      "Premium services tailored to meet your luxury needs with professionalism and discretion",
    servicses_cards: [
      {
        icon: assets.plus,
        title: "Sell Your Items",
        description:
          "Instant liquidity. Submit your item details and receive a competitive market offer within hours",
      },
      {
        icon: assets.healthicons_justice,
        title: "Pawn & Finance",
        description:
          "Leverage your assets. Get a short-term loan against your luxury watch with discreet handling",
      },
      {
        icon: assets.clock,
        title: "Best Market Prices",
        description:
          "We offer the best market prices for your luxury watches. Get your quote today.",
      },
    ],
  },
  featured: {
    header: "FEATURED COLLECTION",
    title: "Available Watches",
    featured_Cards: [
      {
        image: assets.f1,
        icon: assets.heart,
        tag: "New",
        name: "Cartier Tank LC Yellow Gold",
        model: "WGTA0352",
        price: "$9,000.00",
      },
      {
        image: assets.f2,
        icon: assets.heart,
        tag: "New",
        name: "Cartier Santos De Cartier",
        model: "W2SA0016",
        price: "$10,000.00",
      },
      {
        image: assets.f3,
        icon: assets.heart,
        tag: "New",
        name: "Rolex Sky-Dweller",
        model: "326935",
        price: "$46,000.00",
      },
      {
        image: assets.f4,
        icon: assets.heart,
        tag: "New",
        name: "Rolex Datejust 41",
        model: "126331",
        price: "$16,000.00",
      },
    ],
  },
  whyChooseUs: {
    header: "WHY CHOOSE US",
    title: "A Reputation Built on Trust",
    description:
      "Since 2008, we've built our reputation on transparency, discretion, and personalized service that always prioritizes our clients' security and satisfaction.",
    experience: {
      years: "17+",
      label: "YEARS EXPERIENCE",
      shieldIcon: assets.gala_secure,
    },
    benefits: [
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
    ],
  },
  statistics: {
    stats: [
      {
        value: "18+",
        label: "YEARS EXPERIENCE",
      },
      {
        value: "20K+",
        label: "HAPPY CLIENTS",
      },
      {
        value: "100%",
        label: "AUTHENTICATED",
      },
    ],
  },
  experience: {
    title: "Experience Luxury on Mobile",
    description:
      "Download the G/S App to manage quotes, pawns, and purchases on the go",
    apps: [
      {
        name: "App Store",
        icon: assets.apple,
        link: "#",
        label: "Download on the",
        store: "App Store",
      },
      {
        name: "Google Play",
        icon: assets.playstore,
        link: "#",
        label: "Get it on",
        store: "Google Play",
      },
    ],
  },
  footer: {
    about: {
      companyName: "GOLD AND SILVER",
      description:
        "Since 2008, a trusted name in buying, selling, and financing luxury watches and fine jewelry with transparency, discretion, and personalized service.",
      socialMedia: [
        {
          icon: assets.facebook,
          link: "#",
        },
        {
          icon: assets.instagram,
          link: "#",
        },
        {
          icon: assets.linkedin,
          link: "#",
        },
      ],
    },
    services: {
      title: "SERVICES",
      links: [
        { label: "Buy Watches", link: "#" },
        { label: "Sell Your Watch", link: "#" },
        { label: "Pawn Services", link: "#" },
        { label: "Authentication", link: "#" },
      ],
    },
    company: {
      title: "COMPANY",
      links: [
        { label: "About Us", link: "#" },
        { label: "Our Team", link: "#" },
        { label: "Careers", link: "#" },
        { label: "Contact", link: "#" },
      ],
    },
    contact: {
      title: "CONTACT",
      phone: "+1-809-540-7219",
      email: "contabilidadgoldandsilver@gmail.com",
      address: [
        "Lincoln Avenue 850, Plaza",
        "Andalucia II Suite 32- A,",
        "Piantini. Santo Domingo",
        "Dominican Republic 10004",
      ],
    },
    bottomLink: {
      title: "© 2025 G/S Luxury Exchange. All rights reserved.",
      links: [
        { label: "Privacy Policy", link: "#" },
        { label: "Terms of Services", link: "#" },
        { label: "FAQ", link: "#" },
      ],
    },
  },
};
