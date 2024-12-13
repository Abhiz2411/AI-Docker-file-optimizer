export interface Analysis {
  suggestions: string[];
  optimizations: string[];
  optimizedDockerfile: string;
  error?: string;
}

export interface AnalysisCache {
  [key: string]: {
    timestamp: number;
    analysis: Analysis;
  };
}

export interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}