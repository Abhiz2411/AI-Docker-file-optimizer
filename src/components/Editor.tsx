import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import { EditorProps } from '../types';
import { EDITOR_OPTIONS } from '../constants/editor';

export const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden border border-gray-700">
      <MonacoEditor
        value={value}
        onChange={onChange}
        language="dockerfile"
        theme="vs-dark"
        options={EDITOR_OPTIONS}
      />
    </div>
  );
};