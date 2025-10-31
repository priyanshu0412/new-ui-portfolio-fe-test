"use client";
import React from "react";

// -----------------------------------

const CaptchaSection = () => {
    return (
        <>
        
            <div
                className="cf-challenge mt-6 flex justify-center"
                data-sitekey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY}
                data-theme="light"
                data-size="normal"
            >
            </div>
        </>
    );
};

export default CaptchaSection;
