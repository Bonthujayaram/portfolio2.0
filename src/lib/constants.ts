// App constants

export const SITE_CONFIG = {
  name: "Jayaram bonthu",
  description:
    "B.Tech Computer Science Engineering Student at Centurion University Of Technology and Management | Full-stack Developer | Community Builder | AI & Web Enthusiast",
  url: "https://bonthujayaram.com", 
 // If you put it directly in public/images/
  ogImage: "/images/og-image.png", 
  links: {
    email: "bonthujayaram57@gmail.com",
    github: "https://github.com/Bonthujayaram",
    linkedin: "https://www.linkedin.com/in/jayaram-bonthu-800003255/",
    phone: "+91 9392273983"
  }
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Achievements", href: "/about#achievements" }
];

export const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
};
