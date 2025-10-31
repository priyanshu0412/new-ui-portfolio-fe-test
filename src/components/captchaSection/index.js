"use client";
import React, { useEffect } from "react";

const CaptchaSection = ({ onVerify }) => {
  useEffect(() => {
    if (window.turnstile) {
      window.turnstile.render("#cf-turnstile", {
        sitekey: process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY,
        callback: (token) => {
          console.log("✅ Human verified:", token);
          onVerify && onVerify(token);
        },
        "response-field": false,
        theme: "light",
        size: "invisible", 
      });
    }
    eslint
    // eslint-disable-next-line
  }, []);

  return <div id="cf-turnstile"></div>;
};

export default CaptchaSection;
