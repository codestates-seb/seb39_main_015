export const CreateRoomCross = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_614_18)">
        <line
          x1="11.6001"
          y1="22"
          x2="11.6001"
          y2="2"
          stroke="#F58A5C"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="2"
          y1="11.6001"
          x2="22"
          y2="11.6001"
          stroke="#F58A5C"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_614_18"
          x="0"
          y="0"
          width="25"
          height="25"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="2" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_614_18"
          />
        </filter>
      </defs>
    </svg>
  );
};
