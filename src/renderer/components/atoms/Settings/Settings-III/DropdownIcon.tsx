import React from "react";

type DropdownIconProps = {
  pathColor: string;
  rectangleColor: string;
};

const DropdownIcon = ({ pathColor, rectangleColor }: DropdownIconProps) => {
  return (
    <svg
      width="44"
      height="45"
      viewBox="0 0 44 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="44"
        height="44"
        transform="translate(-0.0078125 0.123047)"
        fill={rectangleColor}
      />
      <path
        d="M14.9922 20.123L21.9922 27.123L28.9922 20.123"
        stroke={pathColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DropdownIcon;
