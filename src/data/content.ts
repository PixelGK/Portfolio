import villaGadingImage from "../assets/villa-gading.jpg";
import tariKecakImage from "../assets/tari-kecak.jpg";

export const profile = {
  name: "Praba",
  title: "Frontend Developer",
  titleSecondary: "Web Designer",
  tagline: "Crafting modern, responsive, and user-focused digital experiences.",
  location: "Bali, Indonesia",
  email: "Kanakapk14@gmail.com",
  github: "https://github.com/PixelGK",
  linkedin: "https://www.linkedin.com/in/praba-kanaka-157640422/",
};

export const intro =
  "I'm Praba, a frontend developer and web designer passionate about building modern, responsive websites that combine clean design with smooth user experiences. I enjoy transforming ideas into interactive digital experiences while continuously learning and improving my skills.";

export const aboutParagraphs = [
  "I'm a frontend developer who enjoys creating websites that are both visually appealing and easy to use. I focus on writing clean, maintainable code while paying close attention to user experience, responsive design, and performance.",
  "I enjoy taking ideas from concept to a polished final product, experimenting with modern web technologies, and refining every detail to create interfaces that feel intuitive and engaging.",
  "I'm constantly learning new technologies and challenging myself through real-world projects that help me grow as both a developer and a designer.",
];

export const exploring = [
  "Premium interactive experiences with React",
  "GSAP animation",
  "Framer Motion",
  "Accessibility & performance",
  "Modern UI/UX systems",
];

export type Project = {
  id: string;
  index: string;
  title: string;
  kicker: string;
  description: string;
  highlights: string[];
  live: string;
  github: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "villa-gading",
    index: "01",
    title: "Villa Gading",
    kicker: "Luxury Villa · Bali",
    description:
      "A modern website created for a luxury villa in Bali, designed to provide visitors with a clean browsing experience while showcasing the property's atmosphere. The project emphasizes responsive layouts, elegant UI, and performance-focused frontend development.",
    highlights: ["Responsive Design", "Modern UI", "React", "TypeScript", "Tailwind CSS", "Vite"],
    live: "https://perfixell.github.io/villa-gading/",
    // TODO: replace with the actual repo URL for Villa Gading when available.
    github: profile.github,
    image: villaGadingImage,
  },
  {
    id: "tari-kecak",
    index: "02",
    title: "Tari Kecak",
    kicker: "Frontend UI Concept · Balinese Performance",
    description:
      "A frontend website concept created for a traditional Balinese Kecak performance. The project explores an intuitive booking interface, responsive layouts, and a visually engaging experience while presenting event information in a modern and accessible way.",
    highlights: ["Frontend UI Concept", "Responsive Design", "Interactive Layout", "React", "TypeScript", "Tailwind CSS", "Vite"],
    live: "https://perfixell.github.io/tari-kecak-godogan/",
    // TODO: replace with the actual repo URL for Tari Kecak when available.
    github: profile.github,
    image: tariKecakImage,
  },
];

export type SkillGroup = {
  label: string;
  note: string;
  skills: string[];
  variant: "solid" | "tool" | "learning";
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    note: "Daily tools of the craft",
    variant: "solid",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    label: "Tools",
    note: "Where the work gets built",
    variant: "tool",
    skills: ["Git", "GitHub", "Vite", "Figma", "VS Code", "Cursor AI"],
  },
  {
    label: "Currently Learning",
    note: "In active progress",
    variant: "learning",
    skills: ["GSAP", "Framer Motion", "Supabase", "Advanced React Patterns"],
  },
];
