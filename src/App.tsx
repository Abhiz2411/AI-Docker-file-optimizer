import React, { useState } from 'react';
import { Editor } from './components/Editor';
import { Analysis } from './components/Analysis';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { analyzeDockerfile } from './utils/openai';
import { SAMPLE_DOCKERFILE } from './constants/dockerfile';
import toast, { Toaster } from 'react-hot-toast';

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
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
  <Toaster position="top-right" />
  <Header />

  <main className="flex-1 container mx-auto px-4 pt-16 pb-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
      {/* Dockerfile Section */}
      <div className="space-y-3 flex flex-col items-center">
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

      {/* Analysis Results Section */}
      <div className="space-y-3 flex flex-col items-center">
        <h2 className="text-lg font-semibold">Analysis Results</h2>
        <div className="max-h-[460px] overflow-y-auto pr-2">
          <Analysis analysis={analysis} loading={loading} />
        </div>
      </div>
    </div>
  </main>

  <Footer />
</div>

  );
}

export default App;