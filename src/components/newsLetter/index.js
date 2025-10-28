"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { FetchApi } from "@/utilities/fetchApi";

// -------------------------------------------

const NewsLetter = () => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const emailSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
    });

    const handleSubscribe = async () => {
        setError("");
        setSuccess("");

        try {
            await emailSchema.validate({ email });
            const res = await FetchApi({
                url: "/subscribe/subscribe",
                method: "POST",
                data: { email },
            });

            if (res.success) {
                setSuccess(res?.message || "Subscribed successfully!");
                setEmail("");
                setTimeout(() => setSuccess(""), 3000);
            } else {
                setError(res?.message || "Something went wrong.");
                setTimeout(() => setError(""), 3000);
            }
        } catch (err) {
            if (err.name === "ValidationError") {
                setError(err.message);
            } else {
                setError("Subscription failed. Try again later.");
            }
            setTimeout(() => setError(""), 3000);
        }
    };

    return (
        <>
            <div className="w-full dark:border-[#1e293b] dark:bg-[#020818] border-[#e2e8f0] border-[1px] rounded-lg shadow-md mb-20">
                <div className="py-8 px-4 md:px-0 flex justify-center items-center flex-col gap-y-6">
                    <p className="text-center text-2xl font-semibold">Stay Updated</p>
                    <p className="text-[#64748b] md:w-[50%] text-center">
                        Get the latest articles and development insights delivered to your inbox. No spam, unsubscribe at any time.
                    </p>

                    <div className="flex flex-col gap-y-2 w-full justify-center items-center">
                        <div className="flex gap-x-4 w-full justify-center items-center">
                            <input
                                className="w-full dark:border-[#1e293b] md:w-[50%] text-sm shadow-sm py-2 px-3 bg-transparent rounded-lg border-[#e2e8f0] border-[1px]"
                                placeholder="Enter your email"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleSubscribe();
                                }}
                            />
                            <button
                                className="py-2 text-sm text-white font-semibold px-3 bg-primary hover:bg-primary/60 rounded-md"
                                onClick={handleSubscribe}
                            >
                                Subscribe
                            </button>
                        </div>

                        {error && (
                            <p className="text-red-500 text-sm mt-2 text-center transition-all duration-300">
                                {error}
                            </p>
                        )}
                        {success && (
                            <p className="text-green-500 text-sm mt-2 text-center transition-all duration-300">
                                {success}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsLetter;
