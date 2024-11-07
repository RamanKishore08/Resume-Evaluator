import React, { useEffect, useRef } from "react";
import "./Speedometer.css";

const Speedometer = ({ score }) => {
  const needleRef = useRef(null);

  useEffect(() => {
    if (needleRef.current) {
      // Calculate angle based on score where 0 aligns left and 100 aligns right.
      const scoreAngle = (score / 100) * 180 - 90; // Adjusting by -90 to align to left edge
      needleRef.current.style.transform = `rotate(${scoreAngle}deg)`;
    }
  }, [score]);

  return (
    <div className="speedometer">
      <svg width="200" height="100" viewBox="0 0 200 100">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#ffdd57", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#28a745", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        {/* Semi-circle for background */}
        <path
          d="M 10 100 A 90 90 0 0 1 190 100"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="15"
        />
        {/* Needle */}
        <line
          ref={needleRef}
          x1="100"
          y1="100"
          x2="100"
          y2="20"
          stroke="red"
          strokeWidth="3"
          style={{
            transformOrigin: "100px 100px", /* Pivot at the base of the needle */
            transition: "transform 1s ease" /* Smooth transition for needle movement */
          }}
        />
      </svg>
      <div className="score-label">{score}/100</div>
    </div>
  );
};

export default Speedometer;
