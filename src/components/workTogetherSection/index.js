"use client";
import React, { useEffect, useState } from "react";
import Icon from "../icon";
import ContactForm from "../contactForm";
import { FetchApi } from "@/utilities/fetchApi";
import Link from "next/link";

// -----------------------------------------

const WorkTogetherSection = () => {

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

    console.log("footerContent?.followMeLinks", footerContent?.followMeLinks)

    return (
        <>
            <div id="contact" className="py-28 w-full flex justify-center items-center dark:bg-[#020817] bg-white">
                <div
                    className={`max-w-[1000px] px-8 xl:px-0 w-full flex-col gap-y-20 flex justify-center items-center`}
                >
                    <div className="w-full flex flex-col justify-center items-center gap-y-12">
                        <div className="w-full flex gap-y-6 justify-center items-center flex-col">
                            <div className="text-primary py-2 px-4 w-fit rounded-full bg-primary/10 border border-primary/20 text-sm font-medium flex gap-2 items-center">
                                <Icon icon={"material-symbols:mail-outline"} />
                                Get In Touch
                            </div>

                            <div className="flex flex-col justify-center items-center gap-y-6">
                                <p className="text-4xl text-center lg:text-5xl font-bold">
                                    Let&apos;s Work
                                    <span className="text-gradient pl-2">Together</span>
                                </p>
                                <p className="text-xl text-[#64748b] text-center max-w-3xl leading-relaxed">
                                    Ready to bring your ideas to life? Let&apos;s discuss your project
                                    and create something amazing together.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row w-full h-fit justify-between  items-center gap-y-12 lg:gap-y-0 lg:items-start">
                        {/* Left Content  */}
                        <div className="w-full lg:w-[48%] flex flex-col gap-y-8 justify-center ">
                            <div>
                                <p className="text-2xl font-bold">Lets Connect</p>
                            </div>
                            <div className="flex w-full flex-col gap-y-8">
                                <div className="w-full flex items-center gap-x-4 p-4 rounded-2xl hover:bg-[#f1f5f980]/50 dark:hover:bg-[#1e293b80] transition-colors">
                                    <div className="w-14 h-14 flex justify-center items-center">
                                        <Icon
                                            width={24}
                                            height={24}
                                            className={"text-blue-500"}
                                            icon={"material-symbols:mail-outline-rounded"}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-lg">Email</p>
                                        <p className="text-[#64748b]">{footerContent?.email}</p>
                                    </div>
                                </div>
                                <div className="w-full flex items-center gap-x-4 p-4 rounded-2xl hover:bg-[#f1f5f980]/50 dark:hover:bg-[#1e293b80] transition-colors">
                                    <div className="w-14 h-14 flex justify-center items-center">
                                        <Icon
                                            width={24}
                                            height={24}
                                            className={"text-green-500"}
                                            icon={"mdi-light:phone"}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-lg">Phone</p>
                                        <p className="text-[#64748b]">{footerContent?.phone}</p>
                                    </div>
                                </div>
                                <div className="w-full flex items-center gap-x-4 p-4 rounded-2xl hover:bg-[#f1f5f980]/50 dark:hover:bg-[#1e293b80] transition-colors">
                                    <div className="w-14 h-14 flex justify-center items-center">
                                        <Icon
                                            width={24}
                                            height={24}
                                            className={"text-purple-500"}
                                            icon={"ion:location-outline"}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-lg">Location</p>
                                        <p className="text-[#64748b]">{footerContent?.location}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-6">
                                <p className="text-lg font-semibold">Follow Me</p>
                                <div className="flex gap-x-4 justify-start items-center">
                                    {
                                        footerContent?.followMeLinks.map((ele, index) => {
                                            return (
                                                <Link
                                                    key={index}
                                                    href={ele?.url}
                                                    className="flex justify-center shadow-sm rounded-full text-sm font-medium px-4 py-2 bg-white border-[1px] dark:bg-[#020817] dark:border-[#1e293b] dark:hover:bg-[#1e293b] border-[#e2e8f0] items-center gap-x-2 hover:bg-[#f1f5f9]"
                                                >
                                                    <Icon icon={ele?.icon} />
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        {/* Right Content  */}
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkTogetherSection;
