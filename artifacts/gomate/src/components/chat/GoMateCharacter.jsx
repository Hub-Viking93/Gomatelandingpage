import React, { useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

/**
 * GoMateCharacter — logo-style globe (grid + swooping plane) with a friendly face.
 * Eyes blink in sync, plane orbits roughly every 10s.
 */
const GoMateCharacter = ({ className = '' }) => {
  const stroke = '#7a9a7e';
  const bg = '#e8f0e6';
  const dark = '#1f2d20';

  const blink = useMotionValue(1);

  useEffect(() => {
    const controls = animate(blink, [1, 1, 0.08, 1, 1], {
      duration: 4.5,
      times: [0, 0.92, 0.95, 0.98, 1],
      repeat: Infinity,
      ease: 'easeInOut',
    });
    return () => controls.stop();
  }, [blink]);

  return (
    <svg viewBox="0 0 100 100" className={className}>
      {/* Soft cream-sage background disc */}
      <circle cx="50" cy="50" r="46" fill={bg} />

      {/* Globe — outer sphere outline */}
      <circle cx="50" cy="50" r="34" fill="none" stroke={stroke} strokeWidth="3.5" />

      {/* Vertical meridian (longitude) */}
      <ellipse cx="50" cy="50" rx="13" ry="34" fill="none" stroke={stroke} strokeWidth="3" />

      {/* Horizontal latitude band (equator perspective) */}
      <ellipse cx="50" cy="50" rx="34" ry="12" fill="none" stroke={stroke} strokeWidth="3" />

      {/* Lower latitude curve for added depth */}
      <path
        d="M 22 65 Q 50 75 78 65"
        fill="none"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Face plate — soft oval that masks the grid behind the face */}
      <ellipse cx="50" cy="52" rx="20" ry="18" fill={bg} />

      {/* Blush */}
      <ellipse cx="32" cy="55" rx="3" ry="1.8" fill="#e87a7a" opacity="0.4" />
      <ellipse cx="68" cy="55" rx="3" ry="1.8" fill="#e87a7a" opacity="0.4" />

      {/* Left eye (blinks) */}
      <motion.g style={{ scaleY: blink, transformOrigin: '39px 45px' }}>
        <ellipse cx="39" cy="45" rx="7.5" ry="9.6" fill="white" />
        <circle cx="39" cy="46.5" r="4.2" fill={dark} />
        <circle cx="40.2" cy="44.5" r="1.5" fill="white" />
      </motion.g>

      {/* Right eye (blinks) */}
      <motion.g style={{ scaleY: blink, transformOrigin: '61px 45px' }}>
        <ellipse cx="61" cy="45" rx="7.5" ry="9.6" fill="white" />
        <circle cx="61" cy="46.5" r="4.2" fill={dark} />
        <circle cx="62.2" cy="44.5" r="1.5" fill="white" />
      </motion.g>

      {/* Smile — bigger, sits just above the lower latitude curve */}
      <path
        d="M 36 60 Q 50 71 64 60"
        fill="none"
        stroke={dark}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Airplane — animated swoop across the globe (every ~10s) */}
      <g>
        <path
          d="
            M 14 0
            L 4 -2
            L -1 -8
            L -5 -8
            L -3 -2
            L -8 -2
            L -11 -5
            L -13 -5
            L -11 0
            L -13 5
            L -11 5
            L -8 2
            L -3 2
            L -5 8
            L -1 8
            L 4 2
            Z
          "
          fill={stroke}
        />
        <animateMotion
          id="planeFlight"
          path="M 8 72 Q 50 30 92 22"
          dur="3.2s"
          begin="1.5s; planeFlight.end+6s"
          rotate="auto"
          fill="freeze"
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.12;0.88;1"
          dur="3.2s"
          begin="1.5s; planeFlight.end+6s"
          fill="freeze"
        />
      </g>
    </svg>
  );
};

export default GoMateCharacter;
