
import React, { useState } from 'react';
import { CustomizationOptions } from '../types';
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
} from '../constants';
import OptionSelector from './OptionSelector';

interface ControlPanelProps {
  options: CustomizationOptions;
  onOptionChange: <K extends keyof CustomizationOptions>(
    key: K,
    value: CustomizationOptions[K]
  ) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  options,
  onOptionChange,
  onGenerate,
  isLoading,
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const shareableOptions: Partial<CustomizationOptions> = { ...options };

    if (shareableOptions.numCharacters !== 2) {
      delete shareableOptions.gender2;
    }

    const params = new URLSearchParams();
    Object.entries(shareableOptions).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        params.append(key, String(value));
      }
    });

    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;

    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(err => {
      console.error('Failed to copy URL: ', err);
    });
  };

  return (
    <div className="flex flex-col h-full space-y-6">
      <h2 className="text-2xl font-bold text-center text-purple-300 tracking-wider">Customize Your Hunter</h2>
      
      <div className="space-y-4 flex-grow overflow-y-auto pr-2 -mr-2">
        <OptionSelector
          label="Number of Characters"
          options={NUM_CHARACTERS}
          selectedValue={options.numCharacters}
          onChange={(value) => onOptionChange('numCharacters', value)}
        />
        <OptionSelector
          label={options.numCharacters === 2 ? "Gender (Character 1)" : "Gender"}
          options={GENDERS}
          selectedValue={options.gender}
          onChange={(value) => onOptionChange('gender', value)}
        />
        {options.numCharacters === 2 && (
            <OptionSelector
                label="Gender (Character 2)"
                options={GENDERS}
                selectedValue={options.gender2 ?? ''}
                onChange={(value) => onOptionChange('gender2', value as string)}
            />
        )}
        <OptionSelector
          label="Hair Color"
          options={HAIR_COLORS}
          selectedValue={options.hairColor}
          onChange={(value) => onOptionChange('hairColor', value)}
        />
        <OptionSelector
          label="Eye Color"
          options={EYE_COLORS}
          selectedValue={options.eyeColor}
          onChange={(value) => onOptionChange('eyeColor', value)}
        />
        <OptionSelector
          label="Costume"
          options={COSTUMES}
          selectedValue={options.costume}
          onChange={(value) => onOptionChange('costume', value)}
        />
        <OptionSelector
          label="Weapon"
          options={WEAPONS}
          selectedValue={options.weapon}
          onChange={(value) => onOptionChange('weapon', value)}
        />
        <OptionSelector
          label="Background"
          options={BACKGROUNDS}
          selectedValue={options.background}
          onChange={(value) => onOptionChange('background', value)}
        />
        <OptionSelector
          label="Pose"
          options={POSES}
          selectedValue={options.pose}
          onChange={(value) => onOptionChange('pose', value)}
        />
        <OptionSelector
          label="Aspect Ratio"
          options={ASPECT_RATIOS}
          selectedValue={options.aspectRatio}
          onChange={(value) => onOptionChange('aspectRatio', value)}
        />
      </div>

      <div className="flex flex-col space-y-3 mt-4">
        <button
          onClick={onGenerate}
          disabled={isLoading}
          className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-900 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 shadow-lg"
        >
          {isLoading ? 'Generating...' : 'Generate Image'}
        </button>
        <button
          onClick={handleShare}
          disabled={isLoading}
          className="w-full bg-gray-600 hover:bg-gray-700 disabled:bg-gray-800 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 shadow-lg"
        >
          {copied ? '✅ Link Copied!' : '🔗 Share Configuration'}
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
