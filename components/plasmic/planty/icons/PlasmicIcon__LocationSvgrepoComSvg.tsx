/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LocationSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LocationSvgrepoComSvgIcon(
  props: LocationSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 368.666 368.666"}
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
          "M184.333 0C102.01 0 35.036 66.974 35.036 149.297c0 33.969 11.132 65.96 32.193 92.515 27.27 34.383 106.572 116.021 109.934 119.479l7.169 7.375 7.17-7.374c3.364-3.46 82.69-85.116 109.964-119.51 21.042-26.534 32.164-58.514 32.164-92.485C333.63 66.974 266.656 0 184.333 0zm101.462 229.355c-21.956 27.687-80.92 89.278-101.462 110.581-20.54-21.302-79.483-82.875-101.434-110.552-18.228-22.984-27.863-50.677-27.863-80.087C55.036 78.002 113.038 20 184.333 20c71.294 0 129.297 58.002 129.296 129.297 0 29.412-9.625 57.096-27.834 80.058z"
        }
      ></path>

      <path
        d={
          "M184.333 59.265c-48.73 0-88.374 39.644-88.374 88.374s39.645 88.374 88.374 88.374 88.374-39.645 88.374-88.374-39.644-88.374-88.374-88.374zm0 156.748c-37.702 0-68.374-30.673-68.374-68.374 0-37.702 30.673-68.374 68.374-68.374s68.373 30.673 68.374 68.374c0 37.702-30.672 68.374-68.374 68.374z"
        }
      ></path>
    </svg>
  );
}

export default LocationSvgrepoComSvgIcon;
/* prettier-ignore-end */
