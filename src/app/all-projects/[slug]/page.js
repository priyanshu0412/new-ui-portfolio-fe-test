import { SpecificProjectPageComponent } from "@/components";
import { FetchApi } from "@/utilities/fetchApi";
import React from "react";

// -------------------------------------------------------

const SpecificProjectPage = async ({ params }) => {

    const { slug } = await params;

    const res = await FetchApi({
        url: `/project/${slug}`,
        method: "GET",
    });

    const project = res?.data;

    if (!project) {
        return (
            <div className="text-center min-h-screen flex justify-center items-center py-10">
                Project not found
            </div>
        );
    }

    return (
        < SpecificProjectPageComponent project={project} />
    )
};

export default SpecificProjectPage;
