type Props = {
  rectangleColor?: string;
  pathColor?: string;
};

export const FriendsIcon = ({ rectangleColor, pathColor }: Props) => {
  return (
    <svg
      width="45"
      height="44"
      viewBox="0 0 45 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="44"
        height="44"
        transform="translate(0.574219)"
        fill={rectangleColor}
      />
      <path
        d="M29.8016 29.5137C29.05 26.5836 27.2702 24.4829 24.6643 23.0876C24.1313 22.8023 23.5581 22.5916 22.9849 22.3376C23.0641 22.2834 23.1421 22.2317 23.2189 22.1787C25.6594 20.5078 26.3767 17.2887 24.8652 14.7907C23.3442 12.2758 20.1084 11.3007 17.3571 12.5287C13.515 14.2441 12.8343 19.1992 16.0713 21.8994C16.2639 22.0595 16.4731 22.2004 16.6941 22.3653C16.6067 22.3978 16.5499 22.4219 16.492 22.4411C15.3906 22.8119 14.3683 23.3428 13.4512 24.0675C11.11 25.919 9.75802 28.3219 9.5772 31.3665C9.54293 31.9395 9.80411 32.22 10.3737 32.2224C10.5451 32.2224 10.7153 32.2224 10.8867 32.2224C17.0203 32.2224 23.1551 32.2224 29.2887 32.2224C29.8513 32.2224 30.1255 31.9563 30.0711 31.3881C30.012 30.7597 29.9576 30.1217 29.8016 29.5137Z"
        fill={pathColor}
      />
      <path
        d="M35.4062 30.1771C34.7975 27.519 33.2032 25.6759 30.8195 24.5046C30.4862 24.3408 30.1329 24.2168 29.763 24.0627C30.8053 23.3717 31.5345 22.4568 31.8252 21.2277C32.1172 19.9949 31.9174 18.8344 31.2379 17.7738C30.2239 16.192 27.7704 15.1326 26.4468 15.696C27.0684 18.0038 26.6217 20.09 25.1562 21.9656C25.2484 22.0198 25.3217 22.0631 25.395 22.1065C28.1498 23.7233 30.0277 26.0419 30.8361 29.202C31.0783 30.1518 31.2438 31.1185 31.0807 32.1273C31.1008 32.1345 31.115 32.1454 31.1292 32.1454C32.4268 32.1466 33.7256 32.1538 35.0232 32.1454C35.3754 32.143 35.6012 31.8841 35.5728 31.5194C35.5385 31.0703 35.5078 30.6153 35.4073 30.1795L35.4062 30.1771Z"
        fill={pathColor}
      />
    </svg>
  );
};
