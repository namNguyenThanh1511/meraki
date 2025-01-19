import React from "react";
import "./index.scss";
export interface ButtonComponentProps {
  children?: React.ReactNode;
  bgColour?: string;
  shape?: "round" | "primary" | "square";
  width?: string | number;
  height?: string | number;
  textColour?: string;
}

export default function ButtonComponent({
  children,
  bgColour,
  shape,
  width,
  height,
  textColour,
}: ButtonComponentProps) {
  return (
    <div
      className="button-wrapper meraki-Btn"
      style={
        {
          "--bgColour": bgColour,
          "--borderRadius": shape === "primary" ? "6px" : shape === "round" ? "15px" : "0px",
          "--width": width,
          "--height": height,
          "--colour": textColour,
        } as React.CSSProperties
      }
    >
      <button className="button-custom">{children}</button>
    </div>
  );
}
