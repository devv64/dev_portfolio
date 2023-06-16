import React, { useEffect, useState, CSSProperties, useRef } from 'react';
import './ParticleEffect.css';

interface Particle {
  left: string;
  top: string;
  width: string;
  height: string;
  backgroundColor: string;
  targetX: string;
  targetY: string;
  animationDuration: string;
  zIndex: number;
}

const ParticleEffect: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const createParticles = (event: MouseEvent) => {
    const particleCount = 30;

    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const containerOffsetX = containerRect.left;
    const containerOffsetY = containerRect.top;

    const randColor = getRandomColor();
    for (let i = 0; i < particleCount; i++) {
      const particleSize = Math.random() * 25 + 25;
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 50 + 0;
      const targetX = event.clientX + Math.cos(angle) * distance;
      const targetY = event.clientY + Math.sin(angle) * distance;

      const particle: Particle = {
        left: `${event.clientX - 435}px`,
        top: `${event.clientY - 265}px`,
        width: `${particleSize}px`,
        height: `${particleSize}px`,
        backgroundColor: randColor,
        targetX: `${targetX-event.clientX}px`,
        targetY: `${targetY-event.clientY}px`,
        animationDuration: `${Math.random() * 2 + 0.5}s`,
        zIndex: 0,
      };

      setParticles((prevParticles) => [...prevParticles, particle]);
    }
  };

  const getRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (event: MouseEvent) => {
      createParticles(event);
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="particle-container" ref={containerRef}>
      {particles.map((particle, index) => (
        <div
          key={index}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.width,
            height: particle.height,
            backgroundColor: particle.backgroundColor,
            '--targetX': particle.targetX,
            '--targetY': particle.targetY,
            '--animationDuration': particle.animationDuration,
            zIndex: particle.zIndex, // Set the z-index property
          } as CSSProperties}
        />
      ))}
    </div>
  );
};

export default ParticleEffect;
