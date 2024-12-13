import React, { useState } from 'react';
import { FileCode, Github } from 'lucide-react';
import { Editor } from './components/Editor';
import { Analysis } from './components/Analysis';
import { analyzeDockerfile } from './utils/openai';
import toast, { Toaster } from 'react-hot-toast';

const SAMPLE_DOCKERFILE = `FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]`;

function App() {
  const [dockerfile, setDockerfile] = useState(SAMPLE_DOCKERFILE);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!dockerfile.trim()) {
      toast.error('Please enter a Dockerfile');
      return;
    }

    setLoading(true);
    try {
      const result = await analyzeDockerfile(dockerfile);
      setAnalysis(result);
      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success('Analysis completed successfully!');
      }
    } catch (error) {
      toast.error('Failed to analyze Dockerfile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Toaster position="top-right" />
      
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm fixed top-0 w-full z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileCode className="w-8 h-8 text-blue-400" />
            <h1 className="text-xl font-bold">Dockerfile Analyzer</h1>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>View on GitHub</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Your Dockerfile</h2>
            <Editor value={dockerfile} onChange={setDockerfile} />
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Analyzing...' : 'Analyze Dockerfile'}
            </button>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Analysis Results</h2>
            <Analysis analysis={analysis} loading={loading} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>Remember to use your API calls wisely. Analysis results are cached for 24 hours.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;