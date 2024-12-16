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

export interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export interface MonacoEditorProps extends EditorProps {
  language?: string;
  theme?: string;
  options?: Record<string, any>;
}