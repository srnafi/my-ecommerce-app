// RedirectingPage.js
import React from "react";
import RedirectPage from "../components/RedirectPage";

const RedirectingPage = ({ message, redirectTo }) => {
  return <RedirectPage message={message} redirectTo={redirectTo} />;
};

export default RedirectingPage;
