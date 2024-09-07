import { Heading, Button, Img } from "./..";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function OrderDetails({ product, ...props }) {
  const { incrementQuantity, decrementQuantity, removeFromCart } =
    useContext(CartContext);

  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center gap-[0.50rem] flex-1`}
    >
      <div className="flex items-start justify-center self-stretch">
        <div className="flex flex-1 items-center justify-center">
          <div className="border-[#dedede] py-[0.63rem] px-[0.50rem] gap-[0.50rem] flex flex-wrap items-center rounded-md border border-solid">
            <Button
              color="blue_gray_100"
              size="sm"
              shape="round"
              leftIcon={
                <Img
                  src="images/img_minus.svg"
                  alt="Iconsa-google 1"
                  className="h-[1.50rem] w-[1.50rem]"
                />
              }
              onClick={() => decrementQuantity(product.id)}
            ></Button>
            <Heading
              size="headinglg"
              as="h5"
              className="sm:text-[1.06rem] !text-[#0d0d0d]"
            >
              {product.quantity}
            </Heading>
            <Button
              color="blue_gray_100"
              size="sm"
              shape="round"
              leftIcon={
                <Img
                  src="images/img_plus.svg"
                  alt="Iconsa-google 1"
                  className="h-[1.50rem] w-[1.50rem]"
                />
              }
              onClick={() => incrementQuantity(product.id)}
            ></Button>
          </div>
          <div className="px-[0.75rem] flex flex-1 items-start">
            <div className="bg-[#eaeaea] border-[#dedede] w-[14%] self-center rounded-lg border border-solid">
              <Img
                src={product.image}
                alt="Product Image"
                className="h-[5.50rem] w-full rounded-lg object-cover sm:h-auto"
              />
            </div>
            <div className="py-[0.25rem] px-[1.00rem] flex flex-1">
              <Heading
                size="headings"
                as="h6"
                className="sm:text-[0.81rem] !text-[#424242]"
              >
                {product.name}
              </Heading>
            </div>
          </div>
        </div>
        <Button
          color="blue_gray_100"
          size="sm"
          shape="round"
          leftIcon={
            <Img
              src="images/img_close.svg"
              alt="Close Icon"
              className="w-[1.50rem] h-[1.50rem]"
            />
          }
          onClick={() => removeFromCart(product.id)}
        ></Button>
      </div>
      <div className="flex justify-end self-stretch">
        <Heading
          size="headinglg"
          as="h5"
          className="sm:text-[1.06rem] !text-[#0d0d0d]"
        >
          €{product.price}
        </Heading>
      </div>
    </div>
  );
}
