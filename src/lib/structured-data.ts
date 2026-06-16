import type { TeamMember } from "@/types/team";
import { SITE_URL } from "@/lib/site";
import { TEAM_MEMBERS } from "@/data/team";

function personSchema(member: TeamMember) {
  return {
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    worksFor: {
      "@type": "Organization",
      name: "Nara Labs",
      url: SITE_URL,
    },
    ...(member.linkedin ? { sameAs: [member.linkedin] } : {}),
  };
}

function organizationNode() {
  return {
    "@type": "Organization",
    name: "Nara Labs",
    url: SITE_URL,
    description: "Nara Labs builds AI systems for better human judgment.",
    founder: {
      "@type": "Person",
      name: "Nagisa Ikeda",
      jobTitle: "Founder, Product & Design",
      sameAs: ["https://www.linkedin.com/in/nagisaikeda"],
    },
    employee: TEAM_MEMBERS.map(personSchema),
  };
}

export function getOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    ...organizationNode(),
  };
}

export function getTeamStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), ...TEAM_MEMBERS.map(personSchema)],
  };
}

export function getAgentsStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Nara Labs AI Agents",
    description:
      "AI systems built through Nara Labs research, hackathons, and product experiments including Local PM OS, ProbeIQ, and Ahead.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Local PM OS",
        description:
          "AI Chief of Staff for product teams. Dell × NVIDIA Local AI Hackathon. Local AI, agentic orchestration, and enterprise privacy.",
        url: `${SITE_URL}/agents`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "ProbeIQ",
        description:
          "Interactive voice learning agent. YC × Moss Conversational AI Hackathon. Voice AI and retrieval-augmented generation.",
        url: `${SITE_URL}/agents`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Ahead",
        description:
          "AI decision agent exploring memory, scenario simulation, and conversational reasoning for human judgment.",
        url: "https://ahead.nara-labs.com",
      },
    ],
  };
}
