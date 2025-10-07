
import { GoogleGenAI } from '@google/genai';
import { CustomizationOptions } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

function constructPrompt(options: CustomizationOptions): string {
  const {
    gender,
    gender2,
    hairColor,
    numCharacters,
    costume,
    eyeColor,
    weapon,
    background,
    pose,
  } = options;

  if (numCharacters === 1) {
    const prompt = `
      Create a photorealistic, cinematic, high-resolution image of a ${gender} K-pop demon hunter.
      
      Character Details:
      - Appearance: Stunning visuals of a K-pop idol.
      - Hair: Vibrant ${hairColor} hair, styled fashionably.
      - Eyes: Intense, glowing ${eyeColor} eyes.
      - Outfit: Dressed in ${costume}.
      
      Scene Details:
      - Action: The character is ${pose}, wielding ${weapon}.
      - Setting: The scene is set ${background}.
      
      Artistic Style:
      - Aesthetic: Dark, edgy, and stylish K-pop music video feel.
      - Lighting: Dynamic and dramatic lighting with deep shadows and vibrant highlights.
      - Quality: Unreal Engine 5 render, 8K, ultra-detailed, sharp focus, cinematic composition.
    `;
    return prompt.trim().replace(/\s+/g, ' ');
  } else {
    // Logic for 2 characters
    const prompt = `
      Create a photorealistic, cinematic, high-resolution image of two K-pop demon hunters, a ${gender} and a ${gender2}.
      
      Character Details (Both):
      - Appearance: Stunning visuals of K-pop idols.
      - Hair: Vibrant ${hairColor} hair, styled fashionably. The two characters can have variations of this color.
      - Eyes: Intense, glowing ${eyeColor} eyes.
      - Outfit: Both are dressed in complementary ${costume}.
      
      Scene Details:
      - Action: The characters are interacting, positioned ${pose}, both wielding ${weapon}.
      - Setting: The scene is set ${background}.
      
      Artistic Style:
      - Aesthetic: Dark, edgy, and stylish K-pop music video feel, highlighting the duo's dynamic.
      - Lighting: Dynamic and dramatic lighting with deep shadows and vibrant highlights.
      - Quality: Unreal Engine 5 render, 8K, ultra-detailed, sharp focus, cinematic composition.
    `;
    return prompt.trim().replace(/\s+/g, ' ');
  }
}

export const generateDemonHunterImage = async (options: CustomizationOptions): Promise<string> => {
  const prompt = constructPrompt(options);

  try {
    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: prompt,
      config: {
        numberOfImages: 1,
        outputMimeType: 'image/jpeg',
        aspectRatio: options.aspectRatio,
      },
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
      const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
      return `data:image/jpeg;base64,${base64ImageBytes}`;
    } else {
      throw new Error('Image generation failed, no images returned.');
    }
  } catch (error) {
    console.error('Error generating image with Gemini:', error);
    throw new Error('Failed to generate image. Please check your API key and try again.');
  }
};
