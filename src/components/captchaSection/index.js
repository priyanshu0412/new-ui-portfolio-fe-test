"use client";
import React, { useEffect } from "react";

const CaptchaGlobal = ({ onVerify }) => {
  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY;

    if (window.turnstile && siteKey) {
      window.turnstile.render("#cf-turnstile", {
        sitekey: siteKey,
        size: "invisible",
        callback: (token) => {
          console.log("✅ Human verified:", token);
          onVerify(token);
        },
      });
    }
  }, []);

  return <div id="cf-turnstile"></div>;
};

export default CaptchaGlobal;
