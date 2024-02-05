import React from "react";

const FooterBg: React.FC = () => {
  return (
    <svg xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100%">
      <defs>
        <pattern
          id="hexagons"
          width={50}
          height={43.4}
          patternUnits="userSpaceOnUse"
          patternTransform="scale(5) translate(2)"
        >
          <polygon
            points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2"
            id="hex"
          />
          <use xlinkHref="#hex" x={25} />
          <use xlinkHref="#hex" x={-25} />
          <use xlinkHref="#hex" x={12.5} y={-21.7} />
          <use xlinkHref="#hex" x={-12.5} y={-21.7} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagons)" />
    </svg>
  );
};

export default FooterBg;
