export type Project = {
  id: string;

  name: string;
  shortName: string;

  planetCode: string;
  classification: string;
  sector: string;

  category: string;
  description: string;
  planetaryDescription: string;

  status: string;
  year: string;

  technologies: string[];

  features: {
    name: string;
    description: string;
  }[];

  image: string;
  accent: string;

  orbitRadius: number;
  orbitSpeed: number;
  size: number;
  startAngle: number;

  orbitTilt: [number, number, number];

  depth: number;

  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "kaiser",

    name: "KAISER",
    shortName: "KAISER",

    planetCode: "KAISER-01",

    classification: "AUTONOMOUS INTELLIGENCE WORLD",

    sector: "AI SYSTEMS",

    category: "Personal AI Assistant",

    description:
      "A local-first personal AI assistant built around voice interaction, local language models, tool execution and speech systems.",

    planetaryDescription:
      "KAISER-01 is an experimental intelligence world engineered around natural voice communication, autonomous reasoning and direct interaction with connected systems. Its intelligence core operates through local AI infrastructure while communication arrays allow two-way voice interaction between the operator and the system.",

    status: "ACTIVE DEVELOPMENT",

    year: "2026",

    technologies: [
      "Python",
      "Ollama",
      "Speech Recognition",
      "Text-to-Speech",
      "Tool Systems",
    ],

    features: [
      {
        name: "VOICE COMMUNICATION ARRAY",

        description:
          "Allows natural spoken communication between the operator and the intelligence core.",
      },

      {
        name: "INTELLIGENCE CORE",

        description:
          "Processes requests through locally operated language-model infrastructure powered by Ollama.",
      },

      {
        name: "AUDIO INTERPRETATION NETWORK",

        description:
          "Transforms incoming speech signals into structured text and commands for the reasoning system.",
      },

      {
        name: "SYNTHETIC RESPONSE SYSTEM",

        description:
          "Converts generated responses into audible communication through the text-to-speech pipeline.",
      },

      {
        name: "AUTONOMOUS ACTION NETWORK",

        description:
          "Provides the intelligence core with access to connected tools and system capabilities.",
      },

      {
        name: "MODULAR SYSTEM ARCHITECTURE",

        description:
          "Separates speech, reasoning and tool systems so individual planetary subsystems can evolve independently.",
      },
    ],

    image: "/planets/kaiser.png",

    accent: "#d7ff00",

    orbitRadius: 4.6,
    orbitSpeed: 0.045,
    size: 0.95,
    startAngle: 0.2,

    orbitTilt: [0.2, 0.1, 0.08],

    depth: 0.4,

    github: "",
    demo: "",
  },

  {
    id: "prompt-lab",

    name: "Prompt Transformation Lab",
    shortName: "PROMPT LAB",

    planetCode: "PROMPT-LAB-02",

    classification: "LINGUISTIC TRANSFORMATION WORLD",

    sector: "GENERATIVE AI",

    category: "AI Prompt Platform",

    description:
      "An AI platform that transforms weak prompts into structured, high-quality instructions for language models.",

    planetaryDescription:
      "PROMPT-LAB-02 is a linguistic transformation world designed to receive primitive communication signals and restructure them into highly organized instructions for artificial intelligence systems. Its language-processing infrastructure analyzes intent, context and constraints before producing stronger transmission formats.",

    status: "DEPLOYED",

    year: "2026",

    technologies: [
      "Next.js",
      "FastAPI",
      "Gemini",
      "PostgreSQL",
      "JWT",
    ],

    features: [
      {
        name: "PROMPT REFINERY",

        description:
          "Transforms weak or incomplete prompts into structured instructions containing role, goal, context, constraints and output requirements.",
      },

      {
        name: "LANGUAGE ANALYSIS CORE",

        description:
          "Examines incoming requests and identifies missing context, unclear objectives and weak instruction patterns.",
      },

      {
        name: "IDENTITY ACCESS NETWORK",

        description:
          "Provides authenticated access through JWT-based account and session infrastructure.",
      },

      {
        name: "TRANSMISSION ARCHIVE",

        description:
          "Stores previously transformed prompts so users can reopen and reuse earlier AI communication patterns.",
      },

      {
        name: "SIGNAL SEARCH SYSTEM",

        description:
          "Allows archived transformations to be searched, filtered and organized efficiently.",
      },

      {
        name: "FAVORITE SIGNAL ARRAY",

        description:
          "Lets important prompt transformations be marked and retained for quick future access.",
      },
    ],

    image: "/planets/prompt-lab.png",

    accent: "#d7ff00",

    orbitRadius: 5.6,
    orbitSpeed: -0.036,
    size: 0.9,
    startAngle: 1.3,

    orbitTilt: [-0.25, 0.1, 0.1],

    depth: -0.8,

    github: "",
    demo: "",
  },

  {
    id: "dev-cli",

    name: "Developer CLI Toolkit",
    shortName: "DEV CLI",

    planetCode: "DEV-CLI-03",

    classification: "DEVELOPER UTILITY WORLD",

    sector: "DEVELOPER INFRASTRUCTURE",

    category: "Developer Productivity",

    description:
      "A command-line toolkit combining developer utilities, search, Git tools, project inspection and automation.",

    planetaryDescription:
      "DEV-CLI-03 is an industrial developer utility world built to consolidate repetitive engineering operations into a single command environment. Its command network provides access to repository operations, smart search, project diagnostics and automation systems from one central interface.",

    status: "ACTIVE DEVELOPMENT",

    year: "2026",

    technologies: [
      "Python",
      "CLI",
      "Git",
      "JSON",
      "Automation",
    ],

    features: [
      {
        name: "COMMAND NETWORK",

        description:
          "Provides a centralized terminal interface for accessing the planet's developer utility systems.",
      },

      {
        name: "SMART SEARCH ARRAY",

        description:
          "Searches project files and development environments to quickly locate relevant information.",
      },

      {
        name: "REPOSITORY CONTROL SYSTEM",

        description:
          "Provides Git-related operations and repository utilities through simplified commands.",
      },

      {
        name: "PROJECT DIAGNOSTIC CORE",

        description:
          "Inspects project structures and surfaces useful information about the current development environment.",
      },

      {
        name: "AUTOMATION GRID",

        description:
          "Reduces repetitive development tasks by combining common operations into reusable command workflows.",
      },

      {
        name: "TERMINAL INTERFACE LAYER",

        description:
          "Presents developer tools through a structured command-line experience designed for fast navigation.",
      },
    ],

    image: "/planets/dev-cli.png",

    accent: "#d7ff00",

    orbitRadius: 6.7,
    orbitSpeed: 0.03,
    size: 0.82,
    startAngle: 2.2,

    orbitTilt: [0.15, -0.15, 0.18],

    depth: -1.4,

    github: "",
    demo: "",
  },

  {
    id: "bugreader",

    name: "BugReader AI",
    shortName: "BUGREADER",

    planetCode: "BUGREADER-X4",

    classification: "SOFTWARE DIAGNOSTIC WORLD",

    sector: "AI CODE INTELLIGENCE",

    category: "AI Code Analysis",

    description:
      "An AI-powered code analysis system that detects bugs, explains issues and produces corrected code.",

    planetaryDescription:
      "BUGREADER-X4 is a hostile diagnostic world engineered to investigate unstable software structures. Incoming code transmissions are scanned for syntax anomalies, logic failures and structural weaknesses before its repair systems generate explanations, severity assessments and reconstructed code.",

    status: "COMPLETE",

    year: "2026",

    technologies: [
      "Python",
      "Flask",
      "Gemini",
      "PostgreSQL",
      "Code Analysis",
    ],

    features: [
      {
        name: "ANOMALY DETECTION GRID",

        description:
          "Scans incoming code transmissions for syntax errors, logic problems and suspicious structural patterns.",
      },

      {
        name: "SEVERITY ANALYSIS CORE",

        description:
          "Classifies detected software anomalies based on their likely impact and urgency.",
      },

      {
        name: "DIAGNOSTIC EXPLANATION SYSTEM",

        description:
          "Generates understandable explanations describing why detected code problems occur.",
      },

      {
        name: "REPAIR GENERATION ARRAY",

        description:
          "Produces suggested corrections and improved code based on the detected software failures.",
      },

      {
        name: "CODE RECONSTRUCTION CHAMBER",

        description:
          "Returns corrected versions of analyzed code so repaired transmissions can be inspected directly.",
      },

      {
        name: "DIAGNOSTIC ARCHIVE",

        description:
          "Preserves previous code-analysis sessions and their detected anomalies for later review.",
      },
    ],

    image: "/planets/bugreader.png",

    accent: "#ff3b2f",

    orbitRadius: 5,
    orbitSpeed: -0.04,
    size: 0.88,
    startAngle: 3.3,

    orbitTilt: [-0.18, 0.12, -0.2],

    depth: 0.8,

    github: "",
    demo: "",
  },

  {
    id: "ai-chatbot",

    name: "AI Business Chatbot",
    shortName: "AI CHATBOT",

    planetCode: "NEXUS-COMM-05",

    classification: "COMMERCIAL COMMUNICATION WORLD",

    sector: "BUSINESS AUTOMATION",

    category: "Business AI Automation",

    description:
      "A business chatbot designed to answer approved questions, automate conversations and capture customer leads.",

    planetaryDescription:
      "NEXUS-COMM-05 is a commercial communication world designed to manage high-volume interactions between businesses and incoming visitors. Its knowledge network supplies approved information while lead-detection systems capture valuable customer signals and forward them into administrative control infrastructure.",

    status: "ACTIVE DEVELOPMENT",

    year: "2026",

    technologies: [
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "LLM",
      "Business Automation",
    ],

    features: [
      {
        name: "CUSTOMER COMMUNICATION ARRAY",

        description:
          "Handles natural-language conversations with visitors through an AI-powered messaging interface.",
      },

      {
        name: "KNOWLEDGE RETRIEVAL NETWORK",

        description:
          "Provides business-approved answers using controlled information rather than inventing unknown details.",
      },

      {
        name: "LEAD DETECTION SYSTEM",

        description:
          "Captures customer identity, contact information and service interest during conversations.",
      },

      {
        name: "CONVERSATION MEMORY VAULT",

        description:
          "Stores conversation data so interactions can be reviewed and managed from the business side.",
      },

      {
        name: "ADMIN CONTROL STATION",

        description:
          "Allows authorized operators to manage FAQs, leads and customer interaction data.",
      },

      {
        name: "FALLBACK SAFETY PROTOCOL",

        description:
          "Prevents unsupported business information from being fabricated when verified knowledge is unavailable.",
      },
    ],

    image: "/planets/ai-chatbot.png",

    accent: "#00e6ff",

    orbitRadius: 6.1,
    orbitSpeed: 0.032,
    size: 0.86,
    startAngle: 4.4,

    orbitTilt: [0.3, 0.1, 0.08],

    depth: -0.5,

    github: "",
    demo: "",
  },

  {
    id: "trackflow",

    name: "TrackFlow",
    shortName: "TRACKFLOW",

    planetCode: "TRACKFLOW-G6",

    classification: "HUMAN DEVELOPMENT MONITORING WORLD",

    sector: "PERSONAL GROWTH SYSTEMS",

    category: "Habit Tracking Platform",

    description:
      "A personal growth platform for tracking habits, routines and consistency across multiple areas of life.",

    planetaryDescription:
      "TRACKFLOW-G6 is a human development monitoring world constructed around the observation of repeated behavioral signals. Its growth core receives data from health, study, skills and daily-routine sectors, allowing long-term consistency patterns to be tracked through a unified monitoring environment.",

    status: "COMPLETE",

    year: "2026",

    technologies: [
      "Flask",
      "PostgreSQL",
      "JavaScript",
      "HTML",
      "CSS",
    ],

    features: [
      {
        name: "HABIT MONITORING NETWORK",

        description:
          "Records recurring activities and tracks whether daily behavioral targets have been completed.",
      },

      {
        name: "LIFE SECTOR CLASSIFICATION",

        description:
          "Separates tracked habits into areas such as study, skills, health and personal development.",
      },

      {
        name: "CONSISTENCY ANALYSIS CORE",

        description:
          "Helps reveal long-term patterns by monitoring repeated completion over time.",
      },

      {
        name: "DAILY CHECK-IN TERMINAL",

        description:
          "Provides a simple interface for recording the completion state of daily habits.",
      },

      {
        name: "MEMORY VAULT",

        description:
          "Stores habit history persistently through PostgreSQL-backed infrastructure.",
      },

      {
        name: "GROWTH OBSERVATION DASHBOARD",

        description:
          "Presents behavioral information through a centralized interface for reviewing personal progress.",
      },
    ],

    image: "/planets/trackflow.png",

    accent: "#9cff00",

    orbitRadius: 7.2,
    orbitSpeed: -0.026,
    size: 0.8,
    startAngle: 5.3,

    orbitTilt: [-0.25, -0.1, 0.15],

    depth: -1.8,

    github: "",
    demo: "",
  },
];