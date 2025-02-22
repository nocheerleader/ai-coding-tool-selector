export const tools = {
  lovable: {
    name: "Lovable",
    logo: "/logos/lovable.svg"
  },
  replit: {
    name: "Replit",
    logo: "/logos/replit.svg"
  },
  v0: {
    name: "v0",
    logo: "/logos/v0.svg"
  },
  bolt: {
    name: "Bolt",
    logo: "/logos/bolt.svg"
  },
  cursor: {
    name: "Cursor",
    logo: "/logos/cursor.svg"
  },
  chatgpt: {
    name: "ChatGPT",
    logo: "/logos/chatgpt.svg"
  },
  claudeSonnet: {
    name: "Claude Sonnet",
    logo: "/logos/claude.svg"
  }
} as const

export type ToolId = keyof typeof tools 