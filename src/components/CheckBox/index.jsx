import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  outline: { gray_300: "border border-gray-300 border-solid text-white-A700" },
};
const shapes = { square: "rounded-none" };
const sizes = { xs: "pb-px pl-px pt-[3px]" };

const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "",
      className = "",
      name = "",
      children,
      label = "",
      errors = [],
      shape = "square",
      size = "xs",
      variant = "outline",
      color = "gray_300",
      id = "checkbox_id",
      onChange,
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            {...restProps}
            id={id}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  },
);

CheckBox.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["gray_300"]),
};

export { CheckBox };
