"use client";
import { useEffect, useState } from "react";
import { CaptchaSection } from "..";

const VerificationWrapperCloud = ({ children }) => {
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("verified");
    if (token) setVerified(true);
  }, []);

  const handleVerify = (token) => {
    sessionStorage.setItem("verified", token);
    setVerified(true);
  };

  if (!verified) return <CaptchaSection onVerify={handleVerify} />;

  return <>{children}</>;
};

export default VerificationWrapperCloud;
