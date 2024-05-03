interface startIconProps {
  rectangleColor: string;
  pathColor: string;
}
export const StartIcon = ({ rectangleColor, pathColor }: startIconProps) => {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.748 22.3576L16.9361 16.0578C16.5403 15.827 16.0449 16.1155 16.0449 16.5772V29.1767C16.0449 29.6384 16.5403 29.927 16.9361 29.6961L27.748 23.3964C28.1439 23.1655 28.1439 22.5884 27.748 22.3576Z"
        fill={pathColor}
      />
    </svg>
  );
};
