import React from "react";

const DealerButton = ({ width, height }) => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_0_1)">
      <ellipse cx="10" cy="9.5" rx="9" ry="8.5" fill="white" />
      <path
        d="M10 18.5C15.2194 18.5 19.5 14.4971 19.5 9.5C19.5 4.5029 15.2194 0.5 10 0.5C4.78061 0.5 0.5 4.5029 0.5 9.5C0.5 14.4971 4.78061 18.5 10 18.5Z"
        stroke="#817975"
      />
    </g>
    <path
      d="M7.19873 4.228H10.3487C11.6647 4.228 12.6401 4.648 13.2747 5.488C13.9094 6.328 14.2267 7.53667 14.2267 9.114C14.2267 10.6913 13.9094 11.9 13.2747 12.74C12.6401 13.58 11.6647 14 10.3487 14H7.19873V4.228ZM10.2087 12.348C10.8341 12.348 11.2914 12.1473 11.5807 11.746C11.8701 11.3447 12.0147 10.7613 12.0147 9.996V8.218C12.0147 7.462 11.8701 6.88333 11.5807 6.482C11.2914 6.08067 10.8341 5.88 10.2087 5.88H9.27073V12.348H10.2087Z"
      fill="black"
    />
    <defs>
      <filter
        id="filter0_d_0_1"
        x="0"
        y="0"
        width="20"
        height="21"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_0_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_0_1"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default DealerButton;
