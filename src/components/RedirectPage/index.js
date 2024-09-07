// RedirectingMessage.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectPage = ({ message, redirectTo }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(redirectTo);
    }, 3000); // Redirect after 3 seconds

    return () => clearTimeout(timer);
  }, [navigate, redirectTo]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-4">{message}</h1>
      <p className="text-lg text-center">
        If you are not redirected automatically,{" "}
        <a href={redirectTo} className="text-blue-500">
          click here
        </a>
        .
      </p>
    </div>
  );
};

export default RedirectPage;
