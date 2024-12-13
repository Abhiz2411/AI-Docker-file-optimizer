import OpenAI from 'openai';
import { Analysis, AnalysisCache } from '../types';

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
const cache: AnalysisCache = {};

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

const SYSTEM_PROMPT = `You are a Dockerfile expert. Analyze the provided Dockerfile and:
1. Provide specific suggestions for best practices
2. Suggest size optimizations
3. Generate an optimized version of the Dockerfile incorporating all improvements
Format your response as JSON with 'suggestions', 'optimizations', and 'optimizedDockerfile' fields.`;

export const analyzeDockerfile = async (dockerfile: string): Promise<Analysis> => {
  const cacheKey = dockerfile.trim();
  const cachedResult = cache[cacheKey];
  
  if (cachedResult && Date.now() - cachedResult.timestamp < CACHE_DURATION) {
    return cachedResult.analysis;
  }

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: dockerfile }
      ],
      model: "gpt-3.5-turbo",
    });

    const result = JSON.parse(completion.choices[0].message.content || '{}');
    const analysis: Analysis = {
      suggestions: result.suggestions || [],
      optimizations: result.optimizations || [],
      optimizedDockerfile: result.optimizedDockerfile || dockerfile,
    };

    cache[cacheKey] = {
      timestamp: Date.now(),
      analysis
    };

    return analysis;
  } catch (error) {
    console.error('Error analyzing Dockerfile:', error);
    return {
      suggestions: [],
      optimizations: [],
      optimizedDockerfile: dockerfile,
      error: 'Failed to analyze Dockerfile. Please try again later.'
    };
  }
};