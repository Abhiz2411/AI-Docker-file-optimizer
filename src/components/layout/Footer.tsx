import React from 'react';

export const Footer: React.FC = () => (
  <footer className="border-t border-gray-800 py-4 mt-auto">
    <div className="container mx-auto px-4 text-center space-y-1">
      <p className="text-sm text-gray-400">
        Remember to use your API calls wisely. Analysis results are cached for 24 hours.
      </p>
      <p className="text-gray-400">
        Made with <span className="text-red-500">❤️</span> by{' '}
        <a 
          href="https://abhijit-zende.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          Abhi Zende
        </a>
      </p>
    </div>
  </footer>
);