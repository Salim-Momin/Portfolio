export type SkillCategory =
  | "LANGUAGE"
  | "FRONTEND"
  | "BACKEND"
  | "DATABASE"
  | "AI"
  | "DEVOPS";

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;

  description: string;

  position: [
    number,
    number,
    number
  ];

  size: number;

  connections: string[];
};

export const skills: Skill[] = [
  // LANGUAGES

  {
    id: "python",
    name: "Python",
    category: "LANGUAGE",

    description:
      "Primary language for AI systems, automation, backend development and developer tooling.",

    position: [-4.8, 1.5, 0.4],

    size: 0.22,

    connections: [
      "fastapi",
      "flask",
      "ai",
      "automation",
    ],
  },

  {
    id: "typescript",
    name: "TypeScript",
    category: "LANGUAGE",

    description:
      "Used for scalable frontend development and strongly typed React applications.",

    position: [4.8, 1.5, -0.3],

    size: 0.22,

    connections: [
      "react",
      "nextjs",
    ],
  },

  {
    id: "javascript",
    name: "JavaScript",
    category: "LANGUAGE",

    description:
      "Core browser language used throughout modern frontend development.",

    position: [5.4, -1.1, 0.7],

    size: 0.17,

    connections: [
      "react",
      "nextjs",
    ],
  },

  {
    id: "sql",
    name: "SQL",
    category: "LANGUAGE",

    description:
      "Used for relational database queries, schema design and application persistence.",

    position: [-3.9, -3.1, -0.5],

    size: 0.17,

    connections: [
      "postgresql",
    ],
  },

  // FRONTEND

  {
    id: "react",
    name: "React",
    category: "FRONTEND",

    description:
      "Component-based UI development for interactive web applications.",

    position: [3.3, 0.1, 0.5],

    size: 0.2,

    connections: [
      "nextjs",
      "tailwind",
    ],
  },

  {
    id: "nextjs",
    name: "Next.js",
    category: "FRONTEND",

    description:
      "Main framework for production-ready React applications and modern web experiences.",

    position: [2.5, -1.8, -0.2],

    size: 0.22,

    connections: [
      "react",
      "typescript",
      "tailwind",
    ],
  },

  {
    id: "tailwind",
    name: "Tailwind",
    category: "FRONTEND",

    description:
      "Utility-first styling system used to rapidly create responsive UI systems.",

    position: [4.3, -2.6, 0.5],

    size: 0.16,

    connections: [
      "react",
      "nextjs",
    ],
  },

  // BACKEND

  {
    id: "fastapi",
    name: "FastAPI",
    category: "BACKEND",

    description:
      "Primary Python API framework for AI applications and production backend services.",

    position: [-2.7, 0.1, 0.7],

    size: 0.2,

    connections: [
      "python",
      "postgresql",
      "ai",
    ],
  },

  {
    id: "flask",
    name: "Flask",
    category: "BACKEND",

    description:
      "Lightweight Python backend framework used across multiple full-stack projects.",

    position: [-4.2, -1.2, -0.3],

    size: 0.18,

    connections: [
      "python",
      "postgresql",
    ],
  },

  // DATABASE

  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "DATABASE",

    description:
      "Primary relational database used for production persistence and structured application data.",

    position: [-2.1, -3, 0.3],

    size: 0.2,

    connections: [
      "fastapi",
      "flask",
      "sql",
    ],
  },

  // AI

  {
    id: "ai",
    name: "AI / LLMs",
    category: "AI",

    description:
      "Building applications powered by modern language models, structured outputs and intelligent workflows.",

    position: [0, 4.3, 0],

    size: 0.3,

    connections: [
      "python",
      "gemini",
      "ollama",
      "rag",
      "agents",
    ],
  },

  {
    id: "gemini",
    name: "Gemini",
    category: "AI",

    description:
      "Cloud LLM integration used for prompt transformation and code-analysis systems.",

    position: [-2.3, 3.3, 0.6],

    size: 0.18,

    connections: [
      "ai",
    ],
  },

  {
    id: "ollama",
    name: "Ollama",
    category: "AI",

    description:
      "Local LLM runtime used for privacy-focused and offline AI systems.",

    position: [2.2, 3.2, -0.5],

    size: 0.18,

    connections: [
      "ai",
      "python",
    ],
  },

  {
    id: "rag",
    name: "RAG",
    category: "AI",

    description:
      "Retrieval-augmented generation architecture for grounding language models in trusted information.",

    position: [-1.6, 5.4, -0.5],

    size: 0.16,

    connections: [
      "ai",
      "postgresql",
    ],
  },

  {
    id: "agents",
    name: "AI Agents",
    category: "AI",

    description:
      "Exploring agentic systems capable of reasoning, tool usage and multi-step execution.",

    position: [1.7, 5.3, 0.7],

    size: 0.18,

    connections: [
      "ai",
      "automation",
    ],
  },

  // DEVOPS / AUTOMATION

  {
    id: "git",
    name: "Git",
    category: "DEVOPS",

    description:
      "Version control and collaborative source-code management.",

    position: [3.5, -4.5, 0.4],

    size: 0.17,

    connections: [
      "github",
    ],
  },

  {
    id: "github",
    name: "GitHub",
    category: "DEVOPS",

    description:
      "Repository hosting, source management and CI workflow infrastructure.",

    position: [5, -4.1, -0.5],

    size: 0.17,

    connections: [
      "git",
    ],
  },

  {
    id: "automation",
    name: "Automation",
    category: "DEVOPS",

    description:
      "Building systems that reduce repetitive work across development and business workflows.",

    position: [-5, -4.3, 0.5],

    size: 0.2,

    connections: [
      "python",
      "agents",
    ],
  },
];