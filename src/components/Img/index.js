import React from "react";

const Img = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  href = "", // Add href prop for link
  ...restProps
}) => {
  const imgElement = (
    <img
      className={className}
      src={src}
      alt={alt}
      {...restProps}
      loading={"lazy"}
    />
  );

  // If href is provided, wrap the image in an <a> tag
  return href ? (
    <a href={href} {...restProps}>
      {imgElement}
    </a>
  ) : (
    imgElement
  );
};

export { Img };
