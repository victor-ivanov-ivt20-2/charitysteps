import * as React from "react";
import Svg, { Path } from "react-native-svg";

export function ChevronLeft({
  size = 24,
  borderWidth = 1.5,
  color = "#6765F8",
}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 5l-6 7 6 7"
        stroke={color}
        strokeWidth={borderWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
