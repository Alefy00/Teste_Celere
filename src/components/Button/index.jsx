import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[10px]" };
const variants = {
  fill: {
    yellow_300: "bg-yellow-300 text-gray-900",
    gray_900: "bg-gray-900 text-white-A700",
    blue_gray_900: "bg-blue_gray-900",
    yellow_A700: "bg-yellow-A700 text-gray-900",
  },
  outline: {
    black_900: "border border-black-900 border-solid text-black-900",
    yellow_A700: "border border-solid border-yellow-A700 text-yellow-A700",
    gray_700: "border border-gray-700 border-solid text-white-A700",
  },
};
const sizes = {
  xs: "p-2.5",
  sm: "p-[13px]",
  md: "p-[18px]",
  lg: "p-[22px] sm:px-5",
  xl: "px-5 py-[26px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
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
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "yellow_300",
    "gray_900",
    "blue_gray_900",
    "yellow_A700",
    "black_900",
    "gray_700",
  ]),
};

export { Button };
