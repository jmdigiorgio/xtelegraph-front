import React from 'react';
import { usePathname } from 'next/navigation';

interface AudioPlayerProps {
  // Add props as needed
}

export function AudioPlayer({}: AudioPlayerProps) {
  const pathname = usePathname();

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 h-40 bg-background ${pathname === '/feed' ? 'border-2 border-neutral-900' : 'border-t border-neutral-900'}`}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        {/* Audio player controls will go here */}
        <div className="flex items-center gap-4">
          {/* Add play/pause, previous, next buttons */}
        </div>

        {/* Progress bar */}
        <div className="flex-1 mx-4 text-center text-neutral-900 font-mono">
          Audio Player
        </div>

        {/* Volume and additional controls */}
        <div className="flex items-center gap-4">
          {/* Add volume control and other buttons */}
        </div>
      </div>
    </div>
  );
}
