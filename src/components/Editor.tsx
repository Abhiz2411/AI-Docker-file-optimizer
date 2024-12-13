import React from 'react';
import MonacoEditor from 'react-monaco-editor';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  return (
    <div className="h-[500px] w-full rounded-lg overflow-hidden border border-gray-700">
      <MonacoEditor
        language="dockerfile"
        theme="vs-dark"
        value={value}
        onChange={onChange}
        options={{
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          fontSize: 14,
          lineNumbers: 'on',
          roundedSelection: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};