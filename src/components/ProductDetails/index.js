import React from "react";
import { Button, Img, Text, Heading } from "./..";
import { useCart } from "../../context/CartContext"; // Ensure the correct import path

export default function ProductDetails({ product, ...props }) {
  const { addToCart } = useCart();

  // Handle button click
  const handleAddToCart = () => {
    // Ensure the product has an id, image, name, and price
    const productToAdd = {
      id: product.id, // Use the id from the passed product
      image: product.image,
      name: product.name,
      price: product.price,
    };
    addToCart(productToAdd); // Pass the complete product object with id
  };

  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full gap-[2.00rem] p-[1.00rem] border-[#f1f1f1] border border-solid rounded-[16px]`}
    >
      <div className="bg-[#f2f2f2] p-[0.88rem] flex self-stretch rounded-1g">
        <Img
          src={product.image}
          alt="Recliner Image"
          className="w-[12.75rem] h-[12.75rem] object-cover"
        />
      </div>
      <div className="gap-[1.00rem] flex flex-col items-center self-stretch">
        <div className="mx-[0.50rem] gap-[1.00rem] flex flex-col self-stretch">
          <div className="flex">
            <Heading as="h6" className="!text-[#343434]">
              {product.name}
            </Heading>
          </div>
          <div className="gap-[0.75rem] mr-[0.38rem] flex justify-center">
            <div className="gap-[0.50rem] flex flex-1 flex-col justify-center">
              <Heading as="h6" className="!text-[#343434] !font-bold">
                €{product.price}
              </Heading>
              <Heading
                size="textxl"
                as="p"
                className="!text-[#ababab] line-through"
              >
                €{product.oldPrice}
              </Heading>
            </div>
            <Heading as="h6" className="!text-[#b82e2e]">
              {product.offer}
            </Heading>
          </div>
        </div>
        <Text as="p" className="leading-[1.00rem] w-[96%] self-end">
          {product.desc}
        </Text>
      </div>
      <Button
        shape="round"
        leftIcon={
          <Img
            src="images/img_shopping_bag.svg"
            alt="Thumbs Up"
            className="mb-[0.13rem] w-[1.00rem] h-[1.13rem]"
          />
        }
        className="!rounded-[5px] gap-[0.75rem] self-stretch font-semibold"
        onClick={handleAddToCart} // Add onClick handler
      >
        Add To Cart
      </Button>
    </div>
  );
}
