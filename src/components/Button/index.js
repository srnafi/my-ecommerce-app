import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-md",
};

const variants = {
  fill: {
    blue_gray_100_87: "bg-[#d9d9d987]",
    white_A700: "bg-[#ffffff] text-[#212b36]",
    blue_500: "bg-[#1e99f5] text-[#000000]",
    black_900_01: "bg-[#000000] text-[#ffffff]",
    gray_900_01: "bg-[#1f1f1f] text-[#ffffff]",
  },
  outline: {
    blue_gray_100: "border-[#d9d9d9] border border-solid text-[#000000]",
  },
};

const sizes = {
  "2xl": "h-[5.25rem] px-[1.63rem] text-[2.25rem]",
  xs: "h-[2.00rem] px-[0.25rem]",
  xl: "h-[3.50rem] px-[2.13rem] text-[1.06rem]",
  lg: "h-[3.25rem] px-[2.13rem] text-[0.75rem]",
  sm: "h-[2.00rem] px-[0.75rem] text-[0.88rem]",
  md: "h-[2.63rem] px-[2.13rem] text-[1.00rem]",
};
const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "gray_900_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${
        shape && shapes[shape]
      } ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};
Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["2xl", "xs", "xl", "lg", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "blue_gray_100_87",
    "white_A700",
    "blue_500",
    "black_900_01",
    "gray_900_01",
    "blue_gray_100",
  ]),
};

export { Button };
