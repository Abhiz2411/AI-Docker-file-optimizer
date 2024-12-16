import React from 'react';
import { FileCode, CheckCircle, AlertCircle } from 'lucide-react';
import { Analysis as AnalysisType } from '../types';
import { OptimizedOutput } from './OptimizedOutput';

interface AnalysisProps {
  analysis: AnalysisType | null;
  loading: boolean;
}

export const Analysis: React.FC<AnalysisProps> = ({ analysis, loading }) => {
  if (loading) {
    return (
      <div className="animate-pulse flex flex-col gap-4 p-6 bg-gray-800 rounded-lg">
        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
      </div>
    );
  }

  if (!analysis) return null;

  return (
    <div className="flex flex-col gap-6">
      <OptimizedOutput analysis={analysis} />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          Size Optimizations
        </h3>
        <ul className="space-y-2">
          {analysis.optimizations.map((optimization, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-300">
              <span className="text-blue-400">•</span>
              {optimization}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-green-400 flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          Best Practices
        </h3>
        <ul className="space-y-2">
          {analysis.suggestions.map((suggestion, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-300">
              <span className="text-green-400">•</span>
              {suggestion}
            </li>
          ))}
        </ul>
      </div>

      {analysis.error && (
        <div className="text-red-400 bg-red-900/20 p-4 rounded-lg">
          {analysis.error}
        </div>
      )}
    </div>
  );
};