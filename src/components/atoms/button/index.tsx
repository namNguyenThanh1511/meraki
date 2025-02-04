import React from "react";
import "./index.scss";
export interface ButtonComponentProps {
  children?: React.ReactNode;
  bgColour?: string;
  shape?: "round" | "primary" | "square";
  width?: string | number;
  height?: string | number;
  textColour?: string;
  className?: string;
  borderRadius?: string;
  border?: string;
}

export default function ButtonComponent({
  children,
  bgColour,
  shape,
  width,
  height,
  textColour,
  className = "",
  borderRadius,
  border = "",
}: ButtonComponentProps) {
  return (
    <div
      className={`button-wrapper meraki-Btn ${className.length > 0 ? className : ""}`}
      style={
        {
          "--bgColour": bgColour,
          "--borderRadius": shape === "primary" ? "6px" : shape === "round" ? "15px" : "0px",
          "--width": width,
          "--height": height,
          "--colour": textColour,
          "--borderRadiusCustom": borderRadius,
          "--border": border,
        } as React.CSSProperties
      }
    >
      <button className="button-custom">{children}</button>
    </div>
  );
}
