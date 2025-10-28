"use client"
import React from "react"
import { motion } from "framer-motion"

// --------------------------------------------

const NotFoundPage = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden px-4">

            {/* Background floating shapes */}
            <motion.div
                className="absolute w-72 h-72 bg-blue-200 rounded-full opacity-30 top-[-4rem] left-[-4rem] blur-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute w-96 h-96 bg-pink-200 rounded-full opacity-20 bottom-[-8rem] right-[-8rem] blur-2xl"
                animate={{ rotate: -360 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            />

            {/* Main content */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 text-center max-w-md"
            >
                {/* 404 with gentle hover */}
                <motion.h1
                    className="text-[9rem] sm:text-[11rem] font-extrabold bg-gradient-to-r from-primary via-blue-600 to-cyan-600 bg-clip-text text-transparent logo-animate select-none"
                    whileHover={{ rotate: [0, 5, -5, 3, 0], scale: 1.05 }}
                    transition={{ duration: 1 }}
                >
                    404
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-2xl font-semibold mt-6 text-gray-700"
                >
                    Looks like you&apos;re off the grid!
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-4 text-gray-500"
                >
                    The page you’re looking for isn’t here. Don’t worry, the cyberspace is vast.
                </motion.p>

                <motion.a
                    href="/"
                    className="inline-block mt-8 px-10 py-3 rounded-full bg-gray-900 text-white font-semibold shadow-lg hover:bg-gray-800 transition"
                >
                    Back to Home
                </motion.a>
            </motion.div>
        </div>
    )
}

export default NotFoundPage
