import { Img, Heading } from "./..";
import React, { useState, useContext } from "react";
import { CartContext } from "context/CartContext";
import { AuthContext } from "context/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Header({ ...props }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const cartSize = cart.length;
  const { logout } = useContext(AuthContext);
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
    // Perform logout actions here
    console.log("Logging out...");
    // Redirect or handle any post-logout logic
  };

  return (
    <header
      {...props}
      className={`${props.className} flex self-stretch justify-center items-center py-[2.38rem] sm:py-[1.25rem] border-b border-solid border-[#f1f1f1] bg-[#ffffff]`}
    >
      <div className="container-xs flex items-center justify-between gap-[1.25rem] md:flex-col md:px-[1.25rem]">
        <Img
          src="images/img_header_logo.png"
          alt="Header Logo"
          className="h-[2.38rem] w-[8.38rem] object-contain"
        />
        <ul className="flex flex-wrap items-center gap-[0.50rem]">
          <li>
            <a href="#" className="cursor-pointer">
              <Heading
                size="textxl"
                as="p"
                className="px-[1.25rem] py-[0.50rem] text-[#1f1f1f] hover:rounded-md hover:bg-[#f7f7f7] hover:font-semibold"
              >
                Home
              </Heading>
            </a>
          </li>
          <li>
            <a
              href="store"
              className="flex items-center justify-center rounded-md bg-[#f7f7f7]"
            >
              <Heading
                as="p"
                className="px-[1.25rem] py-[0.50rem] text-[#1f1f1f]"
              >
                Products
              </Heading>
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              <Heading
                size="textxl"
                as="p"
                className="px-[1.25rem] py-[0.50rem] text-[#1f1f1f] hover:rounded-md hover:bg-[#f7f7f7] hover:font-semibold"
              >
                Categories
              </Heading>
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              <Heading
                size="textxl"
                as="p"
                className="px-[1.25rem] py-[0.50rem] text-[#1f1f1f] hover:rounded-md hover:bg-[#f7f7f7] hover:font-semibold"
              >
                Custom
              </Heading>
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              <Heading
                size="textxl"
                as="p"
                className="px-[1.25rem] py-[0.50rem] text-[#1f1f1f] hover:rounded-md hover:bg-[#f7f7f7] hover:font-semibold"
              >
                Blog
              </Heading>
            </a>
          </li>
        </ul>
        <div className="flex w-[8%] items-center justify-center gap-[1.50rem] md:w-full">
          <div className="flex-1">
            <div className="flex items-center justify-end">
              <a href="#">
                <img
                  src="images/img_thumbs_up.svg"
                  alt="Thumbs Up Image"
                  className="mb-[0.25rem] h-[1.13rem] self-end"
                />
              </a>

              <a
                href="orderDetails"
                className="relative ml-[-1.13rem] flex flex-1 flex-col items-start gap-[0.38rem]"
              >
                <img
                  src="images/img_settings.svg"
                  alt="Settings Image"
                  className="h-[0.38rem]"
                />
                <div className="flex w-[1.00rem] flex-col items-center justify-center self-end rounded-lg bg-[#313131]">
                  <Heading
                    size="text-xs"
                    as="p"
                    className="!text-[0.69rem] !text-[#ffffff]"
                  >
                    {cartSize}
                  </Heading>
                </div>
              </a>
            </div>
          </div>
          <div className="relative">
            <a href="#" onClick={handleToggleMenu}>
              <img
                src="images/img_account.png"
                alt="Account Image"
                className="h-[2.50rem] w-[2.50rem] rounded-[20px] object-cover cursor-pointer"
              />
            </a>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg">
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
