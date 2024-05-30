import React from "react";

type DropupIconProps = {
  pathColor: string;
  rectangleColor: string;
};

const DropupIcon = ({ pathColor, rectangleColor }: DropupIconProps) => {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="44"
        height="44"
        transform="translate(0.0117188 0.115234)"
        fill={rectangleColor}
      />
      <path
        d="M15.0117 27.1152L22.0117 20.1152L29.0117 27.1152"
        stroke={pathColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DropupIcon;
