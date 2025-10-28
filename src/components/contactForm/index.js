"use client";
import React, { useState } from "react";
import Icon from "../icon";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FetchApi } from "@/utilities/fetchApi";


// ----------------------------------------

const ContactForm = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        subject: Yup.string().required("Subject is required"),
        message: Yup.string().required("Message is required"),
    });


    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                setIsSubmitting(true);

                const res = await FetchApi({
                    url: "/contact",
                    method: "POST",
                    data: values,
                });

                if (res?.success) {
                    alert("Message sent successfully!");
                    resetForm();
                } else {
                    alert("Failed to send message!");
                }
            } catch (error) {
                alert("Something went wrong!");
            } finally {
                setIsSubmitting(false);
            }
        },
    });

    return (
        <>
            <div className="flex justify-center items-center w-full lg:w-[48%]">
                <form
                    onSubmit={formik.handleSubmit}
                    className="w-full flex flex-col gap-y-8 p-8 border-[1px] rounded-xl shadow-sm dark:border-[#1e293b] border-[#e2e8f0]"
                >

                    <div className="w-full gap-y-8 lg:gap-y-0 flex-col lg:flex-row flex justify-between items-center">
                        {/* Name */}
                        <div className="w-full lg:w-[48%] flex gap-y-2 flex-col">
                            <p className="text-sm font-semibold">Name</p>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                className="w-full text-sm rounded-lg py-3 px-3 border border-[#e2e8f0] bg-[#f1f5f980] dark:border-[#1e293b] dark:bg-[#1e293b80]"
                            />
                            {formik.touched.name && formik.errors.name && (
                                <p className="text-red-500 text-xs">
                                    {formik.errors.name}
                                </p>
                            )}
                        </div>


                        <div className="w-full lg:w-[48%] flex gap-y-2 flex-col">
                            <p className="text-sm font-semibold">Email</p>
                            <input
                                type="text"
                                name="email"
                                placeholder="your.email@example.com"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                className="w-full text-sm rounded-lg py-3 px-3 border border-[#e2e8f0] bg-[#f1f5f980] dark:border-[#1e293b] dark:bg-[#1e293b80]"
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-red-500 text-xs">
                                    {formik.errors.email}
                                </p>
                            )}
                        </div>
                    </div>


                    <div className="w-full flex flex-col gap-y-2">
                        <p className="text-sm font-semibold">Subject</p>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Project Inquiry"
                            value={formik.values.subject}
                            onChange={formik.handleChange}
                            className="w-full text-sm rounded-lg py-3 px-3 border border-[#e2e8f0] bg-[#f1f5f980] dark:border-[#1e293b] dark:bg-[#1e293b80]"
                        />
                        {formik.touched.subject && formik.errors.subject && (
                            <p className="text-red-500 text-xs">
                                {formik.errors.subject}
                            </p>
                        )}
                    </div>


                    <div className="w-full flex flex-col gap-y-2">
                        <p className="text-sm font-semibold">Message</p>
                        <textarea
                            rows={5}
                            name="message"
                            placeholder="Write your message..."
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            className="w-full text-sm rounded-lg py-3 px-3 border border-[#e2e8f0] bg-[#f1f5f980] dark:border-[#1e293b] dark:bg-[#1e293b80]"
                        />
                        {formik.touched.message && formik.errors.message && (
                            <p className="text-red-500 text-xs">
                                {formik.errors.message}
                            </p>
                        )}
                    </div>


                    <div className="w-full">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`relative w-full overflow-hidden bg-primary text-white font-semibold text-sm lg:text-lg h-fit flex justify-center gap-x-4 items-center px-4 py-2 lg:px-8 lg:py-4 rounded-xl shadow group ${isSubmitting
                                ? "opacity-70 cursor-not-allowed"
                                : "hover:opacity-90"
                                }`}
                        >
                            <span className="relative z-10 flex items-center gap-x-4">
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Icon
                                    height={20}
                                    width={20}
                                    icon={"mingcute:arrow-right-line"}
                                />
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactForm;
