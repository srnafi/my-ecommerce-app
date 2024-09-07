import React from "react";
import PropTypes from "prop-types";

const FloatingLabelInput = ({
  className = "",
  name = "",
  placeholder = "",
  type = "text",
  label = "",
  prefix,
  suffix,
  onChange,
  size = "h-10 px-2 text-base",
  variant = "border border-gray-300 bg-white",
  shape = "rounded-md",
  ...restProps
}) => {
  return (
    <label className={`relative flex items-center ${className}`}>
      {!!prefix && prefix}
      <input
        type={type}
        name={name}
        placeholder=" "
        onChange={onChange}
        className={`peer ${size} ${variant} ${shape} focus:outline-none`}
        {...restProps}
      />
      <span className="absolute left-2 -top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm">
        {label || placeholder}
      </span>
      {!!suffix && suffix}
    </label>
  );
};

FloatingLabelInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  size: PropTypes.string,
  variant: PropTypes.string,
  shape: PropTypes.string,
};

export { FloatingLabelInput };
