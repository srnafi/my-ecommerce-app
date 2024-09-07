import React from "react";
const sizes = {
  textmd: "text-[0.88rem] font-normal",
  text2xl: "text-[1.25rem] font-normal",
};
const Text = ({
  children,
  className = "",
  as,
  size = "text2xl",
  ...restProps
}) => {
  const Component = as || "p";
  return (
    <Component
      className={`text-[#646464] font-['Barlow'] ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};
export { Text };
