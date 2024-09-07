import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Heading,
  Button,
  Img,
  Text,
  CheckBox,
  FloatingLabelInput,
} from "../components"; // Corrected import path
import { AuthContext } from "../context/AuthContext";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
export default function SignupPage() {
  const { signup } = useContext(AuthContext); // Access signup function from context
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for checkbox

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAgreed) {
      // Check if checkbox is checked
      signup(email, password);
      navigate("/store");
    } else {
      // Handle checkbox not checked
      setErrorMessage("You must agree to the terms and policy");
      console.log("You must agree to the terms and policy");
    }
  };

  return (
    <>
      <Helmet>
        <title>Signup - Create Your FurniFlex Account</title>
        <meta
          name="description"
          content="Welcome back to FurniFlex! Enter your credentials to access your account and continue enjoying our curated collection of quality products. Sign up now."
        />
      </Helmet>
      <div className="flex w-full items-center bg-[#ffffff] md:flex-col">
        <div className="bg-[#fafafa] border-[#f5f5f5] md:px-[1.25rem] m-[10rem] p-[1.13rem] gap-[0.75rem] w-[40%] flex flex-col rounded-lg border border-solid md:w-full">
          <div className="w-full justify-center rounded-lg border border-solid border-[#f5f5f5] bg-[#fafafa] p-[1.50rem] md:w-full sm:p-[1.25rem]">
            <div className="gap-[0.88rem] mt-[0.38rem] flex flex-col">
              <div className="gap-[0.38rem] flex flex-col items-center">
                <Heading size="headingxl" as="h1" className="!text-[#000000]">
                  Welcome To
                </Heading>
                <div className="flex flex-col items-center self-stretch">
                  <Heading
                    size="heading3xl"
                    as="h2"
                    className="!text-[2.50rem] !text-[#4977ee]"
                  >
                    <span className="text-[#000000]">Furni</span>
                    <span className="text-[#1e99f5]">Flex</span>
                  </Heading>
                  <Heading
                    as="h3"
                    className="relative mt-[-0.25rem] !text-[#707070]"
                  >
                    Signup For you desired products
                  </Heading>
                </div>
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex gap-[0.88rem] flex-col"
              >
                <div className="gap-[0.88rem] flex sm:flex-col">
                  <FloatingLabelInput
                    type="text"
                    name="First Name"
                    placeholder="First Name (optional)"
                    floating="contained"
                    className="rounded-[5px] bg-[#ffffff] border-[#dedede] text-[0.88rem] text-[#000000] px-[0.63rem] h-[3.25rem] w-full border border-solid sm:w-full"
                  />
                  <FloatingLabelInput
                    type="text"
                    name="Last Name"
                    placeholder="Last Name (optional)"
                    floating="contained"
                    className="rounded-[5px] bg-[#ffffff] border-[#dedede] text-[0.88rem] text-[#000000] px-[0.63rem] h-[3.25rem] w-full border border-solid sm:w-full"
                  />
                </div>
                <FloatingLabelInput
                  type="email"
                  name="Email"
                  placeholder="Email"
                  floating="contained"
                  className="rounded-[5px] bg-[#ffffff] border-[#dedede] text-[0.88rem] text-[#000000] px-[0.63rem] h-[3.25rem] w-full border border-solid sm:w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="flex flex-col items-end gap-[0.50rem]">
                  <FloatingLabelInput
                    type="password"
                    name="Password"
                    placeholder="Password"
                    floating="contained"
                    suffix={
                      <Img
                        src="images/img_tooltip.svg"
                        alt="Tooltip"
                        className="h-[3.00rem] w-[2.88rem]"
                      />
                    }
                    className="rounded-[5px] bg-[#ffffff] border-[#dedede] text-[0.88rem] text-[#000000] px-[0.63rem] h-[3.25rem] w-full border border-solid sm:w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-[0.88rem]">
                  <div className="flex items-center gap-[0.25rem]">
                    <CheckBox
                      name="Terms Checkbox"
                      label="I agree to the Terms & Policy"
                      id="TermsCheckbox"
                      className="font-['Poppins'] text-[0.88rem] font-medium text-[#000000]"
                      checked={isAgreed}
                      onChange={(e) => {
                        setIsAgreed(e.target.checked);
                        if (errorMessage) {
                          setErrorMessage(""); // Clear error message when checkbox is checked
                        }
                      }}
                    />
                  </div>
                  {errorMessage && (
                    <Text size="textsm" as="p" className="text-red-500">
                      {errorMessage}
                    </Text>
                  )}
                  <Button
                    type="submit"
                    color="black_900_01"
                    size="xl"
                    shape="round"
                    className="self-stretch font-semibold capitalize"
                  >
                    Sign Up
                  </Button>
                </div>
                <div className="flex flex-col gap-[0.88rem]">
                  <div className="mx-[1.00rem] flex flex-col items-center justify-center md:mx-0">
                    <Heading
                      size="texts"
                      as="h2"
                      className="relative z-[1] mt-3 flex items-center justify-center bg-[#fafafa] px-[0.25rem] !text-[#000000]"
                    >
                      or
                    </Heading>
                    <div className="bg-[#f0efef] mt-[-0.25rem] h-[0.13rem] relative w-full self-stretch" />
                  </div>
                  <div className="flex flex-col items-center gap-[1.13rem]">
                    <div className="flex gap-[1.00rem] self-stretch">
                      <Button
                        color="blue_gray_100"
                        size="lg"
                        variant="outline"
                        shape="round"
                        leftIcon={
                          <Img
                            src="images/gogl.svg"
                            alt="Sign up with Google"
                            className="h-[1.50rem] w-[1.50rem]"
                          />
                        }
                        className="w-full gap-[0.63rem] font-medium"
                      >
                        Sign up with Google
                      </Button>
                      <Button
                        color="blue_gray_100"
                        size="lg"
                        variant="outline"
                        shape="round"
                        leftIcon={
                          <Img
                            src="images/appl.svg"
                            alt="Sign up with Apple"
                            className="h-[1.50rem] w-[1.50rem]"
                          />
                        }
                        className="w-full gap-[0.63rem] font-medium"
                      >
                        Sign up with Apple
                      </Button>
                    </div>
                    <Text
                      size="textmd"
                      as="p"
                      className="mb-[1.13rem] !font-medium !text-[#000000]"
                    >
                      <span className="text-[#000000]">Have an account? </span>
                      <span className="text-[#0f3cde]">
                        <Link to="/Login" className="text-inherit inline">
                          Sign In
                        </Link>
                      </span>
                    </Text>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="relative h-[64.00rem] flex-1 content-center justify-center md:h-auto md:w-full md:flex-none md:self-stretch md:px-[1.25rem]">
          <img
            src="images/img_chris_lee_7011t.png"
            alt="Profile Image"
            className="m-auto h-[64.00rem] object-contain"
          />
          <div className="w-[72%] content-center absolute bottom-0 left-0 right-0 top-0 m-auto h-max">
            <div className="content-center flex flex-col mx-auto items-center md:mx-0">
              <Button
                color="blue_500"
                size="2xl"
                className="rounded-[42px]  mx-auto min-w-[5.50rem]  uppercase italic"
              >
                F
              </Button>
              <Heading size="heading4xl" as="h2" className="!text-[#ffffff]">
                <span className="text-[#ffffff]">Furni</span>
                <span className="text-[#1e99f5]">Flex</span>
              </Heading>
              <Heading
                size="textlg"
                as="h2"
                className="max-w-[400px] text-center leading-[1.19rem] !text-[#c7c4c4] "
              >
                <span>
                  Discover a seamless shopping experience with our curated
                  collection of products. From fashion to electronics, we bring
                  quality.
                </span>
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
