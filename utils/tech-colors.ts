// Function to get a color for a tech badge based on the technology name
export const getTechColor = (tech: string): { bg: string; text: string; border: string } => {
  const techColors: Record<string, { bg: string; text: string; border: string }> = {
    // Frontend
    React: { bg: "bg-blue-900/40", text: "text-blue-300", border: "border-blue-700" },
    "React.js": { bg: "bg-blue-900/40", text: "text-blue-300", border: "border-blue-700" },
    TypeScript: { bg: "bg-blue-900/40", text: "text-blue-300", border: "border-blue-700" },
    Redux: { bg: "bg-purple-900/40", text: "text-purple-300", border: "border-purple-700" },

    // Backend
    Node: { bg: "bg-green-900/40", text: "text-green-300", border: "border-green-700" },
    "Node.js": { bg: "bg-green-900/40", text: "text-green-300", border: "border-green-700" },
    Express: { bg: "bg-green-900/40", text: "text-green-300", border: "border-green-700" },
    "Express.js": { bg: "bg-green-900/40", text: "text-green-300", border: "border-green-700" },
    Java: { bg: "bg-orange-900/40", text: "text-orange-300", border: "border-orange-700" },
    "Spring Boot": { bg: "bg-green-900/40", text: "text-green-300", border: "border-green-700" },

    // Database
    MongoDB: { bg: "bg-green-900/40", text: "text-green-300", border: "border-green-700" },
    MySQL: { bg: "bg-blue-900/40", text: "text-blue-300", border: "border-blue-700" },
    SQL: { bg: "bg-blue-900/40", text: "text-blue-300", border: "border-blue-700" },
    Redis: { bg: "bg-red-900/40", text: "text-red-300", border: "border-red-700" },

    // Cloud & DevOps
    GCP: { bg: "bg-blue-900/40", text: "text-blue-300", border: "border-blue-700" },
    Terraform: { bg: "bg-purple-900/40", text: "text-purple-300", border: "border-purple-700" },
    "GitHub Actions": { bg: "bg-gray-900/40", text: "text-gray-300", border: "border-gray-700" },
    Docker: { bg: "bg-blue-900/40", text: "text-blue-300", border: "border-blue-700" },

    // AI & ML
    "Prompt Engineering": { bg: "bg-purple-900/40", text: "text-purple-300", border: "border-purple-700" },
    "GPT models": { bg: "bg-purple-900/40", text: "text-purple-300", border: "border-purple-700" },
    "Hugging Face Transformers": { bg: "bg-yellow-900/40", text: "text-yellow-300", border: "border-yellow-700" },
    "LLMs Fine-Tuning": { bg: "bg-purple-900/40", text: "text-purple-300", border: "border-purple-700" },
    LangChain: { bg: "bg-green-900/40", text: "text-green-300", border: "border-green-700" },

    // Other
    i18n: { bg: "bg-teal-900/40", text: "text-teal-300", border: "border-teal-700" },
    "Rest API": { bg: "bg-indigo-900/40", text: "text-indigo-300", border: "border-indigo-700" },
    Swagger: { bg: "bg-green-900/40", text: "text-green-300", border: "border-green-700" },
    "Power BI": { bg: "bg-yellow-900/40", text: "text-yellow-300", border: "border-yellow-700" },
    Hibernate: { bg: "bg-orange-900/40", text: "text-orange-300", border: "border-orange-700" },
    JUnit: { bg: "bg-red-900/40", text: "text-red-300", border: "border-red-700" },
    Mockito: { bg: "bg-green-900/40", text: "text-green-300", border: "border-green-700" },
    "Spring Security": { bg: "bg-green-900/40", text: "text-green-300", border: "border-green-700" },
    SLF4J: { bg: "bg-blue-900/40", text: "text-blue-300", border: "border-blue-700" },
    OAuth: { bg: "bg-red-900/40", text: "text-red-300", border: "border-red-700" },
    AJAX: { bg: "bg-yellow-900/40", text: "text-yellow-300", border: "border-yellow-700" },
    Packer: { bg: "bg-blue-900/40", text: "text-blue-300", border: "border-blue-700" },
    "Data Modeling": { bg: "bg-blue-900/40", text: "text-blue-300", border: "border-blue-700" },
    Normalization: { bg: "bg-blue-900/40", text: "text-blue-300", border: "border-blue-700" },
    Triggers: { bg: "bg-orange-900/40", text: "text-orange-300", border: "border-orange-700" },
    "SQL Server 2022": { bg: "bg-blue-900/40", text: "text-blue-300", border: "border-blue-700" },
    "Azure Data Studio": { bg: "bg-blue-900/40", text: "text-blue-300", border: "border-blue-700" },
    "Stored Procedures": { bg: "bg-orange-900/40", text: "text-orange-300", border: "border-orange-700" },
    "Data Security": { bg: "bg-red-900/40", text: "text-red-300", border: "border-red-700" },
  }

  // Default color for technologies not in the list
  return techColors[tech] || { bg: "bg-indigo-900/40", text: "text-indigo-300", border: "border-indigo-700" }
}
