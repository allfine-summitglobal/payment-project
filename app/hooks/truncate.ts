import { useState, useEffect } from 'react';

export function useResponsiveTruncate() {
  const [maxLength, setMaxLength] = useState(100);

  useEffect(() => {
    const updateMaxLength = () => {
      const width = window.innerWidth;

        // Mobile
      if (width < 640) {
        setMaxLength(30);
        // Tablet
      } else if (width < 768) {
        setMaxLength(50);
        // Desktop kecil
      } else if (width < 1024) {
        setMaxLength(80);
        // Desktop besar
      } else {
        setMaxLength(120);
      }
    };

    updateMaxLength();
    window.addEventListener('resize', updateMaxLength);

    return () => window.removeEventListener('resize', updateMaxLength);
  }, []);

  return maxLength;
}