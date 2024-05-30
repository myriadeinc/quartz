interface colorProps {
  rectangleColor: string;
  pathColor: string;
}

const MoneroIcon = ({ rectangleColor, pathColor }: colorProps) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="44" height="44" fill="#0F141F" />
      <g clip-path="url(#clip0_2623_79014)">
        <path
          d="M22.0001 8C14.2705 8 7.99218 14.2766 8.00196 21.9981C8.00412 23.5431 8.25018 25.0291 8.71276 26.4192H12.9012V14.643L22.0003 23.7408L31.0991 14.643V26.4192H35.288C35.7514 25.0291 35.9965 23.5431 35.9988 21.9981C36.0123 14.2684 29.7303 8.00196 22.0001 8.00196V8Z"
          fill="#EAEAEA"
        />
        <path
          d="M19.9066 25.8322L15.9358 21.8615V29.2718H12.8999L10.0352 29.2722C12.4925 33.303 16.9334 35.9996 21.9992 35.9996C27.065 35.9996 31.5061 33.3024 33.9636 29.2714H31.0977L28.3822 29.2716H28.0616V21.8613L24.0903 25.832L21.9986 27.9236L19.9068 25.832H19.9066V25.8322Z"
          fill={pathColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_2623_79014">
          <rect
            width="28"
            height="28"
            fill={rectangleColor}
            transform="translate(8 8)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MoneroIcon;
