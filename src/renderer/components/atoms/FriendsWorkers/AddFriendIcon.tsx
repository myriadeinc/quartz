import React from "react";

type AddFriendIconProps = {
  rectangleColor: string;
  pathColor: string;
};

export const AddFriendIcon = ({
  rectangleColor,
  pathColor,
}: AddFriendIconProps) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="44" height="44" fill={rectangleColor} />
      <path
        d="M27.2274 29.5137C26.4758 26.5836 24.696 24.4829 22.0901 23.0876C21.5571 22.8023 20.9839 22.5916 20.4107 22.3376C20.4899 22.2834 20.5679 22.2317 20.6447 22.1787C23.0852 20.5078 23.8025 17.2887 22.291 14.7907C20.77 12.2758 17.5342 11.3007 14.7829 12.5287C10.9408 14.2441 10.2601 19.1992 13.4971 21.8994C13.6897 22.0595 13.8989 22.2004 14.1199 22.3653C14.0324 22.3978 13.9757 22.4219 13.9178 22.4411C12.8163 22.8119 11.7941 23.3428 10.877 24.0675C8.5358 25.919 7.1838 28.3219 7.00298 31.3665C6.96871 31.9395 7.22989 32.22 7.79952 32.2224C7.97089 32.2224 8.14107 32.2224 8.31243 32.2224C14.4461 32.2224 20.5809 32.2224 26.7145 32.2224C27.2771 32.2224 27.5512 31.9563 27.4969 31.3881C27.4378 30.7597 27.3834 30.1217 27.2274 29.5137Z"
        fill={pathColor}
      />
      <path
        d="M31 16L31 22"
        stroke="#EAEAEA"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M28 19H34"
        stroke="#EAEAEA"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
