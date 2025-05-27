'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function VersionToggle() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  // Define all available versions and their paths
  const versions = [
    { name: 'V1', path: '/' },
    { name: 'V2', path: '/two' },
    { name: 'V3', path: '/three' },
    { name: 'V4', path: '/four' }
  ];
  
  // Find current version index
  const getCurrentVersionIndex = () => {
    if (pathname === '/') return 0;
    for (let i = 1; i < versions.length; i++) {
      if (pathname.startsWith(versions[i].path)) return i;
    }
    return 0; // Default to first version if not found
  };
  
  const currentVersionIndex = getCurrentVersionIndex();
  const currentVersion = versions[currentVersionIndex];
  
  // Navigate to next version
  const goToNextVersion = () => {
    // If at the last version, go back to the first version
    const nextIndex = currentVersionIndex < versions.length - 1 ? currentVersionIndex + 1 : 0;
    router.push(versions[nextIndex].path);
    setIsMenuOpen(false);
  };
  
  // Navigate to previous version
  const goToPrevVersion = () => {
    // If at the first version, go to the last version
    const prevIndex = currentVersionIndex > 0 ? currentVersionIndex - 1 : versions.length - 1;
    router.push(versions[prevIndex].path);
    setIsMenuOpen(false);
  };
  
  // Navigate to specific version
  const goToVersion = (index: number) => {
    router.push(versions[index].path);
    setIsMenuOpen(false);
  };
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.version-toggle-container')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 version-toggle-container">
      {/* Version selector dropdown */}
      {isMenuOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-2 mb-2 w-48">
          <div className="text-center font-medium text-gray-700 mb-2 pb-2 border-b">
            Select Version
          </div>
          {versions.map((version, index) => (
            <button
              key={version.path}
              onClick={() => goToVersion(index)}
              className={`w-full text-left px-4 py-2 rounded ${index === currentVersionIndex ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100'}`}
            >
              {version.name}
            </button>
          ))}
        </div>
      )}
      
      {/* Navigation buttons */}
      <div className="flex space-x-2">
        {/* Previous version button */}
        <button
          onClick={goToPrevVersion}
          className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg
                    bg-blue-500 hover:bg-blue-600 text-white
                    transition-all duration-300 transform hover:scale-110
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          title="Previous Version"
        >
          <ChevronLeft size={20} />
        </button>
        
        {/* Current version button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            flex items-center justify-center h-10 rounded-full shadow-lg
            bg-blue-500 hover:bg-blue-600 text-white
            transition-all duration-300 transform hover:scale-110
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
            ${isHovered ? 'px-4 min-w-[40px]' : 'w-10'}
          `}
          title="Toggle Version Menu"
        >
          <span className="font-medium whitespace-nowrap">
            {isHovered ? 'Menu' : currentVersion.name}
          </span>
        </button>
        
        {/* Next version button */}
        <button
          onClick={goToNextVersion}
          className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg
                    bg-blue-500 hover:bg-blue-600 text-white
                    transition-all duration-300 transform hover:scale-110
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          title="Next Version"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
