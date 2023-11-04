import * as React from "react";

const Iconplus = ({ size = 38, color = "#ffffff", ...props }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 20.75a8.75 8.75 0 1 1 0-17.5 8.75 8.75 0 0 1 0 17.5ZM12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
    <path d="M12 7a.625.625 0 0 1 .625.625v3.75h3.75a.624.624 0 1 1 0 1.25h-3.75v3.75a.624.624 0 1 1-1.25 0v-3.75h-3.75a.625.625 0 1 1 0-1.25h3.75v-3.75A.625.625 0 0 1 12 7Z" />
  </svg>
);

export default Iconplus;