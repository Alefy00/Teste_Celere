import React from "react";

const sizeClasses = {
  txtRubikBold40: "font-bold font-rubik",
  txtRubikMedium14WhiteA700: "font-medium font-rubik",
  txtRubikBold20: "font-bold font-rubik",
  txtRubikRegular14Gray50001: "font-normal font-rubik",
  txtRubikBold24: "font-bold font-rubik",
  txtRubikRegular18Gray300: "font-normal font-rubik",
  txtRubikRegular18WhiteA700: "font-normal font-rubik",
  txtRubikRegular20: "font-normal font-rubik",
  txtRubikRegular44: "font-normal font-rubik",
  txtRubikMedium16: "font-medium font-rubik",
  txtRubikMedium14: "font-medium font-rubik",
  txtRubikBold32YellowA700: "font-bold font-rubik",
  txtRubikBold32: "font-bold font-rubik",
  txtRubikBold16: "font-bold font-rubik",
  txtMuliBold40: "font-bold font-mulish",
  txtRubikRegular14Gray400: "font-normal font-rubik",
  txtRubikRegular14Gray300: "font-normal font-rubik",
  txtRubikRomanBold32: "font-bold font-rubik",
  txtRubikRegular18: "font-normal font-rubik",
  txtRubikRegular18Gray900: "font-normal font-rubik",
  txtRubikRegular14: "font-normal font-rubik",
  txtRubikRegular18Gray700: "font-normal font-rubik",
  txtRubikLight16: "font-light font-rubik",
  txtRubikRomanSemiBold1306: "font-rubik font-semibold",
  txtRubikBold40WhiteA700: "font-bold font-rubik",
  txtRubikRomanSemiBold32: "font-rubik font-semibold",
  txtRubikBold16WhiteA700: "font-bold font-rubik",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
