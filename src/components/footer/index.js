"use client";
import React, { useEffect, useState } from "react";
import Icon from "../icon";
import { useSafeMediaQuery } from "@/hooks/useSafeMediaQuery";
import Link from "next/link";
import { navbarData } from "@/mock/data";
import { FetchApi } from "@/utilities/fetchApi";

// ----------------------------------------

const Footer = () => {

    const coustomXL = useSafeMediaQuery("(min-width:1364px)");
    const [footerContent, setFooterContent] = useState(null)

    const FetchFooterData = async () => {
        const res = await FetchApi({ url: "/footerContent" });
        if (res.success) {
            setFooterContent(res?.data?.data[0]);
        }
    }

    useEffect(() => {
        FetchFooterData()
    }, [])

    return (
        <>
            <div className="w-full flex justify-center items-center py-16 bg-gradient-to-br from-[#f1f5f980] to-[#ffffff] dark:from-[#09173c6c] dark:to-[#020817] dark:border-[#1e293b] border-t">
                <div
                    className={`max-w-[1300px] w-full flex-col gap-y-10 flex justify-center items-center ${coustomXL ? "px-0" : "px-8"}`}
                >
                    {/* Upper  */}
                    <div className="w-full flex-col gap-y-8 md:gap-y-0 md:flex-row flex justify-between">
                        <div className="w-full md:w-[40%] flex flex-col gap-y-8">
                            <div className="flex flex-col gap-y-4">
                                <p className="text-3xl bg-gradient-to-r from-primary via-blue-600 to-cyan-600 bg-clip-text text-transparent logo-animate font-bold">
                                    Priyanshu.
                                </p>
                                <p className="text-[#64748b] leading-relaxed">
                                    {footerContent?.content || ""}
                                </p>
                            </div>

                            <div className="flex gap-x-4">
                                <div className="w-12 h-12 cursor-pointer rounded-full hover:bg-[#2563eb] flex justify-center items-center group ">
                                    <Icon
                                        icon={"line-md:github"}
                                        className={
                                            "text-black dark:text-white group-hover:text-white"
                                        }
                                    />
                                </div>

                                <div className="w-12 h-12 cursor-pointer rounded-full hover:bg-[#2563eb] flex justify-center items-center group ">
                                    <Icon
                                        icon={"meteor-icons:linkedin"}
                                        className={
                                            "text-black dark:text-white group-hover:text-white"
                                        }
                                    />
                                </div>
                                <div className="w-12 h-12 cursor-pointer rounded-full hover:bg-[#2563eb] flex justify-center items-center group ">
                                    <Icon
                                        icon={"material-symbols:mail-outline"}
                                        className={
                                            "text-black dark:text-white group-hover:text-white"
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-[60%] flex justify-between md:justify-evenly">
                            <div className="flex flex-col gap-y-6">
                                <p className="font-bold text-lg">Quick Links</p>
                                <div className="flex flex-col gap-y-4">
                                    {
                                        navbarData.map((ele, index) => {
                                            return (
                                                <Link
                                                    key={index}
                                                    href={`/#${ele?.url}`}
                                                    className="cursor-pointer hover:text-primary text-[#64748b] transition-colors">
                                                    {ele?.title}
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-6">
                                <p className="font-bold text-lg">Services</p>
                                <div className="flex [&>p]:text-[#64748b] [&>p]:cursor-pointer flex-col gap-y-4">
                                    {
                                        footerContent?.services?.map((ele, index) => {
                                            return (
                                                <p key={index} className="hover:text-primary transition-colors">
                                                    {ele}
                                                </p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full border-t-[1px] gap-y-4 md:gap-y-0 dark:border-[#1e293b] border-[#e2e8f0] pt-8 flex flex-col md:flex-row justify-between items-center md:items-end">
                        <p className="text-[#64748b] text-sm md:text-base">
                            © {new Date().getFullYear()} Priyanshu. All rights reserved.
                        </p>
                        <div className="flex gap-x-6">
                            <Link href={"/privacy-policy"} className="text-[#64748b] cursor-pointer text-sm hover:text-primary">
                                Privacy Policy
                            </Link>
                            <Link href={"/terms-service"} className="text-[#64748b] cursor-pointer text-sm hover:text-primary">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Footer;
