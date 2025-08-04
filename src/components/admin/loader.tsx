import React, { useState, useEffect } from 'react';

interface LogoLoaderProps {
  size?: number;
  overlayBgClass?: string;
  spinClass?: string;
  pulseClass?: string;
  message?: string;
  interval?: number;
  logoUrl?: string;
  gradientColors?: [string, string];
}

export const LogoLoader: React.FC<LogoLoaderProps> = ({
  size = 100,
  overlayBgClass = 'bg-white/80 dark:bg-gray-900/90 backdrop-blur-md',
  spinClass = 'animate-spin-slow',
  pulseClass = 'from-cyan-500 to-indigo-600',
  message = 'Loading',
  interval = 500,
  logoUrl = "/android-chrome-192x192.png",
  gradientColors = ['#8B5CF6', '#06B6D4']
}) => {
  const frames = ['.', '..', '...'];
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrameIndex(idx => (idx + 1) % frames.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  const gradientStyle = {
    background: `linear-gradient(135deg, ${gradientColors[0]}, ${gradientColors[1]})`,
  };

  return (
    <div
      role="status"
      aria-busy="true"
      className={`fixed inset-0 flex flex-col items-center justify-center z-[9999] ${overlayBgClass}`}
    >
      <div className="relative" style={{ width: size, height: size }}>
        {/* Pulse rings */}
        <div
          className="absolute inset-0 rounded-full opacity-20 animate-pulse"
          style={{
            ...gradientStyle,
            margin: '-20px',
            width: size + 40,
            height: size + 40,
          }}
        />

        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${pulseClass} animate-ping`}
          style={{
            margin: '-15px',
            width: size + 30,
            height: size + 30,
            opacity: 0.3
          }}
        />

        {/* Perfectly centered logo */}
        <div className="relative h-full w-full flex items-center justify-center">
          <div className="absolute inset-0 rounded-full shadow-xl border-4 border-white dark:border-gray-800 overflow-hidden">
            <img
              src={logoUrl}
              alt="Loading"
              className={`${spinClass} rounded-full w-full h-full object-contain p-3 bg-white dark:bg-gray-800`}
            />
          </div>

          {/* Reflection effect */}
          <div className="absolute top-2 left-2 w-8 h-8 bg-white/40 rounded-full blur-[6px]" />
        </div>
      </div>

      {/* Loading text with smooth ellipsis animation */}
      <p className="mt-6 text-sm font-medium text-gray-600 dark:text-gray-300">
        {message} {frames[frameIndex]}
      </p>

      {/* Subtle floating dots */}
      <div className="absolute bottom-8 flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"
            style={{
              animationDelay: `${i * 0.15}s`,
              opacity: 0.8 - (i * 0.2)
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoLoader;