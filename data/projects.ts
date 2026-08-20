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
  texture: string;
  startAngle: number;
  orbitTilt: [
  number,
  number,
  number
    ];
};

export const projects: Project[] = [
  {
    id: "kaiser",
    name: "KAISER",
    shortName: "KAISER",
    category: "Personal AI Assistant",
    technologies: ["Python", "Ollama", "STT", "TTS"],
    color: "#d7ff00",
    texture: "/textures/planets/kaiser.png",
    orbitRadius: 4.2,
    orbitSpeed: 0.12,
    size: 0.42,
    startAngle: 0.2,
    orbitTilt: [
  0.3,
  0.1,
  0.1,
],
  },

  {
    id: "prompt-forge",
    name: "Prompt Transformation Lab",
    shortName: "PROMPT LAB",
    category: "AI Prompt Platform",
    technologies: ["Next.js", "FastAPI", "Gemini", "PostgreSQL"],
    color: "#a8c900",
    texture: "/textures/planets/prompt-lab.png",
    orbitRadius: 5.2,
    orbitSpeed: -0.08,
    size: 0.48,
    startAngle: 1.3,
    orbitTilt: [
  -0.35,
  0.25,
  0.05,
],
  },

  {
    id: "developer-cli",
    name: "Developer CLI Toolkit",
    shortName: "DEV CLI",
    category: "Developer Productivity",
    technologies: ["Python", "CLI", "Git", "Automation"],
    color: "#c6e94d",
    texture: "/textures/planets/developer-cli.png",
    orbitRadius: 6.0,
    orbitSpeed: 0.065,
    size: 0.38,
    startAngle: 2.3,
    orbitTilt: [
  0.15,
  -0.3,
  0.2,
],
  },

  {
    id: "bugreader",
    name: "BugReader AI",
    shortName: "BUGREADER",
    category: "AI Code Analysis",
    technologies: ["Python", "Flask", "Gemini", "PostgreSQL"],
    color: "#e4ff6a",
    texture: "/textures/planets/bugreader.png",
    orbitRadius: 4.8,
    orbitSpeed: -0.095,
    size: 0.44,
    startAngle: 3.5,
    orbitTilt: [
  -0.2,
  0.1,
  -0.25,
],
  },

  {
    id: "ai-chatbot",
    name: "AI Business Chatbot",
    shortName: "AI CHATBOT",
    category: "Business Automation",
    technologies: ["FastAPI", "AI", "PostgreSQL", "Next.js"],
    color: "#b3d600",
    texture: "/textures/planets/ai-chatbot.png",
    orbitRadius: 5.7,
    orbitSpeed: 0.075,
    size: 0.40,
    startAngle: 4.5,
    orbitTilt: [
  0.4,
  0.15,
  0.1,
],
  },

  {
    id: "trackflow",
    name: "TrackFlow",
    shortName: "TRACKFLOW",
    category: "Habit Tracking System",
    technologies: ["Flask", "PostgreSQL", "JavaScript"],
    color: "#dfff52",
    texture: "/textures/planets/trackflow.png",
    orbitRadius: 6.5,
    orbitSpeed: -0.055,
    size: 0.36,
    startAngle: 5.4,
    orbitTilt: [
  -0.3,
  -0.2,
  0.15,
],
  },
];