"use client";
import { useEffect } from "react";

// ----------------------------------------

const CaptchaSection = ({ onVerify }) => {
  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY;

    const checkTurnstile = setInterval(() => {
      if (window.turnstile && siteKey) {
        clearInterval(checkTurnstile);

        window.turnstile.render("#cf-turnstile", {
          sitekey: siteKey,
          theme: "light",
          appearance: "always",
          callback: (token) => {
            onVerify(token);
          },
        });
      }
    }, 200);

    return () => clearInterval(checkTurnstile);
  }, [onVerify]);

  return (
    <div className="flex h-screen justify-center items-center">
      <div id="cf-turnstile"></div>
    </div>
  );
};

export default CaptchaSection;
