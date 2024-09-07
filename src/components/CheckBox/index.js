import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary:
    "border-[#000000] border border-solid checked:border-[#000000] checked:border-[3px] checked:border-solid checked:bg-[#000000] checked:focus:bg-[#000000] checked:focus:border-[#000000] checked:hover:bg-[#000000] checked:hover:border-[#000000]",
};

const sizes = {
  xs: "h-[0.63rem] w-[0.63rem] rounded-sm",
};

const CheckBox = React.forwardRef(
  (
    {
      className = "",
      name,
      label,
      id = "checkbox_id",
      checked = false,
      onChange,
      variant = "primary",
      size = "xs",
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e); // Pass the event object to the onChange handler
    };

    return (
      <div
        className={`${className} flex items-center gap-[0.31rem] cursor-pointer`}
      >
        <input
          className={`${sizes[size] || ""} ${variants[variant] || ""}`}
          ref={ref}
          type="checkbox"
          checked={checked}
          name={name}
          onChange={handleChange}
          id={id}
          {...restProps}
        />
        {!!label && <label htmlFor={id}>{label}</label>}
      </div>
    );
  }
);

CheckBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool, // Add checked prop type
  onChange: PropTypes.func, // Ensure onChange is a function
  variant: PropTypes.oneOf(["primary"]),
  size: PropTypes.oneOf(["xs"]),
};

export { CheckBox };
