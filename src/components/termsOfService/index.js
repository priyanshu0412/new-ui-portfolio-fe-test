"use client"
import React from 'react'
import Icon from '../icon'
import CustomNavbarBlog from '../customNavbarBlog'

// ------------------------------------------

const TermsOfService = () => {
    return (
        <>
            <div className="w-full flex flex-col dark:bg-[#060D1F] items-center min-h-screen">

                <CustomNavbarBlog path={"/"} subTitleBtn={"Home"} />

                <div className='pt-10 pb-20  px-8 xl:px-0 flex flex-col gap-y-8 max-w-[1200px] w-full '>

                    {/* Privacy Policy */}
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex gap-x-4 items-center'>
                            <Icon
                                icon={"hugeicons:note"}
                                width={25}
                                height={25} />
                            <p className='xl:text-3xl text-lg font-semibold'> Terms of Service</p>
                        </div>
                        <div className='flex text-[#64748b] flex-col gap-y-2'>
                            <p>
                                <b>Last Updated:</b> October 2025
                            </p>
                            <p>
                                <b>Effective Date:</b> October 2025
                            </p>
                        </div>
                        <div className='text-[#64748b]'>
                            <p>
                                Welcome to <b> Priyanshu Dev Portfolio </b> (the “Website”), operated by <b> Priyanshu Agrawal </b> (“I”, “me”, or “my”).
                                <br />
                                By accessing or using this website, you agree to comply with and be bound by the following terms and conditions.
                                <br />
                                If you do not agree with these terms, kindly refrain from using the website.
                            </p>
                        </div>
                    </div>

                    {/* 1. Use of the Website */}
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex gap-x-4 items-center'>
                            <p className='xl:text-3xl text-lg font-semibold'>1.</p>
                            <p className='xl:text-3xl text-lg font-semibold'>
                                Use of the Website
                            </p>
                        </div>
                        <div className='flex text-[#64748b] flex-col gap-y-4'>
                            <p>
                                You agree to use this website for lawful and personal purposes only.
                            </p>
                            <p>
                                You must not:
                            </p>
                            <ul className='list-disc list-inside'>
                                <li>
                                    Copy, distribute, or modify any content without permission.
                                </li>
                                <li>
                                    Attempt to gain unauthorized access to the website or its server.
                                </li>
                                <li>
                                    Use the site for activities that may harm or disrupt its functionality.
                                </li>
                            </ul>
                            <p>
                                The content on this website is for informational purposes and is subject to change without notice.
                            </p>
                        </div>
                    </div>

                    {/* 2. Intellectual Property Rights */}
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex gap-x-4 items-center'>
                            <p className='xl:text-3xl text-lg font-semibold'>2.</p>
                            <p className='xl:text-3xl text-lg font-semibold'>
                                Intellectual Property Rights
                            </p>
                        </div>
                        <div className='flex text-[#64748b] flex-col gap-y-4'>
                            <p>
                                All materials on this website — including design, code, text, graphics, and logo — are the intellectual property of <b> Priyanshu Agrawal </b>, unless stated otherwise.
                            </p>
                            <p>
                                You may not reproduce or redistribute any part of this website without prior written permission.
                            </p>
                        </div>
                    </div>

                    {/* 3. User Submissions */}
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex gap-x-4 items-center'>
                            <p className='xl:text-3xl text-lg font-semibold'>3.</p>
                            <p className='xl:text-3xl text-lg font-semibold'>
                                User Submissions
                            </p>
                        </div>
                        <div className='flex text-[#64748b] flex-col gap-y-2'>
                            <p>
                                If you contact me via forms or email, you agree that:
                            </p>
                            <ul className='list-disc list-inside'>
                                <li>
                                    The information you provide is accurate and not misleading.
                                </li>
                                <li>
                                    I may use the data to respond to your inquiry or improve website content.
                                </li>
                                <li>
                                    You will not send spam, harmful files, or malicious scripts through contact forms.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 4. External Links */}
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex gap-x-4 items-center'>
                            <p className='xl:text-3xl text-lg font-semibold'>4.</p>
                            <p className='xl:text-3xl text-lg font-semibold'>
                                External Links
                            </p>
                        </div>
                        <div className='flex text-[#64748b] flex-col gap-y-2'>
                            <p>
                                This website may contain links to external sites (such as GitHub, LinkedIn, or Buy Me a Coffee).
                            </p>
                            <p>
                                I am not responsible for the content, privacy, or practices of these third-party websites.
                            </p>
                            <p>
                                Visiting those sites is entirely at your own discretion.
                            </p>
                        </div>
                    </div>

                    {/* 5. Service Availability */}
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex gap-x-4 items-center'>
                            <p className='xl:text-3xl text-lg font-semibold'>5.</p>
                            <p className='xl:text-3xl text-lg font-semibold'>
                                Service Availability
                            </p>
                        </div>
                        <div className='flex text-[#64748b] flex-col gap-y-4'>
                            <p>
                                While I strive to keep the website online and accessible,
                            </p>
                            <p>
                                I do not guarantee uninterrupted or error-free performance.
                            </p>
                            <p>
                                Maintenance, server issues, or third-party dependencies may temporarily affect availability.
                            </p>
                        </div>
                    </div>

                    {/* 6. Privacy and Data Protection */}
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex gap-x-4 items-center'>
                            <p className='xl:text-3xl text-lg font-semibold'>6.</p>
                            <p className='xl:text-3xl text-lg font-semibold'>
                                Privacy and Data Protection
                            </p>
                        </div>
                        <div className='flex text-[#64748b] flex-col gap-y-4'>
                            <p>
                                Your privacy is important.
                            </p>
                            <p>
                                Any data collected through this website (such as contact form details or email subscriptions) is handled according to my Privacy Policy.
                            </p>
                            <p>
                                Please review it to understand how your information is managed.
                            </p>
                        </div>
                    </div>

                    {/* 7. Limitation of Liability */}
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex gap-x-4 items-center'>
                            <p className='xl:text-3xl text-lg font-semibold'>7.</p>
                            <p className='xl:text-3xl text-lg font-semibold'>
                                Limitation of Liability
                            </p>
                        </div>
                        <div className='flex text-[#64748b] flex-col gap-y-4'>
                            <p>
                                To the maximum extent permitted by law,
                            </p>
                            <p>
                                I am not liable for any direct or indirect damages resulting from your use of this website, including loss of data, profits, or goodwill.
                            </p>
                            <p>
                                You use this website at your own risk.
                            </p>
                        </div>
                    </div>

                    {/* 8. Changes to These Terms */}
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex gap-x-4 items-center'>
                            <p className='xl:text-3xl text-lg font-semibold'>8.</p>
                            <p className='xl:text-3xl text-lg font-semibold'>
                                Changes to These Terms
                            </p>
                        </div>
                        <div className='flex text-[#64748b] flex-col gap-y-4'>
                            <p>
                                I reserve the right to modify or update these Terms of Service at any time without prior notice.
                            </p>
                            <p>
                                All updates will be posted on this page with a revised “Last Updated” date.
                            </p>
                        </div>
                    </div>

                    {/* 9. Contact Information */}
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex gap-x-4 items-center'>
                            <p className='xl:text-3xl text-lg font-semibold'>8.</p>
                            <p className='xl:text-3xl text-lg font-semibold'>
                                Contact Information
                            </p>
                        </div>
                        <div className='flex text-[#64748b] flex-col gap-y-4'>
                            <p>
                                For any questions or concerns about these Terms, contact:
                            </p>
                            <p>
                                contact@priyanshudev.site
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-4'>
                        <p>
                            <b>© {new Date().getFullYear()} Priyanshu Agrawal. All rights reserved.</b>
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default TermsOfService
