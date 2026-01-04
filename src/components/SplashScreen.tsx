import { useEffect, useState } from 'react';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start exit animation after 2.5 seconds
    const timer = setTimeout(() => {
      setIsExiting(true);
      // Call onComplete after exit animation finishes (800ms)
      setTimeout(onComplete, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-300 ${isExiting ? 'pointer-events-none' : ''}`}>
      <div className={`relative w-64 h-64 flex items-center justify-center ${isExiting ? 'splash-exit' : ''}`}>
        <img 
          src="/logo2.png" 
          alt="Loading..." 
          className="w-48 object-contain"
        />
      </div>
    </div>
  );
}
