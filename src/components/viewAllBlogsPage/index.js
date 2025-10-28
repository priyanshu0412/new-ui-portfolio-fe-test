"use client";
import React, { useEffect, useState } from "react";
import Icon from "../icon";
import { useSafeMediaQuery } from "@/hooks/useSafeMediaQuery";
import CustomNavbar from "../coustomNavbar";
import BlogFullCardReuse from "./blogFullCardReuse";
import BlogCardReuse from "../blogSection/blogCardReuse";
import NewsLetter from "../newsLetter";
import { FetchApi } from "@/utilities/fetchApi";

// ----------------------------------------

const AllBlogPageComponent = () => {
    const coustomXL = useSafeMediaQuery("(min-width:1364px)");
    const [SampleBlogData, setSampleBlogData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [showDropdown, setShowDropdown] = useState(false);

    //Fetch categories
    const fetchCategories = async () => {
        const res = await FetchApi({ url: "/blogCategory", method: "GET" });
        if (res.success) setCategories(res?.data || []);
    };

    //Fetch blogs
    // Fetch blogs
    const fetchBlogs = async (category = "All") => {
        let url = "/blog?sort=desc";
        if (category !== "All") url += `&category=${category}`;

        const res = await FetchApi({ url, method: "GET" });

        if (res.success) {
            setSampleBlogData(res.data.data);
        } else {
            setSampleBlogData([]);
        }
    };


    //Initial load
    useEffect(() => {
        fetchCategories();
        fetchBlogs();
    }, []);

    //Handle category click
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        fetchBlogs(category);
        setShowDropdown(false);
    };

    //Split categories (main 5 + extra)
    const mainCategories = categories.slice(0, 10);
    const extraCategories = categories.slice(10);

    return (
        <div className="w-full dark:bg-[#020817]">
            <CustomNavbar path={"/"} title="Blog & Thoughts" subTitleBtn="Home" />

            <div className="w-fill flex justify-center items-center pt-12">
                <div
                    className={`max-w-[1300px] h-full flex-col w-full gap-x-4 flex justify-center items-start ${coustomXL ? "px-0" : "px-8"
                        }`}
                >
                    {/* Heading */}
                    <div className="w-full flex-col gap-y-6 flex justify-center items-center text-center pb-16">
                        <p className="text-4xl md:text-5xl font-bold text-center">
                            Development Insights &
                            <span className="text-gradient pl-2">Technical Thoughts</span>
                        </p>
                        <p className="w-full lg:w-[50%] text-lg text-[#64748b]">
                            Sharing knowledge, experiences, and insights from my journey as a
                            MERN stack developer.
                        </p>
                    </div>

                    {/* Search & Filter */}
                    <div className="w-full items-start gap-y-4 flex-col flex justify-between ">
                        {/* Search */}
                        <div className="flex shadow justify-center items-center gap-x-4 w-full  border-[1px] rounded-xl dark:border-[#1e293b] border-[#e2e8f0] py-2 px-3 focus-within:border-primary dark:focus-within:border-white transition-all duration-200">
                            <Icon className="text-[#64748b]" icon="iconoir:search" />
                            <input
                                type="text"
                                className="w-full md:text-sm focus:outline-none border-none bg-transparent"
                                placeholder="Search Blogs..."
                            />
                        </div>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap gap-3 items-center w-full relative">
                            {/* All */}
                            <button
                                onClick={() => handleCategoryChange("All")}
                                className={`shadow font-medium text-xs px-2 lg:px-3 py-2 rounded-md transition-all 
                  ${activeCategory === "All"
                                        ? "bg-primary text-white"
                                        : "bg-white dark:bg-[#020817] dark:text-white border border-[#e2e8f0] dark:border-[#1e293b] hover:bg-[#f1f5f9] dark:hover:bg-[#1e293b]"
                                    }`}
                            >
                                All
                            </button>

                            {/* Main Categories */}
                            {mainCategories.map((cat, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleCategoryChange(cat.name)}
                                    className={`shadow font-medium text-xs px-2 lg:px-3 py-2 rounded-md transition-all 
                    ${activeCategory === cat.name
                                            ? "bg-primary text-white"
                                            : "bg-white dark:bg-[#020817] dark:text-white border border-[#e2e8f0] dark:border-[#1e293b] hover:bg-[#f1f5f9] dark:hover:bg-[#1e293b]"
                                        }`}
                                >
                                    {cat.name}
                                </button>
                            ))}

                            {/* Dropdown */}
                            {extraCategories.length > 0 && (
                                <div className="relative">
                                    <button
                                        onClick={() => setShowDropdown((prev) => !prev)}
                                        className="shadow font-medium text-xs flex items-center gap-1 bg-white dark:bg-[#020817] dark:text-white border border-[#e2e8f0] dark:border-[#1e293b] px-2 lg:px-3 py-2 rounded-md"
                                    >
                                        More Categories
                                        <Icon
                                            icon={"gridicons:dropdown"}
                                            className={`${showDropdown ? "rotate-180 transition-all duration-300" : ""}`}
                                            height={20}
                                            width={20} />
                                    </button>

                                    {showDropdown && (
                                        <div className="absolute left-[-2%] mt-2 flex flex-col bg-white dark:bg-[#0f172a] rounded-md shadow-lg border border-[#e2e8f0] dark:border-[#1e293b] w-40 z-50">
                                            {extraCategories.map((cat, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleCategoryChange(cat.name)}
                                                    className="text-sm text-left px-3 py-2 hover:bg-[#f1f5f9] dark:hover:bg-[#1e293b] dark:text-[#f8fafc]"
                                                >
                                                    {cat.name}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    <p className="pt-8 text-[#64748b]">
                        Showing {SampleBlogData.length} articles
                    </p>

                    {/* Featured (only when All selected) */}
                    {activeCategory === "All" && (
                        <div className="w-full flex flex-col pt-10 gap-y-8">
                            <p className="text-2xl font-semibold">Featured Articles</p>
                            <div className="w-full gap-6 flex flex-wrap items-center justify-center">
                                {SampleBlogData.length > 0 ? (
                                    SampleBlogData.slice(0, 6).map((ele, i) => (
                                        <BlogCardReuse key={i} ele={ele} />
                                    ))
                                ) : (
                                    <p className="text-center text-gray-500 mt-4">No blog found</p>
                                )}
                            </div>
                        </div>
                    )}

                    {/*  All / Filtered Articles */}
                    <div className="w-full flex flex-col py-10 gap-y-8">
                        <p className="text-2xl font-semibold">
                            {activeCategory === "All"
                                ? "All Articles"
                                : `All ${activeCategory} Articles`}
                        </p>

                        <div className="w-full flex gap-y-12 flex-col justify-center items-center">
                            {SampleBlogData.length > 0 ? (
                                SampleBlogData.map((ele, i) => (
                                    <BlogFullCardReuse key={i} ele={ele} />
                                ))
                            ) : (
                                <p className="text-center text-gray-500 mt-4">
                                    {activeCategory === "All"
                                        ? "No blogs found."
                                        : `No blogs found with this category.`}
                                </p>
                            )}
                        </div>
                    </div>


                    {/* Newsletter */}
                    <NewsLetter />
                </div>
            </div>
        </div>
    );
};

export default AllBlogPageComponent;
