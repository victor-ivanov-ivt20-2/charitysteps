import type { IconProps } from "@/types/IconType";
import { type FC } from "react";

const Logo: FC<IconProps> = (props) => {
  const { width = 101, height = 76, color = "#fff" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 101 76"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M82.99.336C90.214 1.6 96.03 6.29 98.989 13.266c2.662 6.27 1.75 14.315-2.268 19.93-1.356 1.896-36.727 37.137-38.871 38.717-1.849 1.386-4.363 2.625-6.803 3.403-1.356.437-2.465.583-5.3.656-3.993.122-5.595-.121-8.8-1.385-3.87-1.531-4.51-2.09-18.412-15.871-7.149-7.097-13.508-13.587-14.1-14.413-6.088-8.41-5.003-20.1 2.514-27.391 2.663-2.552 5.694-4.278 9.342-5.323 1.677-.486 2.515-.56 5.67-.535 3.303 0 3.944.073 5.915.68 2.638.778 5.177 2.067 7.025 3.525.74.583 3.328 3.014 5.719 5.42l4.363 4.375 9.564-9.552c5.25-5.226 10.377-10.184 11.387-10.961C70.715.773 76.828-.734 82.992.336zm-7.295 5.809c-2.022.51-3.649 1.215-5.201 2.26C68.471 9.79 36.576 41.362 35.935 42.65c-1.085 2.115-1.11 5.104-.05 7.146.641 1.264 2.367 2.868 3.698 3.476.838.388 1.627.51 3.204.534 2.687 0 3.845-.534 6.434-2.965 2.563-2.43 4.067-3.087 6.605-2.94 4.215.242 7.124 3.11 7.37 7.266.099 1.629.025 2.042-.542 3.281-.591 1.361.099.705 13.68-12.784 7.888-7.826 14.716-14.656 15.16-15.215 1.01-1.19 2.39-4.107 2.834-5.93.444-1.847.395-5.153-.098-7.048-.765-2.868-2.022-5.031-4.24-7.194-2.219-2.188-4.412-3.428-7.272-4.084-1.922-.462-5.324-.462-7.024-.048z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Logo;
