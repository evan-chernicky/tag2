import React from "react";

function Bullseye() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="75.743"
      height="75.743"
      data-name="Bull's Eye"
      viewBox="0 0 75.743 75.743"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.255"
          x2="0.831"
          y1="-0.09"
          y2="1.249"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#683d8c"></stop>
          <stop offset="0.643" stopColor="#352048"></stop>
          <stop offset="1" stopColor="#341f46"></stop>
        </linearGradient>
        <clipPath id="clip-path">
          <path
            fill="url(#linear-gradient)"
            d="M0 0H75.743V75.743H0z"
            data-name="Rectangle 5"
          ></path>
        </clipPath>
      </defs>
      <g
        fill="url(#linear-gradient)"
        clipPath="url(#clip-path)"
        data-name="Group 4"
      >
        <path
          d="M47.411 33.25a14.2 14.2 0 1014.2 14.2 14.212 14.212 0 00-14.2-14.2m0 25.539a11.344 11.344 0 1111.345-11.343 11.357 11.357 0 01-11.345 11.343"
          data-name="Path 14"
          transform="translate(-9.54 -9.55)"
        ></path>
        <path
          d="M74.318 36.47h-7.47A29.05 29.05 0 0039.3 8.92V1.426a1.426 1.426 0 10-2.851 0V8.92A29.05 29.05 0 008.894 36.47H1.426a1.426 1.426 0 100 2.851h7.468a29.051 29.051 0 0027.551 27.552v7.445a1.426 1.426 0 102.851 0v-7.445a29.051 29.051 0 0027.552-27.552h7.47a1.426 1.426 0 100-2.851M37.871 64.058A26.162 26.162 0 1164.033 37.9a26.192 26.192 0 01-26.162 26.158"
          data-name="Path 15"
        ></path>
      </g>
    </svg>
  );
}

export default Bullseye;