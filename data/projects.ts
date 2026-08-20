export type Project = {
  id: string;
  name: string;
  shortName: string;
  category: string;
  technologies: string[];

  image: string;
  accent: string;

  orbitRadius: number;
  orbitSpeed: number;
  size: number;
  startAngle: number;
  depth: number;
  orbitTilt: [number, number, number];
};

export const projects: Project[] = [
  {
    id: "kaiser",
    name: "KAISER",
    shortName: "KAISER",
    category: "Personal AI Assistant",
    technologies: ["Python", "Ollama", "STT", "TTS"],

    image: "/planets/kaiser.png",
    accent: "#d7ff00",

    orbitRadius: 4.6,
    orbitSpeed: 0.10,
    size: 1.15,
    startAngle: 0.2,
    depth: 0.4,
    orbitTilt: [0.2, 0.1, 0.08],
  },

  {
    id: "prompt-lab",
    name: "Prompt Transformation Lab",
    shortName: "PROMPT LAB",
    category: "AI Prompt Platform",
    technologies: [
      "Next.js",
      "FastAPI",
      "Gemini",
      "PostgreSQL",
    ],

    image: "/planets/prompt-lab.png",
    accent: "#d7ff00",

    orbitRadius: 5.6,
    orbitSpeed: -0.075,
    size: 1.05,
    startAngle: 1.3,
    depth: -0.8,
    orbitTilt: [-0.25, 0.1, 0.1],
  },

  {
    id: "dev-cli",
    name: "Developer CLI Toolkit",
    shortName: "DEV CLI",
    category: "Developer Productivity",
    technologies: ["Python", "CLI", "Git", "Automation"],

    image: "/planets/dev-cli.png",
    accent: "#d7ff00",

    orbitRadius: 6.7,
    orbitSpeed: 0.06,
    size: 0.95,
    startAngle: 2.2,
    depth: -1.4,
    orbitTilt: [0.15, -0.15, 0.18],
  },

  {
    id: "bugreader",
    name: "BugReader AI",
    shortName: "BUGREADER",
    category: "AI Code Analysis",
    technologies: [
      "Python",
      "Flask",
      "Gemini",
      "PostgreSQL",
    ],

    image: "/planets/bugreader.png",
    accent: "#ff3322",

    orbitRadius: 5.0,
    orbitSpeed: -0.085,
    size: 1.05,
    startAngle: 3.3,
    depth: 0.8,
    orbitTilt: [-0.18, 0.12, -0.2],
  },

  {
    id: "ai-chatbot",
    name: "AI Business Chatbot",
    shortName: "AI CHATBOT",
    category: "Business Automation",
    technologies: [
      "FastAPI",
      "AI",
      "PostgreSQL",
      "Next.js",
    ],

    image: "/planets/ai-chatbot.png",
    accent: "#00ffff",

    orbitRadius: 6.1,
    orbitSpeed: 0.065,
    size: 1,
    startAngle: 4.4,
    depth: -0.5,
    orbitTilt: [0.3, 0.1, 0.08],
  },

  {
    id: "trackflow",
    name: "TrackFlow",
    shortName: "TRACKFLOW",
    category: "Habit Tracking System",
    technologies: [
      "Flask",
      "PostgreSQL",
      "JavaScript",
    ],

    image: "/planets/trackflow.png",
    accent: "#9cff00",

    orbitRadius: 7.2,
    orbitSpeed: -0.05,
    size: 0.9,
    startAngle: 5.3,
    depth: -1.8,
    orbitTilt: [-0.25, -0.1, 0.15],
  },
];