import React from 'react';
import { FileCode } from 'lucide-react';
import { CodeBlock } from './CodeBlock';
import { Analysis } from '../types';

interface OptimizedOutputProps {
  analysis: Analysis | null;
}

export const OptimizedOutput: React.FC<OptimizedOutputProps> = ({ analysis }) => {
  if (!analysis?.optimizedDockerfile) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-purple-400 flex items-center gap-2">
        <FileCode className="w-5 h-5" />
        Optimized Dockerfile
      </h3>
      <CodeBlock 
        code={analysis.optimizedDockerfile} 
        className="border border-purple-500/20"
      />
    </div>
  );
};