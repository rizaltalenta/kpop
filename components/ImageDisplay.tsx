
import React from 'react';

interface ImageDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
}

const LoadingSpinner: React.FC = () => (
  <div className="flex flex-col items-center justify-center space-y-4">
    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-purple-400"></div>
    <p className="text-lg text-purple-300">Summoning your hunter...</p>
  </div>
);

const InitialState: React.FC = () => (
  <div className="text-center text-gray-400">
    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-24 w-24 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    <h3 className="mt-2 text-xl font-semibold text-gray-300">Your Image Awaits</h3>
    <p className="mt-1 text-md">Customize the options and click "Generate Image" to bring your K-Pop Demon Hunter to life.</p>
  </div>
);


const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, isLoading, error }) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="text-center text-red-400 bg-red-900/20 p-6 rounded-lg">
        <h3 className="font-bold text-lg">Generation Failed</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (imageUrl) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
        <img 
          src={imageUrl} 
          alt="Generated K-Pop Demon Hunter" 
          className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl" 
        />
        <a 
          href={imageUrl} 
          download="kpop-demon-hunter.jpg"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
        >
          Download
        </a>
      </div>
    );
  }

  return <InitialState />;
};

export default ImageDisplay;
