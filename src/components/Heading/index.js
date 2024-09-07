import React from "react";

const sizes = {
  textxs: "text-[0.69rem] font-medium",
  texts: "text-[0.75rem] font-medium",
  textlg: "text-[1.00rem] font-medium",
  textxl: "text-[1.13rem] font-medium",
  text3xl: "text-[1.38rem] font-medium",
  text4xl: "text-[2.00rem] font-medium md:text-[1.88rem] sm:text-[1.75rem]",
  headingxs: "text-[0.88rem] font-bold",
  headings: "text-[1.00rem] font-bold",
  headingmd: "text-[1.13rem] font-semibold",
  headinglg: "text-[1.25rem] font-semibold",
  headingxl: "text-[1.50rem] font-semibold md:text-[1.38rem]",
  heading2xl:
    "text-[1.75rem] font-semibold md:text-[1.63rem] sm:text-[1.50rem]",
  heading3xl: "text-[2.00rem] font-bold md:text-[1.88rem] sm:text-[1.75rem]",
  heading4xl: "text-[2.50rem] font-bold md:text-[2.38rem] sm:text-[2.25rem]",
};

const Heading = ({
  children,
  className = "",
  size = "headingmd",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={`text-[#81859f] font-[Barlow] ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
