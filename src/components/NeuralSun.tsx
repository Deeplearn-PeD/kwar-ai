import { useEffect, useRef } from 'react';

interface NeuralSunProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

export function NeuralSun({ size = 200, className = '', animated = true }: NeuralSunProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!animated || !svgRef.current) return;

    const svg = svgRef.current;
    const rays = svg.querySelectorAll('.sun-ray');
    const nodes = svg.querySelectorAll('.neural-node');
    const connections = svg.querySelectorAll('.neural-connection');

    // Animate rays
    rays.forEach((ray, index) => {
      const el = ray as SVGPathElement;
      el.style.animation = `pulse-ray 3s ease-in-out infinite`;
      el.style.animationDelay = `${index * 0.15}s`;
    });

    // Animate nodes
    nodes.forEach((node, index) => {
      const el = node as SVGCircleElement;
      el.style.animation = `pulse-node 2s ease-in-out infinite`;
      el.style.animationDelay = `${index * 0.2}s`;
    });

    // Animate connections
    connections.forEach((conn, index) => {
      const el = conn as SVGPathElement;
      el.style.animation = `pulse-connection 2.5s ease-in-out infinite`;
      el.style.animationDelay = `${index * 0.1}s`;
    });

    return () => {
      rays.forEach((ray) => {
        (ray as SVGPathElement).style.animation = '';
      });
      nodes.forEach((node) => {
        (node as SVGCircleElement).style.animation = '';
      });
      connections.forEach((conn) => {
        (conn as SVGPathElement).style.animation = '';
      });
    };
  }, [animated]);

  return (
    <svg
      ref={svgRef}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`${className}`}
      style={{ filter: 'drop-shadow(0 0 20px rgba(0, 240, 255, 0.4))' }}
    >
      <defs>
        <linearGradient id="rayGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFB800" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#FFB800" stopOpacity="1" />
          <stop offset="100%" stopColor="#FFB800" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="100%" stopColor="#00c8d4" />
        </linearGradient>
        <radialGradient id="brainGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.05" />
        </radialGradient>
      </defs>

      {/* Outer rays */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30) * (Math.PI / 180);
        const x1 = 100 + Math.cos(angle) * 55;
        const y1 = 100 + Math.sin(angle) * 55;
        const x2 = 100 + Math.cos(angle) * 85;
        const y2 = 100 + Math.sin(angle) * 85;
        return (
          <path
            key={`ray-${i}`}
            className="sun-ray"
            d={`M ${x1} ${y1} L ${x2} ${y2}`}
            stroke="url(#rayGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ transformOrigin: '100px 100px' }}
          />
        );
      })}

      {/* Inner rays (shorter) */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 + 15) * (Math.PI / 180);
        const x1 = 100 + Math.cos(angle) * 50;
        const y1 = 100 + Math.sin(angle) * 50;
        const x2 = 100 + Math.cos(angle) * 70;
        const y2 = 100 + Math.sin(angle) * 70;
        return (
          <path
            key={`inner-ray-${i}`}
            className="sun-ray"
            d={`M ${x1} ${y1} L ${x2} ${y2}`}
            stroke="#00F0FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.6"
            style={{ transformOrigin: '100px 100px' }}
          />
        );
      })}

      {/* Brain circle background */}
      <circle
        cx="100"
        cy="100"
        r="45"
        fill="url(#brainGradient)"
        stroke="#00F0FF"
        strokeWidth="1.5"
        strokeOpacity="0.5"
      />

      {/* Neural connections */}
      <g className="neural-connections">
        {/* Left hemisphere connections */}
        <path className="neural-connection" d="M 75 85 Q 85 90 90 100" stroke="#00F0FF" strokeWidth="1.5" fill="none" strokeOpacity="0.7" />
        <path className="neural-connection" d="M 70 100 Q 80 100 90 100" stroke="#00F0FF" strokeWidth="1.5" fill="none" strokeOpacity="0.7" />
        <path className="neural-connection" d="M 75 115 Q 85 110 90 100" stroke="#00F0FF" strokeWidth="1.5" fill="none" strokeOpacity="0.7" />
        <path className="neural-connection" d="M 85 75 Q 90 85 95 95" stroke="#00F0FF" strokeWidth="1.5" fill="none" strokeOpacity="0.7" />
        <path className="neural-connection" d="M 85 125 Q 90 115 95 105" stroke="#00F0FF" strokeWidth="1.5" fill="none" strokeOpacity="0.7" />
        
        {/* Right hemisphere connections */}
        <path className="neural-connection" d="M 125 85 Q 115 90 110 100" stroke="#00F0FF" strokeWidth="1.5" fill="none" strokeOpacity="0.7" />
        <path className="neural-connection" d="M 130 100 Q 120 100 110 100" stroke="#00F0FF" strokeWidth="1.5" fill="none" strokeOpacity="0.7" />
        <path className="neural-connection" d="M 125 115 Q 115 110 110 100" stroke="#00F0FF" strokeWidth="1.5" fill="none" strokeOpacity="0.7" />
        <path className="neural-connection" d="M 115 75 Q 110 85 105 95" stroke="#00F0FF" strokeWidth="1.5" fill="none" strokeOpacity="0.7" />
        <path className="neural-connection" d="M 115 125 Q 110 115 105 105" stroke="#00F0FF" strokeWidth="1.5" fill="none" strokeOpacity="0.7" />
        
        {/* Cross connections */}
        <path className="neural-connection" d="M 90 100 Q 100 95 110 100" stroke="#FFB800" strokeWidth="1.5" fill="none" strokeOpacity="0.6" />
        <path className="neural-connection" d="M 95 90 Q 100 100 105 110" stroke="#FFB800" strokeWidth="1.5" fill="none" strokeOpacity="0.6" />
      </g>

      {/* Neural nodes */}
      <g className="neural-nodes">
        {/* Left hemisphere nodes */}
        <circle className="neural-node" cx="75" cy="85" r="4" fill="url(#nodeGradient)" />
        <circle className="neural-node" cx="70" cy="100" r="4" fill="url(#nodeGradient)" />
        <circle className="neural-node" cx="75" cy="115" r="4" fill="url(#nodeGradient)" />
        <circle className="neural-node" cx="85" cy="75" r="3.5" fill="url(#nodeGradient)" />
        <circle className="neural-node" cx="85" cy="125" r="3.5" fill="url(#nodeGradient)" />
        
        {/* Right hemisphere nodes */}
        <circle className="neural-node" cx="125" cy="85" r="4" fill="url(#nodeGradient)" />
        <circle className="neural-node" cx="130" cy="100" r="4" fill="url(#nodeGradient)" />
        <circle className="neural-node" cx="125" cy="115" r="4" fill="url(#nodeGradient)" />
        <circle className="neural-node" cx="115" cy="75" r="3.5" fill="url(#nodeGradient)" />
        <circle className="neural-node" cx="115" cy="125" r="3.5" fill="url(#nodeGradient)" />
        
        {/* Central nodes */}
        <circle className="neural-node" cx="90" cy="100" r="5" fill="#FFB800" />
        <circle className="neural-node" cx="110" cy="100" r="5" fill="#FFB800" />
        <circle className="neural-node" cx="100" cy="90" r="4.5" fill="#00F0FF" />
        <circle className="neural-node" cx="100" cy="110" r="4.5" fill="#00F0FF" />
        <circle className="neural-node" cx="100" cy="100" r="6" fill="url(#nodeGradient)" stroke="#FFB800" strokeWidth="1" />
      </g>

      {/* Center glow */}
      <circle cx="100" cy="100" r="8" fill="#00F0FF" opacity="0.3">
        <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" />
      </circle>

      <style>{`
        @keyframes pulse-ray {
          0%, 100% { 
            stroke-opacity: 0.6;
            transform: scale(1);
          }
          50% { 
            stroke-opacity: 1;
            transform: scale(1.05);
          }
        }
        @keyframes pulse-node {
          0%, 100% { 
            r: 4;
            filter: drop-shadow(0 0 3px rgba(0, 240, 255, 0.5));
          }
          50% { 
            r: 5;
            filter: drop-shadow(0 0 8px rgba(0, 240, 255, 0.9));
          }
        }
        @keyframes pulse-connection {
          0%, 100% { 
            stroke-opacity: 0.5;
            stroke-width: 1.5;
          }
          50% { 
            stroke-opacity: 1;
            stroke-width: 2;
          }
        }
      `}</style>
    </svg>
  );
}

export default NeuralSun;
