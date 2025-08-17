import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const OtpPage = () => {
  const { verifyOtp, user } = useAuth();
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState(user?.email || "");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await verifyOtp(email, otp);
    if (success) navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
      <button type="submit">Verify OTP</button>
    </form>
  );
};

export default OtpPage;
