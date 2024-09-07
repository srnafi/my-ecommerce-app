import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Heading, Text } from "../components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OrderDetails from "../components/OrderDetails";
import { CartContext } from "context/CartContext";

export default function OrderDetailsPage() {
  const { cart } = useContext(CartContext); // Access the cart context

  // Calculate subtotal and total
  const subtotal = cart.reduce((total, item) => {
    const itemTotal = item.price * item.quantity;
    console.log(
      `Item: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}, Item Total: ${itemTotal}`
    );
    return total + itemTotal;
  }, 0);

  const total = subtotal; // Update this if you have additional total calculation logic

  console.log(`Subtotal: ${subtotal}`);
  console.log(`Total: ${total}`);

  return (
    <>
      <Helmet>
        <title>Order Summary - Review Your Purchase Details</title>
        <meta
          name="description"
          content="Review your order summary including items like Recliner Chair, Gaming Chair, and more. Complete your purchase with a total of €1071.00, free shipping, and estimated taxes."
        />
      </Helmet>
      <div className="bg-[#ffffff] flex w-full flex-col items-center">
        <Header />
        <div className="container-xs md:px-[1.25rem] mt-[1.13rem]">
          <div className="flex items-start md:flex-col">
            <div className="gap-[2.50rem] flex flex-1 flex-col items-start self-center md:self-stretch">
              <Heading
                size="heading2xl"
                as="h1"
                className="!text-[#1e1e1e] ml-[0.50rem] md:ml-0"
              >
                An Overview of Your Order Details
              </Heading>
              <div className="rounded-[12px] bg-[#fafafa] sm:p-[1.25rem] p-[1.50rem] w-[94%] md:w-full">
                <div className="gap-[1.50rem] flex flex-col">
                  {cart.map((item) => (
                    <OrderDetails
                      key={item.id} // Key for each item
                      product={item}
                    />
                  ))}

                  {/* Example Total Calculation */}
                  <Heading
                    size="headinglg"
                    as="h2"
                    className="!text-[#0d0d0d] ml-[38.63rem] md:ml-0"
                  >
                    €{total.toFixed(2)}
                  </Heading>
                </div>
              </div>
            </div>
            <div className="gap-[1.50rem] w-[34%] flex flex-col items-end md:w-full">
              <div className="flex justify-center self-stretch">
                <div className="gap-[2.50rem] mt-[0.50rem] w-[90%] flex flex-col md:w-full">
                  <div className="px-[0.50rem] flex">
                    <Heading
                      size="heading2xl"
                      as="h3"
                      className="!text-[#1e1e1e]"
                    >
                      Order Details
                    </Heading>
                  </div>
                  <div className="rounded-[12px] bg-[#fafafa] border-[#dedede] sm:p-[1.25rem] p-[1.50rem] gap-[1.13rem] flex flex-col border border-solid">
                    <div className="gap-[0.75rem] flex flex-col">
                      <div className="flex justify-center">
                        <Text as="p">Subtotal</Text>
                        <div className="px-[0.50rem] flex flex-1 justify-end">
                          <Text as="p" className="!font-medium">
                            €{subtotal.toFixed(2)}
                          </Text>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <Text as="p">Shipping</Text>
                        <div className="px-[0.50rem] flex flex-1 justify-end">
                          <Text as="p" className="!font-medium">
                            Free
                          </Text>
                        </div>
                      </div>
                      <div className="gap-[1.88rem] flex justify-center">
                        <div className="gap-[0.56rem] flex flex-1 items-center">
                          <Text as="p">Estimated Tax</Text>
                          <Img
                            src="images/img_!.svg"
                            alt="Tax Image"
                            className="w-[1.00rem] h-[1.00rem]"
                          />
                        </div>
                        <div className="px-[0.50rem] flex">
                          <Text as="p" className="!font-medium">
                            €0.00 {/* Placeholder for tax amount */}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#ebebeb] h-[0.06rem]" />
                    <div className="gap-[1.25rem] flex flex-wrap justify-between">
                      <Heading
                        size="headingxl"
                        as="h4"
                        className="!text-[#646464]"
                      >
                        Total
                      </Heading>
                      <Heading
                        size="headingxl"
                        as="h5"
                        className="!text-[#0d0d0d]"
                      >
                        €{total.toFixed(2)}
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                color="black_900_01"
                size="xl"
                shape="round"
                className="mb-5 !rounded-[5px]"
              >
                Go To CheckOut
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
