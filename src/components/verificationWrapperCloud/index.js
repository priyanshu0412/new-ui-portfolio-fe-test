"use client"
import React, { useEffect, useState } from 'react'
import { CaptchaSection } from '..';

// ----------------------------------------

const VerificationWrapperCloud = ({ children }) => {
    const [verified, setVerified] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem("verified");
        if (token) {
            setVerified(true);
        }
    }, []);

    const handleVerify = (token) => {
        sessionStorage.setItem("verified", token);
        setVerified(true);
    };

    if (!verified) {
        return (
            <div className="flex h-screen justify-center items-center">
                <CaptchaSection onVerify={handleVerify} />
                <p className="text-gray-500 mt-4">Verifying you’re human...</p>
            </div>
        );
    }

    return <>{children}</>;
}

export default VerificationWrapperCloud
