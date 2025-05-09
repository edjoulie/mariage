/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LocationSvgrepoCom1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LocationSvgrepoCom1SvgIcon(
  props: LocationSvgrepoCom1SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 264.018 264.018"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M132.009 0c-42.66 0-77.366 34.706-77.366 77.366 0 11.634 2.52 22.815 7.488 33.24.1.223.205.442.317.661l58.454 113.179a12.502 12.502 0 0022.212 0l58.438-113.148c.101-.195.195-.392.285-.591 5.001-10.455 7.536-21.67 7.536-33.341C209.375 34.706 174.669 0 132.009 0zm0 117.861c-22.329 0-40.495-18.166-40.495-40.495 0-22.328 18.166-40.494 40.495-40.494s40.495 18.166 40.495 40.494c0 22.329-18.166 40.495-40.495 40.495zm29.801 131.157h-59.602a7.499 7.499 0 00-7.5 7.5c0 4.143 3.357 7.5 7.5 7.5h59.602c4.143 0 7.5-3.357 7.5-7.5a7.5 7.5 0 00-7.5-7.5z"
        }
      ></path>
    </svg>
  );
}

export default LocationSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
