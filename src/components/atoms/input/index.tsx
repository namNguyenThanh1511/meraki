import { Input, InputProps } from "antd";
import "./index.scss";
import { CSSProperties } from "react";

interface InputComponentProps extends InputProps {
  className?: string;
  bgColor?: number | string | undefined;
  width?: number | string | undefined;
  height?: number | string | undefined;
  shape?: "round" | "primary" | "square";
  borderColor?: string;
  onInnerButtonTxt?: string;
}

// Component chính
function InputComponent({
  className,
  bgColor,
  shape = "primary",
  width,
  height,
  borderColor,
  ...rest
}: InputComponentProps) {
  return (
    <Input
      className={`input-fodoshi ${className}`}
      {...rest}
      style={
        {
          "--bg-color": bgColor,
          "--border-radius": shape === "primary" ? "6px" : shape === "round" ? "15px" : "0px",
          "--width": width,
          "--height": height,
          "--border-color": borderColor,
        } as CSSProperties
      }
    />
  );
}

// Thêm thuộc tính Password
InputComponent.Password = ({
  className,
  bgColor,
  width,
  height,
  shape = "primary",
  ...rest
}: InputComponentProps) => (
  <Input.Password
    className={`input-fodoshi ${className}`}
    {...rest}
    style={
      {
        "--bg-color": bgColor,
        "--border-radius": shape === "primary" ? "6px" : "15px",
        "--width": width,
        "--height": height,
      } as CSSProperties
    }
  />
);

export default InputComponent;
