// import React, { createContext, useState, useContext } from 'react';

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const login = (username, password) => {
//     // Static credentials for demonstration
//     if (username === 'admin' && password === 'password') {
//       setIsAuthenticated(true);
//       return true;
//     }
//     return false;
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };


import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // For token check
  const [user, setUser] = useState(null);

  // Load token from localStorage on app start
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    setLoading(false);
  }, []);

  // Step 1: Login & request OTP
  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", { email, password });
      alert(res.data.message); // "OTP sent to email"
      return true;
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
      return false;
    }
  };

  // Step 2: Verify OTP & get JWT
  const verifyOtp = async (email, otp) => {
    try {
      const res = await axios.post("http://localhost:5000/api/admin/verify-otp", { email, otp });
      const { token } = res.data;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setIsAuthenticated(true);
      setUser({ email });
      return true;
    } catch (err) {
      alert(err.response?.data?.message || "OTP verification failed");
      return false;
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        loading,
        user,
        login,
        verifyOtp,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
