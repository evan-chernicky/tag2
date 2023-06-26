import React from "react";

function Clock() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="57.391"
      height="69.28"
      viewBox="0 0 57.391 69.28"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.456"
          x2="0.742"
          y1="0.062"
          y2="1.033"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#683d8c"></stop>
          <stop offset="1" stopColor="#341f46"></stop>
        </linearGradient>
        <clipPath id="clip-path">
          <path
            fill="url(#linear-gradient)"
            d="M0 0H57.391V69.28H0z"
            data-name="Rectangle 6"
          ></path>
        </clipPath>
      </defs>
      <g
        fill="url(#linear-gradient)"
        clipPath="url(#clip-path)"
        data-name="Group 6"
      >
        <path
          d="M0 194.723A28.7 28.7 0 1128.706 223.4 28.724 28.724 0 010 194.723m27.55-26.4a26.533 26.533 0 00-16.741 6.968 3.339 3.339 0 01.344.259c.661.654 1.323 1.308 1.973 1.973a1.135 1.135 0 01.209 1.352 1.084 1.084 0 01-1.236.566 1.567 1.567 0 01-.661-.387c-.737-.707-1.452-1.438-2.2-2.186a26.448 26.448 0 00-6.928 16.721h.432c.894 0 1.789-.017 2.683.01a1.707 1.707 0 01.8.224 1.061 1.061 0 01.429 1.225 1.127 1.127 0 01-1.125.825c-.93.013-1.86 0-2.79 0h-.43a26.446 26.446 0 006.929 16.68c.766-.769 1.493-1.508 2.231-2.236a1.136 1.136 0 011.661-.045 1.149 1.149 0 01-.044 1.662q-.862.883-1.747 1.744a5.488 5.488 0 01-.563.422 26.568 26.568 0 0016.771 7v-.423c0-.93-.006-1.86 0-2.79a1.145 1.145 0 112.286.01c.005.93 0 1.86 0 2.79v.415a26.465 26.465 0 0016.71-6.941c-.767-.761-1.5-1.48-2.22-2.206a1.146 1.146 0 111.624-1.607c.661.655 1.316 1.315 1.975 1.972.072.072.153.134.247.216a26.455 26.455 0 006.914-16.636c-.169-.007-.3-.018-.424-.018-.871 0-1.741.005-2.612-.006a1.8 1.8 0 01-.627-.1 1.116 1.116 0 01-.685-1.212 1.1 1.1 0 011.048-.955c.953-.026 1.908-.012 2.862-.015h.444a26.508 26.508 0 00-6.968-16.754 4.562 4.562 0 01-.286.361c-.647.652-1.292 1.305-1.949 1.946a1.159 1.159 0 01-1.321.227 1.068 1.068 0 01-.615-1.145 1.665 1.665 0 01.4-.766c.7-.742 1.442-1.452 2.193-2.2a26.433 26.433 0 00-16.708-6.929v.411c0 .93.008 1.86 0 2.79a1.133 1.133 0 01-1.316 1.122 1.158 1.158 0 01-.968-1.194c-.007-1.023 0-2.046 0-3.132"
          data-name="Path 16"
          transform="translate(0 -154.125)"
        ></path>
        <path
          d="M342.225 9.059a4.529 4.529 0 114.508-4.554 4.545 4.545 0 01-4.508 4.554m0-2.312a2.222 2.222 0 002.22-2.234 2.241 2.241 0 10-4.481.043 2.213 2.213 0 002.261 2.19"
          data-name="Path 17"
          transform="translate(-313.485)"
        ></path>
        <path
          d="M345.533 400.588a4.577 4.577 0 01-1.124 5.963 4.549 4.549 0 01-6.682-5.932c1.3-2.13 3.432-2.692 6.3-1.6a2.575 2.575 0 01.237-.314q3.955-3.962 7.914-7.921a1.293 1.293 0 01.964-.469 1.136 1.136 0 01.917 1.8 2.939 2.939 0 01-.338.368q-3.933 3.934-7.868 7.865a2.838 2.838 0 01-.317.24m-3.894.1a2.26 2.26 0 10-.009 4.52 2.26 2.26 0 10.009-4.52"
          data-name="Path 18"
          transform="translate(-312.936 -362.357)"
        ></path>
      </g>
    </svg>
  );
}

export default Clock;