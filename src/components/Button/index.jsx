/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[5px]",
};

const variants = {
  fill: {
    indigo_A400: "bg-indigo-A400 shadow-xs text-white-A700",
    blue_gray_200: "bg-blue_gray-200 shadow-xs text-black-900",
    white_A700: "bg-white-A700",
  },
};

const sizes = {
  md: "h-[48px] px-[35px] text-2xl",
  sm: "h-[26px] px-[19px] text-xs",
  xs: "h-[26px] px-[35px] text-base",
  lg: "h-[48px] px-[5px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "lg",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${
        (shape && shapes[shape]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
        {!!leftIcon && leftIcon}
        {children}
        {!!rightIcon && rightIcon}
    </button>
  );
};

Button.PropTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["cicle", "round"]),
    size: PropTypes.oneOf(["md", "sm", "xs", "lg"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["indigo_A400", "blue_gray_200", "white_A700"])
};

export { Button };
