"use client";
import React, { useEffect, useState } from "react";
import Icon from "../icon";
import { useSafeMediaQuery } from "@/hooks/useSafeMediaQuery";
import Link from "next/link";
import BlogCardReuse from "./blogCardReuse";
import { FetchApi } from "@/utilities/fetchApi";

// ----------------------------------------

const BlogSection = () => {

    const coustomXL = useSafeMediaQuery("(min-width:1364px)");
    const [SampleBlogData, setSampleBlogData] = useState([])

    const FetchBlogData = async () => {
        const res = await FetchApi({ url: "/blog?isFeatured=true&sort=desc", method: "GET" })
        if (res.success) {
            setSampleBlogData(res?.data?.data)
        }
    }

    useEffect(() => {
        FetchBlogData()
    }, [])

    return (
        <>
            <div id="blog" className="py-28 w-full flex justify-center dark:bg-[#040B1C] section-bg items-center">
                <div
                    className={`max-w-[1300px] w-full flex-col gap-y-16 flex justify-center items-center ${coustomXL ? "px-0" : "px-8"}`}
                >
                    <div className="w-full flex flex-col justify-center items-center gap-y-12">
                        <div className="w-full flex gap-y-6 justify-center items-center flex-col">
                            <div className="text-primary py-2 px-4 w-fit rounded-full bg-primary/10 border border-primary/20 text-sm font-medium flex gap-2 items-center">
                                <Icon icon={"mynaui:chat"} />
                                <p>Latest Insights</p>
                            </div>

                            <div className="flex flex-col justify-center items-center gap-y-6">
                                <p className="text-4xl text-center lg:text-5xl font-bold">
                                    Latest
                                    <span className="text-gradient pl-2">Thoughts</span>
                                </p>
                                <p className="text-xl text-[#64748b] text-center max-w-3xl leading-relaxed">
                                    Insights and tips from my development journey, sharing
                                    knowledge with the community
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full gap-6 flex flex-wrap items-center justify-center">
                        {
                            SampleBlogData.length > 0 ? (
                                SampleBlogData.slice(0, 3).map((ele, index) => (
                                    <BlogCardReuse ele={ele} key={index} />
                                ))
                            ) : (
                                <p className="text-center text-gray-500 mt-4">No blog found</p>
                            )
                        }
                    </div>

                    <div>
                        <Link className="w-fit" href={"/all-blogs"}>
                            <button className="bg-white font-semibold text-sm flex justify-center gap-x-4 rounded-full items-center py-4 px-8 border-[1px] border-[#e2e8f0] hover:bg-[#f1f5f9] dark:hover:bg-[#1e293b] dark:bg-[#020817] dark:border-[#1e293b] dark:text-white">
                                View All Posts
                                <Icon icon={"mingcute:arrow-right-line"} height={20} width={20} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSection;
