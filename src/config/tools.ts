export const tools = {
  lovable: {
    name: "Lovable",
    logo: "/logos/lovable.svg",
    url: "https://lovable.dev"
  },
  replit: {
    name: "Replit",
    logo: "/logos/replit.svg",
    url: "https://replit.com"
  },
  v0: {
    name: "v0",
    logo: "/logos/v0.svg",
    url: "https://v0.dev"
  },
  bolt: {
    name: "Bolt",
    logo: "/logos/bolt.svg",
    url: "https://bolt.new"
  },
  cursor: {
    name: "Cursor",
    logo: "/logos/cursor.svg",
    url: "https://www.cursor.com"
  },
  chatgpt: {
    name: "ChatGPT",
    logo: "/logos/chatgpt.svg",
    url: "https://https://chatgpt.com"
  },
  claudeSonnet: {
    name: "Claude Sonnet",
    logo: "/logos/claude.svg",
    url: "https://claude.ai"
  }
} as const

export type ToolId = keyof typeof tools 