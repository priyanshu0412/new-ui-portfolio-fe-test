"use client";
import React, { useEffect, useState } from "react";
import Icon from "../icon";
import { useSafeMediaQuery } from "@/hooks/useSafeMediaQuery";
import CustomNavbar from "../coustomNavbar";
import { FetchApi } from "@/utilities/fetchApi";
import ProjectSectionCard from "../recentProjectSection/projectSectionCard";

// ------------------------------------------------------

const ViewAllProjectComponent = () => {
    const coustomXL = useSafeMediaQuery("(min-width:1364px)");
    const [SampleProjectsData, setSampleProjectsData] = useState([]);
    const [AllProjectsData, setAllProjectsData] = useState([]);
    const [filter, setFilter] = useState("All");

    const FetchFeaturedProject = async () => {
        const res = await FetchApi({ url: "/project?featured=true", method: "GET" });
        if (res.success) setSampleProjectsData(res?.data?.projects || []);
    };

    const FetchAllProjects = async () => {
        const res = await FetchApi({ url: "/project", method: "GET" });
        if (res.success) setAllProjectsData(res?.data?.projects || []);
    };

    const FetchFilteredProjects = async (category) => {
        if (category === "All") {
            FetchAllProjects();
            return;
        }
        const res = await FetchApi({
            url: `/project?category=${category}`,
            method: "GET",
        });
        if (res.success) setAllProjectsData(res?.data?.projects || []);
    };

    useEffect(() => {
        FetchFeaturedProject();
        FetchAllProjects();
    }, []);

    const handleFilterClick = (category) => {
        setFilter(category);
        FetchFilteredProjects(category);
    };

    return (
        <div className="w-full dark:bg-[#020817]">
            {/* Navbar */}
            <CustomNavbar path={"/"} title="All Projects" subTitleBtn="Home" />

            <div className="w-fill flex justify-center items-center pt-12">
                <div
                    className={`max-w-[1300px] h-full flex-col w-full gap-x-4 flex justify-center items-start ${coustomXL ? "px-0" : "px-8"
                        }`}
                >
                    {/* search and filter */}
                    <div className="w-full items-start gap-y-4 lg:gap-y-0 flex-col lg:flex-row flex justify-between lg:items-center">
                        <div className="flex shadow justify-center items-center gap-x-4 w-full lg:w-[75%] border-[1px] rounded-xl dark:border-[#1e293b] border-[#e2e8f0] py-2 px-3 focus-within:border-primary dark:focus-within:border-white transition-all duration-200">
                            <Icon className="text-[#64748b]" icon="iconoir:search" />
                            <input
                                type="text"
                                className="w-full md:text-sm focus:outline-none border-none bg-transparent"
                                placeholder="Search Projects..."
                            />
                        </div>

                        {/* 🔹 Filter Buttons */}
                        <div className="flex justify-between lg:justify-evenly items-center w-full lg:w-[30%]">
                            {["All", "Fullstack", "Frontend", "Backend"].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => handleFilterClick(item)}
                                    className={`shadow font-medium text-xs px-2 lg:px-3 py-2 rounded-md border-[1px] transition-all duration-200 ${filter === item
                                        ? "bg-primary text-white border-primary"
                                        : "bg-white text-black dark:bg-[#020817] dark:text-white dark:border-[#1e293b] hover:bg-[#f1f5f9] dark:hover:bg-[#1e293b]"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <p className="pt-8 text-[#64748b]">
                        Showing {AllProjectsData.length} projects
                    </p>

                    {/* 🔹 Featured Projects — hide when filter active */}
                    {filter === "All" && (
                        <div className="w-full flex flex-col pt-10 gap-y-4">
                            <p className="text-2xl font-semibold">Featured Projects</p>
                            <div className="w-full pt-4 pb-8 gap-6 flex flex-wrap items-center justify-center">
                                {SampleProjectsData.map((ele, index) => (
                                    <ProjectSectionCard ele={ele} key={index} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 🔹 All / Filtered Projects */}
                    <div className="w-full flex flex-col pt-10 gap-y-4">
                        <p className="text-2xl font-semibold">
                            {filter === "All"
                                ? "All Projects"
                                : `All ${filter} Projects`}
                        </p>
                        <div className="w-full pt-4 pb-8 gap-6 flex flex-wrap items-center justify-center">
                            {AllProjectsData.map((ele, index) => (
                                <ProjectSectionCard ele={ele} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewAllProjectComponent;
