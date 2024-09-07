// AuthContext.js
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // To store the authenticated user
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user session exists in local storage
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const signup = (email, password) => {
    // Check if the user already exists in local storage
    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (!existingUser) {
      const userData = { email, password };
      setUser(userData);
      console.log(userData);
      setIsAuthenticated(true);
      localStorage.setItem("user", JSON.stringify(userData)); // Save session in local storage
    } else {
      // Handle the case where a user already exists
      console.log("User already exists");
    }
  };

  const login = (email, password) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {
      console.log("this", savedUser.email, savedUser.password);
      setUser(savedUser);
      setIsAuthenticated(true);
      return true;
    } else {
      // Handle invalid login
      console.log("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signup, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
