import { Button, Img, Text, Heading } from "./..";
import React from "react";

export default function ProductDetails({
  productImage = "images/img_image_125_removebg_preview.png",
  productName = "Recliner Chair Wood",
  productPrice = "€299.00",
  productOldPrice = "€350.00",
  productOffer = "30% OFF",
  productDescription = "It has a backrest that can be tilted back, and often a footrest extended",
  addToCartButton = "Add to cart",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full gap-[2.00rem] p-[1.00rem] border-[#f1f1f1] border border-solid rounded-[16px]`}
    >
      <div className="bg-[#f2f2f2] p-[0.88rem] flex self-stretch rounded-1g">
        <Img
          src={productImage}
          alt="Recliner Image"
          className="w-[12.75rem] h-[12.75rem] object-cover"
        />
      </div>
      <div className="gap-[1.00rem] flex flex-col items-center self-stretch">
        <div className="mx-[0.50rem] gap-[1.00rem] flex flex-col self-stretch">
          <div className="flex">
            <Heading as="h6" className="!text-[#343434]">
              {productName}
            </Heading>
          </div>
          <div className="gap-[0.75rem] mr-[0.38rem] flex justify-center">
            <div className="gap-[0.50rem] flex flex-1 flex-wrap justify-center">
              <Heading as="h6" className="!text-[#343434] !font-bold">
                {productPrice}
              </Heading>
              <Heading
                size="textxl"
                as="p"
                className="!text-[#ababab] line-through"
              >
                {productOldPrice}
              </Heading>
            </div>
            <Heading as="h6" className="!text-[#b82e2e]">
              {productOffer}
            </Heading>
          </div>
        </div>
        <Text as="p" className="leading-[1.00rem] w-[96%] self-end">
          {productDescription}
        </Text>
      </div>
      <Button
        shape="round"
        leftIcon={
          <Img
            src="images/img_thumbsup_white_a700.svg"
            alt="Thumbs Up"
            className="mb-[0.13rem] w-[1.00rem] h-[1.13rem]"
          />
        }
        className="!rounded-[5px] gap-[0.75rem] self-stretch font-semibold"
      >
        {addToCartButton}
      </Button>
    </div>
  );
}
