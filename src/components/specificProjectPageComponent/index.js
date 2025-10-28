"use client"
import React, { useEffect, useState } from 'react'
import CustomNavbarBlog from '../customNavbarBlog'
import { useSafeMediaQuery } from '@/hooks/useSafeMediaQuery';
import Icon from '../icon';
import Link from 'next/link';
import Image from 'next/image';
import { FetchApi } from '@/utilities/fetchApi';
import ProjectSectionCard from '../recentProjectSection/projectSectionCard';

// --------------------------------------------

const SpecificProjectPageComponent = ({ project }) => {

    const coustomXL = useSafeMediaQuery("(min-width:1364px)");
    const [SampleProjectsData, setSampleProjectsData] = useState([]);

    const truncateDesc = (text = "", limit = 85) => {
        if (!text) return "";
        return text.length > limit ? text.substring(0, limit) + "..." : text;
    };

    const truncateHeading = (text = "", limit = 20) => {
        if (!text) return "";
        return text.length > limit ? text.substring(0, limit) + "..." : text;
    };

    const FetchFeaturedProject = async () => {
        const res = await FetchApi({ url: "/project?featured=true", method: "GET" });
        if (res.success) setSampleProjectsData(res?.data?.projects || []);
    };

    useEffect(() => {
        FetchFeaturedProject()
    }, [])

    return (
        <>

            <div className='w-full h-full dark:bg-[#020817]'>

                {/* Navbar  */}
                <CustomNavbarBlog
                    subTitleBtn={"Projects"}
                    path={"/all-projects"}
                    isBlog={false}
                    gitLink={project?.githubLink}
                    liveLink={project?.livePreviewLink}
                />

                <div className='w-full flex justify-center items-center py-10'>
                    <div className={`max-w-[1300px] gap-y-12 flex-col ${coustomXL ? "px-0" : "px-8"}  w-full h-full flex items-start justify-between`}>

                        {/* Main Upper Section  */}
                        <div className='relative flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 justify-between items-start w-full'>
                            {/* Left Part */}
                            <div className='flex flex-col gap-y-8 w-full lg:w-[68%]'>

                                {/* Images Section */}
                                <div className="w-full h-[400px] flex justify-center items-center">
                                    <Image
                                        alt='...'
                                        width={300}
                                        height={300}
                                        src={project?.thumbnailImg}
                                        className='w-full h-full rounded-lg object-cover'
                                    />
                                </div>

                                <div className='w-full text-3xl font-bold'>
                                    <p>| {project?.title}</p>
                                </div>

                                {/* About Project Section  */}
                                <div className="flex flex-col gap-y-4">
                                    <p className="text-2xl font-semibold mb-4">About This Project</p>

                                    <div
                                        className="text-[#64748b] leading-relaxed space-y-4"
                                        dangerouslySetInnerHTML={{ __html: project?.aboutProjectContent || "" }}
                                    />
                                </div>


                                {/* Key Features */}
                                <div className='flex w-full flex-col gap-y-4'>
                                    <p className='text-2xl font-semibold mb-4'>
                                        Key Features
                                    </p>
                                    <div className='w-full flex flex-wrap gap-4 sm:gap-6'>
                                        {
                                            project?.keyFeatures.map((item, index) => {
                                                return (
                                                    <div key={index} className='flex text-[#64748b] justify-center items-center gap-x-4 sm:gap-x-2'>
                                                        <Icon
                                                            icon={"simple-icons:circle"}
                                                            className={"text-primary"} />
                                                        {item}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                                {/* Technical Challenges & Solutions Section  */}
                                <div className='flex w-full flex-col gap-y-4'>
                                    <p className='text-2xl font-semibold mb-4'>
                                        Technical Challenges & Solutions
                                    </p>
                                    <div className='w-full flex flex-col gap-y-4'>
                                        {
                                            project.technicalChallengesAndSolutions.map((ele, index) => {
                                                return (
                                                    <div key={index} className='flex dark:border-[#1e293b] rounded-lg flex-col shadow-sm border-[1px] border-[#e2e8f0] w-full p-6 gap-y-2'>
                                                        <p className='text-lg font-semibold'>
                                                            {ele?.question}
                                                        </p>
                                                        <p className='text-[#64748b]'>
                                                            {ele?.answer}
                                                        </p>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>

                            </div>

                            {/* Right Section  */}
                            <div className='w-full lg:w-[30%] sticky flex flex-col gap-y-8 top-24'>

                                {/* Project Details  */}
                                <div className='p-6 flex flex-col dark:border-[#1e293b] items-start gap-y-4 rounded-lg border-[#e2e8f0] border-[1px]'>
                                    <p className='text-lg font-semibold'>
                                        Project Details
                                    </p>
                                    <div className='flex flex-col justify-center items-start gap-y-6'>
                                        <div className='flex justify-center items-center gap-x-4'>
                                            <Icon
                                                icon={"iconoir:calendar"}
                                                className={"text-[#64748b]"} />
                                            <div className='flex flex-col gap-y-1'>
                                                <p className='text-sm font-medium'>
                                                    Completed
                                                </p>
                                                <p className='text-sm text-[#64748b]'>
                                                    {new Date(project?.completeDate).toLocaleString('en-US', {
                                                        month: 'long',
                                                        year: 'numeric',
                                                    })}
                                                </p>

                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center gap-x-4'>
                                            <Icon
                                                icon={"ep:user"}
                                                className={"text-[#64748b]"} />
                                            <div className='flex flex-col gap-y-1'>
                                                <p className='text-sm font-medium'>
                                                    Client
                                                </p>
                                                <p className='text-sm text-[#64748b]'>
                                                    {project?.client}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center gap-x-4'>
                                            <Icon
                                                icon={"tabler:tag"}
                                                className={"text-[#64748b]"} />
                                            <div className='flex flex-col gap-y-1'>
                                                <p className='text-sm font-medium'>
                                                    Category
                                                </p>
                                                <p className='text-sm text-[#64748b]'>
                                                    {project?.category}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Technologies Used */}
                                <div className='p-6 w-full dark:border-[#1e293b] flex flex-col items-start gap-y-4 rounded-lg border-[#e2e8f0] border-[1px]'>
                                    <p className='text-lg font-semibold'>
                                        Technologies Used
                                    </p>
                                    <div className='flex flex-wrap gap-4'>
                                        {
                                            project?.techUsed.map((ele, index) => {
                                                return (
                                                    <p key={index} className='dark:bg-[#1e293b] rounded-full font-semibold text-xs py-0.5 px-[0.625rem] bg-[#f1f5f9]'>
                                                        {ele}
                                                    </p>
                                                )
                                            })
                                        }
                                    </div>

                                </div>

                                {/* Github and Live  */}
                                <div className='w-full flex flex-col gap-y-4'>
                                    {
                                        project?.livePreviewLink && (
                                            <Link href={`${project?.livePreviewLink}`} className='w-full font-medium border-[1px] border-primary text-white bg-primary hover:bg-[#2563ebe6] rounded-lg flex justify-center items-center gap-x-4 py-2'>
                                                <Icon
                                                    icon={"mage:external-link"}
                                                    className={"text-white"} />
                                                View Live Project
                                            </Link>
                                        )
                                    }
                                    {
                                        project?.githubLink && (
                                            <Link href={`${project?.githubLink}`} className='w-full dark:bg-[#020817] dark:hover:bg-[#1e293b] dark:border-[#1e293b] dark:text-white hover:bg-[#f1f5f9] font-medium text-black bg-white rounded-lg flex justify-center items-center gap-x-4 py-2 shadow-sm border-[#e2e8f0] border-[1px]'>
                                                <Icon
                                                    icon={"mingcute:github-line"}
                                                    className={"text-black dark:text-white"} />
                                                View Source Code
                                            </Link>
                                        )
                                    }
                                </div>

                                {/* Interest  */}
                                <div className='w-full dark:border-[#1e293b] border-[1px] shadow-sm border-[#e2e8f0] rounded-lg flex-col gap-y-4 flex justify-center items-center p-4'>
                                    <p className='text-lg font-semibold'>
                                        Interested in Similar Work?
                                    </p>
                                    <p className='text-sm  text-center text-[#64748b] mb-4'>
                                        Let&apos;s discuss your project and create something amazing together.
                                    </p>
                                    <Link href={"/#contact"} className='shadow-sm  dark:bg-[#020817] dark:hover:bg-[#1e293b] dark:border-[#1e293b] dark:text-white hover:bg-[#f1f5f9] font-medium text-xs px-3 py-2 border-[1px] rounded-lg border-[#e2e8f0]'>
                                        Get in touch
                                    </Link>
                                </div>

                            </div>

                        </div>

                        <div className='w-full flex gap-y-8 flex-col'>
                            <p className='text-2xl font-semibold mb-4'>
                                More Projects
                            </p>
                            <div className="w-full gap-6 flex flex-wrap items-center justify-center">
                                {SampleProjectsData.map((ele, index) => (
                                    <ProjectSectionCard ele={ele} key={index} />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div >

        </>
    )
}

export default SpecificProjectPageComponent
