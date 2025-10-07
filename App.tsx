import React, { useState, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';
import { generateDemonHunterImage } from './services/geminiService';
import { CustomizationOptions, Option } from './types';
import {
  GENDERS,
  HAIR_COLORS,
  NUM_CHARACTERS,
  COSTUMES,
  EYE_COLORS,
  WEAPONS,
  BACKGROUNDS,
  POSES,
  ASPECT_RATIOS,
} from './constants';
import ControlPanel from './components/ControlPanel';
import ImageDisplay from './components/ImageDisplay';
import Header from './components/Header';
import Footer from './components/Footer';

const getInitialOptions = (): CustomizationOptions => {
  const defaultOptions: CustomizationOptions = {
    gender: GENDERS[0].value,
    gender2: GENDERS[1].value,
    hairColor: HAIR_COLORS[0].value,
    numCharacters: NUM_CHARACTERS[0].value,
    costume: COSTUMES[0].value,
    eyeColor: EYE_COLORS[0].value,
    weapon: WEAPONS[0].value,
    background: BACKGROUNDS[0].value,
    pose: POSES[0].value,
    aspectRatio: ASPECT_RATIOS[0].value,
  };

  try {
    const params = new URLSearchParams(window.location.search);
    const urlOptions: Partial<CustomizationOptions> = {};

    const optionValidators: { [key: string]: Option<any>[] } = {
      gender: GENDERS,
      gender2: GENDERS,
      hairColor: HAIR_COLORS,
      numCharacters: NUM_CHARACTERS,
      costume: COSTUMES,
      eyeColor: EYE_COLORS,
      weapon: WEAPONS,
      background: BACKGROUNDS,
      pose: POSES,
      aspectRatio: ASPECT_RATIOS,
    };

    for (const key in optionValidators) {
      const paramValue = params.get(key);
      if (paramValue && optionValidators[key].some(o => String(o.value) === paramValue)) {
        if (key === 'numCharacters') {
          urlOptions[key] = parseInt(paramValue, 10);
        } else {
          // FIX: Cast urlOptions to 'any' to allow dynamic property assignment
          // without triggering overly strict union type checks.
          (urlOptions as any)[key] = paramValue;
        }
      }
    }
    
    return { ...defaultOptions, ...urlOptions };
  } catch (error) {
    console.error("Error parsing URL options:", error);
    return defaultOptions;
  }
};


const App: React.FC = () => {
  const [options, setOptions] = useState<CustomizationOptions>(getInitialOptions);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateClick = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const generatedImageUrl = await generateDemonHunterImage(options);
      setImageUrl(generatedImageUrl);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [options]);
  
  const handleOptionChange = <K extends keyof CustomizationOptions>(
    key: K,
    value: CustomizationOptions[K]
  ) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-900 font-sans text-gray-200 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-gray-800/50 rounded-2xl shadow-2xl p-6 border border-purple-500/20">
          <ControlPanel
            options={options}
            onOptionChange={handleOptionChange}
            onGenerate={handleGenerateClick}
            isLoading={isLoading}
          />
        </div>
        <div className="lg:col-span-2 bg-gray-800/50 rounded-2xl shadow-2xl flex items-center justify-center p-6 border border-purple-500/20 min-h-[60vh] lg:min-h-0">
          <ImageDisplay imageUrl={imageUrl} isLoading={isLoading} error={error} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;