import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Heading,
  Button,
  Img,
  Text,
  CheckBox,
  FloatingLabelInput,
} from "../components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Adjust import path

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Use useContext to access AuthContext

  const handleSignInClick = () => {
    if (login(email, password)) {
      navigate("/store"); // Redirect to the store page on successful login
    } else {
      setErrorMessage("Invalid email or password"); // Set error message for failed login
      console.log("Invalid email or password");
      alert("Invalid email or password"); // Provide feedback for failed login
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - Access Your FurniFlex Account</title>
        <meta
          name="description"
          content="Welcome back to FurniFlex! Enter your credentials to access your account and continue enjoying our curated collection of quality products. Sign in now."
        />
      </Helmet>
      <div className="flex w-full items-center bg-[#ffffff] md:flex-col">
        <div className="bg-[#fafafa] border-[#f5f5f5] md:px-[1.25rem] m-[10rem] p-[1.13rem] gap-[0.75rem] w-[40%] flex flex-col rounded-lg border border-solid md:w-full">
          <div className="w-[88%] rounded-lg border border-solid border-[#f5f5f5] bg-[#fafafa] p-[1.50rem] md:w-full sm:p-[1.25rem]">
            <div className="mb-[2.13rem] flex flex-col gap-[0.75rem]">
              <div className="flex flex-col gap-[0.88rem]">
                <div className="py-[1.50rem] sm:py-[1.25rem]">
                  <div className="flex flex-col items-start">
                    <Heading size="text4xl" as="h1" className="!text-[#000000]">
                      Welcome Back!
                    </Heading>
                    <Heading
                      size="textlg"
                      as="h2"
                      className="relative mt-[-0.25rem] !text-[#707070]"
                    >
                      Enter your Credentials to access your account
                    </Heading>
                  </div>
                </div>
                <FloatingLabelInput
                  type="email"
                  name="Email Field"
                  placeholder="Email address"
                  floating="contained"
                  className="rounded-[5px] bg-[#ffffff] border-[#dedede] text-[0.88rem] text-[#000000] px-[0.63rem] h-[3.25rem] w-full border border-solid sm:w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <div className="flex flex-col items-end gap-[0.50rem]">
                  <FloatingLabelInput
                    type="password"
                    name="Password Field"
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
                  <a href="#">
                    <Text
                      size="textmd"
                      as="p"
                      className="!font-medium !text-[#1e99f5]"
                    >
                      Forgot Password
                    </Text>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-[0.88rem]">
                <CheckBox
                  name="Terms Checkbox"
                  label="I agree to the Terms & Policy"
                  id="TermsCheckbox"
                  className="gap-[0.25rem] font-['Poppins'] text-[0.88rem] font-medium text-[#000000]"
                />
                <Button
                  color="black_900_01"
                  size="xl"
                  shape="round"
                  className="self-stretch font-semibold capitalize"
                  onClick={handleSignInClick} // Add onClick handler
                >
                  Sign In
                </Button>
                {errorMessage && (
                  <Text
                    size="textmd"
                    as="p"
                    className="!font-medium !text-red-500"
                  >
                    {errorMessage}
                  </Text>
                )}
              </div>
              <div className="flex flex-col gap-[0.88rem]">
                <div className="mx-[1.00rem] flex flex-col items-center justify-center md:mx-0">
                  <Heading
                    size="texts"
                    as="h3"
                    className="relative z-[1] flex items-center justify-center bg-[#fafafa] px-[0.25rem] !text-[#000000]"
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
                          alt="Google Icon"
                          className="h-[1.50rem] w-[1.50rem]"
                        />
                      }
                      className="w-full gap-[0.63rem] font-medium"
                    >
                      Sign in with Google
                    </Button>
                    <Button
                      color="blue_gray_100"
                      size="lg"
                      variant="outline"
                      shape="round"
                      leftIcon={
                        <Img
                          src="images/appl.svg"
                          alt="Apple Icon"
                          className="h-[1.50rem] w-[1.50rem]"
                        />
                      }
                      className="w-full gap-[0.63rem] font-medium"
                    >
                      Sign in with Apple
                    </Button>
                  </div>
                  <Text
                    size="textmd"
                    as="p"
                    className="mb-[1.13rem] !font-medium !text-[#000000]"
                  >
                    <span className="text-[#000000]">
                      Don't Have an account?{" "}
                    </span>
                    <span className="text-[#0f3cde]">
                      <Link to="/signup" className="text-inherit inline">
                        Sign Up
                      </Link>
                    </span>
                  </Text>
                </div>
              </div>
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
                className="rounded-[42px] mx-auto min-w-[5.50rem] uppercase italic"
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
                className="max-w-[400px] text-center leading-[1.19rem] !text-[#c7c4c4]"
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
