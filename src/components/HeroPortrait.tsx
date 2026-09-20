import React, { useRef, useState, useEffect } from 'react';
import { Magnet } from './Magnet';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface HeroPortraitProps {
  id?: string;
}

export const HeroPortrait: React.FC<HeroPortraitProps> = ({ id = 'hero-interactive-portrait' }) => {
  // Scale range: 0.6x (minimize) to 1.8x (maximize)
  const [scale, setScale] = useState<number>(1);
  const [showHint, setShowHint] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Touch pinch-to-zoom tracking
  const initialTouchDistance = useRef<number | null>(null);
  const initialScaleOnTouch = useRef<number>(1);

  // Auto-hide the hint after 6 seconds or on first interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setShowHint(false);
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      initialTouchDistance.current = Math.hypot(dx, dy);
      initialScaleOnTouch.current = scale;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && initialTouchDistance.current !== null) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const distance = Math.hypot(dx, dy);
      const ratio = distance / initialTouchDistance.current;
      const nextScale = Math.min(Math.max(initialScaleOnTouch.current * ratio, 0.6), 1.8);
      setScale(nextScale);
    }
  };

  const handleTouchEnd = () => {
    initialTouchDistance.current = null;
  };

  // Wheel zoom support
  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey || e.shiftKey) {
      e.preventDefault();
      setShowHint(false);
      const delta = e.deltaY * -0.003;
      setScale((prev) => Math.min(Math.max(prev + delta, 0.6), 1.8));
    }
  };

  const zoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowHint(false);
    setScale((prev) => Math.min(prev + 0.15, 1.8));
  };

  const zoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowHint(false);
    setScale((prev) => Math.max(prev - 0.15, 0.6));
  };

  const resetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(1);
  };

  return (
    <div
      id={id}
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
      className="relative w-full h-full flex flex-col items-center justify-end group select-none touch-none"
    >
      {/* Interactive face size controls (minimize / maximize with touch or click) */}
      <div className="absolute top-2 sm:-top-8 z-30 flex items-center gap-1.5 bg-[#121316]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 opacity-80 group-hover:opacity-100 transition-opacity shadow-lg">
        <button
          type="button"
          onClick={zoomOut}
          title="Minimize face (-)"
          aria-label="Minimize face"
          className="p-1 rounded-full text-[#D7E2EA] hover:text-white hover:bg-white/10 active:scale-90 transition-transform cursor-pointer"
        >
          <ZoomOut className="w-4 h-4" />
        </button>

        <span className="text-[11px] font-mono font-medium text-[#D7E2EA] px-1 select-none min-w-[36px] text-center">
          {Math.round(scale * 100)}%
        </span>

        <button
          type="button"
          onClick={zoomIn}
          title="Maximize face (+)"
          aria-label="Maximize face"
          className="p-1 rounded-full text-[#D7E2EA] hover:text-white hover:bg-white/10 active:scale-90 transition-transform cursor-pointer"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        {scale !== 1 && (
          <button
            type="button"
            onClick={resetZoom}
            title="Reset face size"
            aria-label="Reset face size"
            className="p-1 ml-0.5 rounded-full text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 active:scale-90 transition-transform cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Floating touch hint */}
      {showHint && (
        <div className="absolute -top-14 sm:-top-16 z-30 pointer-events-none animate-pulse bg-purple-950/80 border border-purple-400/40 text-purple-200 text-[11px] uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap backdrop-blur-sm">
          Pinch or use +/- to resize face
        </div>
      )}

      {/* Magnetic mouse/touch responsive container */}
      <Magnet
        id="hero-portrait-magnet"
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="w-full h-full flex justify-center items-end"
      >
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'bottom center',
            transition: 'transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
          }}
          className="w-full h-full flex justify-center items-end"
        >
          <img
            id="hero-portrait-image"
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Shaswat - 3D Creator Portrait"
            className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>
      </Magnet>
    </div>
  );
};
