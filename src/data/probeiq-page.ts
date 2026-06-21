export type ProbeIQSection = {
  paragraphs: string[];
  bullets?: string[];
  numbered?: string[];
  questions?: string[];
};

export const PROBEIQ_PAGE = {
  hero: {
    title: "ProbeIQ",
    subtitle: "Turn Every Educational Resource Into an AI Tutor",
    description:
      "ProbeIQ transforms educational videos into interactive AI tutors. Learners can ask questions naturally while watching content and receive grounded answers, explanations, and guidance based on the source material in real time.",
    origin: "Built at YC × Moss Conversational AI Hackathon",
    badge: "Voice AI",
  },
  overview: {
    paragraphs: [
      "Educational videos have become one of the most effective ways to learn complex subjects, yet they remain fundamentally passive.",
      "Students spend hours watching lectures, tutorials, and procedural demonstrations, but when confusion occurs, finding the answer often means scrubbing through a 30-minute video, searching transcripts, or asking instructors for help.",
      "ProbeIQ transforms passive educational content into interactive learning experiences. By combining transcription, retrieval, voice interaction, and AI reasoning, ProbeIQ allows learners to engage with educational content as if they were speaking directly with a tutor.",
    ],
  },
  problem: {
    paragraphs: [
      "Millions of hours of expert knowledge already exist online, but most of it is trapped inside videos.",
      "Learners frequently struggle to:",
      "In technical domains such as dentistry, healthcare, engineering, and professional training, these challenges slow learning and increase dependence on instructors.",
      "The problem is not a lack of content. The problem is that existing content is difficult to navigate, search, and interact with.",
    ],
    bullets: [
      "Find specific concepts within long videos",
      "Understand complex procedures and terminology",
      "Receive immediate clarification when confused",
      "Connect concepts across multiple lessons",
      "Learn at their own pace",
    ],
  },
  solution: {
    paragraphs: [
      "ProbeIQ turns educational videos into conversational learning environments.",
      "The platform:",
      "Instead of manually searching for answers, learners can ask:",
      "ProbeIQ responds using the actual educational content and directs learners back to the exact source material.",
    ],
    bullets: [
      "Transcribes educational content",
      "Structures knowledge into searchable learning units",
      "Retrieves relevant context based on student questions",
      "Generates grounded answers with citations and timestamps",
      "Enables real-time voice interaction",
      "Controls video playback and navigation dynamically",
    ],
    questions: [
      "Why is this step important?",
      "Can you explain that concept again?",
      "What did the instructor mean by this procedure?",
    ],
  },
  technology: {
    paragraphs: [
      "ProbeIQ combines several AI-native systems:",
      "The result is an AI tutor that stays grounded in the source material rather than generating generic responses.",
    ],
    bullets: [
      "Video transcription and content processing",
      "Structured knowledge extraction",
      "Semantic retrieval and grounding",
      "Retrieval-Augmented Generation",
      "Real-time voice interaction",
      "Context-aware educational reasoning",
    ],
  },
  demo: {
    videoId: "a4XDWGnEkhg",
    overview: {
      title: "Interactive Dental Education with AI",
      description:
        "ProbeIQ transforms procedural dental videos into interactive AI tutors. Instead of passively watching educational content, learners can ask questions naturally, receive grounded explanations, and jump directly to the relevant part of the lesson.",
    },
    behindTheScenes: [
      {
        step: 1,
        text: "Educational video is transcribed into structured learning data.",
      },
      {
        step: 2,
        text: "Knowledge is organized into timestamped learning units and searchable concepts.",
      },
      {
        step: 3,
        text: "ProbeIQ retrieves the most relevant procedure context based on the learner's question.",
      },
      {
        step: 4,
        text: "The AI tutor generates a grounded answer with citations and timestamps.",
      },
      {
        step: 5,
        text: "The learner can jump directly to the relevant moment in the lesson.",
      },
    ],
    whyThisMatters: {
      paragraphs: [
        "Traditional educational videos are passive. When learners become confused, they must manually search for answers, rewatch content, or ask instructors for help.",
        "ProbeIQ transforms educational content into an interactive tutor that provides context-aware guidance exactly when learners need it.",
      ],
    },
    futureVision: {
      paragraphs: [
        "Today, ProbeIQ transforms educational videos into AI tutors.",
        "Tomorrow, the same architecture can transform textbooks, research papers, professional certifications, enterprise training, and technical documentation into interactive learning systems.",
        "We believe every educational resource should become a teacher.",
      ],
    },
    technicalArchitecture: [
      "Video",
      "Transcription",
      "Knowledge Structuring",
      "Retrieval",
      "AI Tutor",
      "Grounded Answer + Timestamp",
    ],
  },
  marketOpportunity: {
    paragraphs: [
      "Video has become the dominant format for education, training, and professional development.",
      "At the same time, global spending on education technology, professional training, and workforce learning exceeds hundreds of billions of dollars annually.",
      "The opportunity is not creating more educational content. The opportunity is making existing content intelligent, interactive, and personalized.",
    ],
  },
  whyNow: {
    paragraphs: ["Three major trends are converging:", "The technology now exists to transform passive educational media into active learning systems."],
    numbered: [
      "Educational video content is growing exponentially.",
      "Modern AI systems can understand and reason over large-scale educational content.",
      "Learners increasingly expect personalized, interactive experiences.",
    ],
  },
  vision: {
    paragraphs: [
      "We believe every educational resource should become a teacher.",
      "Today, valuable knowledge is locked inside videos, lectures, demonstrations, textbooks, research papers, and training materials. Learners must adapt to the content rather than the content adapting to the learner.",
      "ProbeIQ transforms content into interactive expertise.",
      "Every lesson, explanation, procedure, and question becomes part of a continuously expanding knowledge system that can guide learners at the exact moment they need help.",
    ],
  },
  longTermOpportunity: {
    paragraphs: [
      "ProbeIQ begins with educational videos.",
      "The underlying architecture can extend to:",
      "Over time, every organization will have domain-specific AI tutors trained on its unique knowledge.",
      "Our goal is to become the intelligence layer that transforms static information into interactive expertise, enabling anyone to learn complex skills faster, more effectively, and at global scale.",
    ],
    bullets: [
      "Textbooks",
      "Research papers",
      "Professional certifications",
      "Medical education",
      "Enterprise training",
      "Technical documentation",
      "Corporate knowledge bases",
    ],
  },
  seoDescription:
    "ProbeIQ transforms educational videos into interactive AI tutors with transcription, retrieval, voice interaction, and grounded reasoning. Built at the YC × Moss Conversational AI Hackathon by Nara Labs.",
};
