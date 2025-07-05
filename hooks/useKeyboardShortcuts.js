import { useEffect, useState } from 'react';

export default function useKeyboardShortcuts() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  useEffect(() => {
    function handleKeyDown(event) {
      switch (event.key) {
        case '/':
          setIsSearchOpen(true);
          break;
        case 'j':
          setCurrentPostIndex((prev) => prev + 1);
          break;
        case 'k':
          setCurrentPostIndex((prev) => prev - 1);
          break;
        default:
          break;
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return { isSearchOpen, currentPostIndex };
}
