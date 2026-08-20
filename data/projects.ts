export type Project = {
  id: string;
  name: string;
  shortName: string;
  category: string;
  technologies: string[];
  color: string;
  orbitRadius: number;
  orbitSpeed: number;
  size: number;
  startAngle: number;
};

export const projects: Project[] = [
  {
    id: "kaiser",
    name: "KAISER",
    shortName: "KAISER",
    category: "Personal AI Assistant",
    technologies: ["Python", "Ollama", "STT", "TTS"],
    color: "#d7ff00",
    orbitRadius: 4.2,
    orbitSpeed: 0.12,
    size: 0.42,
    startAngle: 0.2,
  },

  {
    id: "prompt-forge",
    name: "Prompt Transformation Lab",
    shortName: "PROMPT LAB",
    category: "AI Prompt Platform",
    technologies: ["Next.js", "FastAPI", "Gemini", "PostgreSQL"],
    color: "#a8c900",
    orbitRadius: 5.2,
    orbitSpeed: -0.08,
    size: 0.48,
    startAngle: 1.3,
  },

  {
    id: "developer-cli",
    name: "Developer CLI Toolkit",
    shortName: "DEV CLI",
    category: "Developer Productivity",
    technologies: ["Python", "CLI", "Git", "Automation"],
    color: "#c6e94d",
    orbitRadius: 6.0,
    orbitSpeed: 0.065,
    size: 0.38,
    startAngle: 2.3,
  },

  {
    id: "bugreader",
    name: "BugReader AI",
    shortName: "BUGREADER",
    category: "AI Code Analysis",
    technologies: ["Python", "Flask", "Gemini", "PostgreSQL"],
    color: "#e4ff6a",
    orbitRadius: 4.8,
    orbitSpeed: -0.095,
    size: 0.44,
    startAngle: 3.5,
  },

  {
    id: "ai-chatbot",
    name: "AI Business Chatbot",
    shortName: "AI CHATBOT",
    category: "Business Automation",
    technologies: ["FastAPI", "AI", "PostgreSQL", "Next.js"],
    color: "#b3d600",
    orbitRadius: 5.7,
    orbitSpeed: 0.075,
    size: 0.40,
    startAngle: 4.5,
  },

  {
    id: "trackflow",
    name: "TrackFlow",
    shortName: "TRACKFLOW",
    category: "Habit Tracking System",
    technologies: ["Flask", "PostgreSQL", "JavaScript"],
    color: "#dfff52",
    orbitRadius: 6.5,
    orbitSpeed: -0.055,
    size: 0.36,
    startAngle: 5.4,
  },
];