import * as React from "react";
import Svg, { G, Mask, Path } from "react-native-svg";

export function ChevronLeft({ size = 24, color = "#2563EB" }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Mask
        id="a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={24}
        height={24}
      >
        <Path fill="#D9D9D9" d="M0 0H24V24H0z" />
      </Mask>
      <G mask="url(#a)">
        <Path d="M14 18l-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6L14 18z" fill={color} />
      </G>
    </Svg>
  );
}
