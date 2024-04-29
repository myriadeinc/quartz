import React from "react";

interface colorProps {
  rectangleColor: string;
  pathColor: string;
}

const MCIcon = ({ rectangleColor, pathColor }: colorProps) => {
  return (
    <svg
      width="45"
      height="44"
      viewBox="0 0 45 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2857_64720)">
        <path
          d="M40.297 20.3798C40.0135 20.025 39.7033 20.0938 39.3677 20.3474C39.0321 20.5997 38.6992 20.9033 38.3007 21.0153C38.1122 21.0692 37.8795 21.018 37.6161 20.7562C37.8956 20.3313 37.9357 20.2854 38.0734 20.0372C38.3382 19.5609 38.4893 18.6772 38.5508 17.9825C38.5989 17.4496 38.2833 16.9005 37.7338 16.8168C37.3073 16.7507 36.7497 16.8708 36.3994 17.1204C35.4821 17.7747 35.3484 18.6826 35.8498 19.8739C36.2189 20.7508 36.2082 20.7805 35.3872 21.2891C35.3484 21.1812 35.3016 21.0787 35.2749 20.9721C34.7628 18.881 33.6744 17.1231 32.1059 15.6998C30.9494 14.6488 29.7366 13.8096 28.4757 13.1675C28.6589 12.698 28.7552 12.1786 28.7458 11.6322C28.7151 9.63413 26.9942 7.97203 24.9872 8.00036C22.9669 8.03004 21.3757 9.58961 21.2781 11.5823C20.0814 11.6146 18.854 11.7711 17.5971 12.0531C17.1331 12.157 16.847 12.0949 16.4967 11.7549C14.7758 10.0847 12.1484 9.71373 9.99571 10.7863C9.06242 11.2517 8.96882 11.4392 9.02899 12.5118C9.1052 13.8501 9.57586 15.0319 10.3835 16.0343C9.82323 16.8006 9.3646 17.5858 8.74954 18.2185C8.30696 18.6719 7.68654 18.9916 7.0902 19.2344C6.7011 19.3923 6.21574 19.314 5.77316 19.3262C4.91608 19.3491 4.45344 19.7957 4.43339 20.6497C4.42269 21.0976 4.43071 21.5468 4.42938 21.9961C4.42403 24.0872 5.44824 25.3365 7.48865 25.7628C7.67451 25.8019 7.91786 25.9368 7.99006 26.0947C8.74018 27.7514 9.97565 28.9305 11.4839 29.8735C11.6698 29.9896 11.8021 30.339 11.8048 30.5818C11.8142 31.8594 11.7727 33.1384 11.7513 34.4174V34.4241C11.7446 34.8073 12.0562 35.1203 12.4359 35.1203H15.3107C15.6356 35.1203 15.9177 34.8909 15.9859 34.5712C16.1905 33.6214 16.3937 32.6824 16.6077 31.6922C19.9758 32.2898 23.3052 32.2642 26.6613 31.6368V34.4619C26.6613 34.8477 26.9728 35.1607 27.3566 35.1594C28.3434 35.1567 29.2967 35.1499 30.2501 35.1688C30.6458 35.1769 30.833 35.0299 30.9948 34.6737C32.1888 32.0456 33.3869 29.4189 34.6237 26.8111C35.1906 25.6171 35.549 24.3934 35.5423 23.0619C35.5423 22.873 35.6412 22.6342 35.7749 22.5047C36.0624 22.2308 36.4034 22.0136 36.7189 21.7775C37.9932 22.4723 38.9318 22.3172 40.0871 21.2352C40.3478 20.991 40.5818 20.736 40.297 20.3785V20.3798ZM11.4384 20.2233C10.8795 20.2571 10.3875 19.7754 10.3888 19.1953C10.3888 18.6435 10.8301 18.1808 11.3662 18.1686C11.8944 18.1565 12.3637 18.6152 12.3811 19.1602C12.3985 19.7134 11.976 20.191 11.4384 20.2233ZM19.2551 14.6825C18.9035 14.7068 18.5852 14.468 18.5077 14.1213L18.5023 14.0984C18.4074 13.668 18.7109 13.2484 19.1468 13.2201C19.9557 13.1661 20.7527 13.1486 21.5362 13.1729C21.7729 13.7746 22.1579 14.298 22.6473 14.6987C21.5442 14.6029 20.4144 14.6016 19.2538 14.6825H19.2551ZM30.1992 16.578L30.1899 16.5888C29.9679 16.8627 29.5828 16.9328 29.2793 16.7561C28.2591 16.1611 27.2122 15.7092 26.1398 15.3746C26.7455 15.1844 27.2817 14.8431 27.7069 14.3911C28.4824 14.696 29.2472 15.0616 30.004 15.4947C30.3878 15.7146 30.4787 16.234 30.1992 16.578ZM37.0973 20.0021C36.4261 19.2601 36.4876 18.2806 37.3153 17.9042C37.4075 17.8624 37.5346 17.8934 37.5346 17.9838C37.4075 18.5086 37.2444 19.395 37.096 20.0021H37.0973Z"
          fill={pathColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_2857_64720">
          <rect
            width="36"
            height="27.1698"
            fill={rectangleColor}
            transform="translate(4.42578 8)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MCIcon;