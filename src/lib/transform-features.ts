import { featureDisplayMap } from "@/config/feature-display-map"

export function transformFeature(feature: string): string | null {
  // Split the feature into question and answer
  const [question, answer] = feature.split(": ")
  
  // Create the lookup key
  const key = `${question}:${answer}`
  
  // Return the mapped value or the original if no mapping exists
  const mappedValue = featureDisplayMap[key]
  return mappedValue === null ? null : (mappedValue || feature)
} 