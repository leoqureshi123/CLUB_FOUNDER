import React from 'react';

interface PlatformImageProps {
  platform: string;
  className?: string;
}

const PlatformImage: React.FC<PlatformImageProps> = ({ platform, className = '' }) => {
  // Map platform names to their respective colors
  const platformColors: Record<string, string> = {
    'Amazon': 'bg-orange-500',
    'Shopify': 'bg-green-500',
    'Fiverr': 'bg-blue-500',
  };

  // Get the first letter of the platform for the placeholder
  const firstLetter = platform.charAt(0).toUpperCase();
  const bgColor = platformColors[platform] || 'bg-gray-500';

  return (
    <div className={`${bgColor} ${className} flex items-center justify-center text-white font-bold rounded-lg`}>
      {firstLetter}
    </div>
  );
};

export default PlatformImage;