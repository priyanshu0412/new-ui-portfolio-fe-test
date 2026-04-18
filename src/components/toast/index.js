"use client";
import React, { useEffect, useState } from "react";
import Icon from "../icon";

// ----------------------------------------

const Toast = ({ type = "success", message, onClose, duration = 4000 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    const config = {
        success: {
            icon: "mingcute:check-circle-fill",
            title: "Message Sent!",
            bgLight: "bg-white",
            bgDark: "dark:bg-[#0f172a]",
            borderLight: "border-emerald-200",
            borderDark: "dark:border-emerald-500/30",
            iconColor: "#10b981",
            accentBg: "bg-emerald-50 dark:bg-emerald-500/10",
            titleColor: "text-emerald-700 dark:text-emerald-400",
            messageColor: "text-slate-600 dark:text-slate-300",
            progressBg: "bg-emerald-500",
        },
        error: {
            icon: "mingcute:close-circle-fill",
            title: "Failed to Send",
            bgLight: "bg-white",
            bgDark: "dark:bg-[#0f172a]",
            borderLight: "border-red-200",
            borderDark: "dark:border-red-500/30",
            iconColor: "#ef4444",
            accentBg: "bg-red-50 dark:bg-red-500/10",
            titleColor: "text-red-700 dark:text-red-400",
            messageColor: "text-slate-600 dark:text-slate-300",
            progressBg: "bg-red-500",
        },
    };

    const c = config[type] || config.success;

    useEffect(() => {
        // Trigger enter animation
        const enterTimer = setTimeout(() => setIsVisible(true), 10);

        // Auto dismiss
        const dismissTimer = setTimeout(() => {
            handleClose();
        }, duration);

        return () => {
            clearTimeout(enterTimer);
            clearTimeout(dismissTimer);
        };
    }, [duration]);

    const handleClose = () => {
        setIsExiting(true);
        setTimeout(() => {
            onClose?.();
        }, 300);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999]" style={{ pointerEvents: "auto" }}>
            <div
                className={`
                    ${c.bgLight} ${c.bgDark}
                    border ${c.borderLight} ${c.borderDark}
                    rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/40
                    w-[360px] max-w-[calc(100vw-48px)]
                    overflow-hidden
                    transition-all duration-300 ease-out
                    ${isVisible && !isExiting
                        ? "translate-x-0 opacity-100 scale-100"
                        : "translate-x-[120%] opacity-0 scale-95"
                    }
                `}
            >
                {/* Content */}
                <div className="flex items-start gap-3 p-4">
                    {/* Icon with accent background */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${c.accentBg} flex items-center justify-center`}>
                        <Icon
                            icon={c.icon}
                            height={22}
                            width={22}
                            color={c.iconColor}
                        />
                    </div>

                    {/* Text content */}
                    <div className="flex-1 min-w-0 pt-0.5">
                        <p className={`text-sm font-semibold ${c.titleColor}`}>
                            {c.title}
                        </p>
                        <p className={`text-xs mt-1 ${c.messageColor} leading-relaxed`}>
                            {message}
                        </p>
                    </div>

                    {/* Close button */}
                    <button
                        onClick={handleClose}
                        className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center
                            text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300
                            hover:bg-slate-100 dark:hover:bg-slate-800
                            transition-all duration-200"
                    >
                        <Icon icon="mingcute:close-line" height={16} width={16} />
                    </button>
                </div>

                {/* Progress bar */}
                <div className="h-[3px] w-full bg-slate-100 dark:bg-slate-800">
                    <div
                        className={`h-full ${c.progressBg} rounded-full`}
                        style={{
                            animation: `toast-progress ${duration}ms linear forwards`,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Toast;
