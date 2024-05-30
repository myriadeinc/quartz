import React from "react";

type Props = {};

export const AddIcon = (props: Props) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="22" cy="22" r="12" fill="#FF7933" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 15C22.5523 15 23 15.4477 23 16L23 28C23 28.5523 22.5523 29 22 29C21.4477 29 21 28.5523 21 28L21 16C21 15.4477 21.4477 15 22 15Z"
        fill="#101F45"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 22C15 21.4477 15.4477 21 16 21L28 21C28.5523 21 29 21.4477 29 22C29 22.5523 28.5523 23 28 23L16 23C15.4477 23 15 22.5523 15 22Z"
        fill="#101F45"
      />
    </svg>
  );
};
