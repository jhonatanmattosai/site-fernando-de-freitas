import React, { useState, useEffect, useRef } from 'react';

// A simple utility for conditional class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
}

const CircularGallery = React.forwardRef(
  ({ items, className, radius = 600, autoRotateSpeed = 0.02, ...props }, ref) => {
    const [rotation, setRotation] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    
    const dragStartX = useRef(0);
    const rotationBeforeDrag = useRef(0);
    const scrollTimeoutRef = useRef(null);
    const animationFrameRef = useRef(null);

    const [currentRadius, setCurrentRadius] = useState(radius);

    useEffect(() => {
      const getResponsiveRadius = () => {
        if (typeof window !== 'undefined') {
          if (window.innerWidth < 640) return radius * 0.55;
          if (window.innerWidth < 768) return radius * 0.75;
        }
        return radius;
      };
      
      const handleResize = () => setCurrentRadius(getResponsiveRadius());
      handleResize();
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [radius]);

    // Effect to handle scroll-based rotation
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolling(true);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        const scrollRotation = scrollProgress * 360;
        setRotation(scrollRotation);

        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }, []);

    // Effect for auto-rotation when not scrolling or dragging
    useEffect(() => {
      const autoRotate = () => {
        if (!isScrolling && !isDragging) {
          setRotation(prev => prev + autoRotateSpeed);
        }
        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };

      animationFrameRef.current = requestAnimationFrame(autoRotate);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [isScrolling, isDragging, autoRotateSpeed]);

    // Drag handlers
    const handlePointerDown = (e) => {
      setIsDragging(true);
      dragStartX.current = e.clientX;
      rotationBeforeDrag.current = rotation;
    };

    const handlePointerMove = (e) => {
      if (isDragging) {
        const deltaX = e.clientX - dragStartX.current;
        setRotation(rotationBeforeDrag.current + deltaX * 0.25); // Sensitivity
      }
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    const anglePerItem = 360 / items.length;
    
    return (
      <div
        ref={ref}
        role="region"
        aria-label="Circular 3D Gallery"
        className={cn(
          "relative w-full h-full flex items-center justify-center touch-none", 
          isDragging ? "cursor-grabbing" : "cursor-grab",
          className
        )}
        style={{ perspective: '2000px' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        {...props}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: `translateZ(-${currentRadius}px) rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const totalRotation = rotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
            
            // Lógica de "Uma imagem por vez" no mobile
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
            const opacity = isMobile 
              ? Math.max(0, 1 - (normalizedAngle / 30)) // Some logo após 30 graus
              : Math.max(0.3, 1 - (normalizedAngle / 180));

            return (
              <div
                key={item.photo.url} 
                role="group"
                aria-label={item.common}
                className="absolute w-[220px] sm:w-[320px] md:w-[400px] h-[340px] sm:h-[450px] md:h-[550px] pointer-events-none"
                style={{
                  transform: `translate(-50%, -50%) rotateY(${itemAngle}deg) translateZ(${currentRadius}px)`,
                  left: '50%',
                  top: '50%',
                  opacity: opacity,
                  transition: 'opacity 0.3s linear'
                }}
              >
                <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden group border border-white/10 bg-black/40 backdrop-blur-lg">
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: item.photo.pos || 'center' }}
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-[#050A18]/90 via-[#050A18]/60 to-transparent text-white">
                    <div className="w-10 h-1 mb-2 md:mb-4 bg-accent transform origin-left group-hover:scale-x-150 transition-transform duration-500" />
                    <h2 className="text-lg md:text-xl font-bold leading-tight">{item.common}</h2>
                    <em className="text-xs md:text-sm italic opacity-80">{item.binomial}</em>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };
