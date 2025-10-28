import React from "react";
import { SpecificBlogPageComponent } from "@/components";
import { FetchApi } from "@/utilities/fetchApi";

// ----------------------------------------

const SpecificBlogPage = async ({ params }) => {

    const { slug } = await params;

    const res = await FetchApi({
        url: `/blog/${slug}`,
        method: "GET",
    });

    const blog = res?.data?.data;

    if (!blog) {
        return (
            <div className="text-center min-h-screen flex justify-center items-center py-10">
                Blog not found
            </div>
        );
    }

    return <SpecificBlogPageComponent blog={blog} />;
};

export default SpecificBlogPage;
