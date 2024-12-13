import React from 'react';
import { Copy } from 'lucide-react';
import { CodeBlockProps } from '../types';
import { copyToClipboard } from '../utils/clipboard';

export const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'dockerfile',
  className = ''
}) => {
  const handleCopy = () => {
    copyToClipboard(code);
  };

  return (
    <div className={`relative group ${className}`}>
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 p-2 rounded bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity"
        title="Copy to clipboard"
      >
        <Copy className="w-4 h-4" />
      </button>
      <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};