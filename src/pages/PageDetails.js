import React from "react";
import { Redirect } from "wouter";
import "./PageDetails.css";
import useSingleGif from "../hooks/useSingleGif";
import Gif from "../components/Gif";
import Spinner from "../components/Spinner";
import { Helmet } from "react-helmet";

const PageDetails = ({ params }) => {
    const { id } = params;
    console.log(id);
    const { gif, loadingGif, isError } = useSingleGif({ id });

    if (loadingGif)
        return (
            <>
                <Spinner />
                <Helmet>
                    <title>GIFCITOS | Cargando...</title>
                </Helmet>
            </>
        );
    if (isError) return <Redirect to="/404" />;
    if (!gif) return null;

    const title = `GIFCITOS | ${gif.title}`;
    // useDocTitle({ title });

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={title} />
            </Helmet>
            <div className="details-gif">
                <Gif {...gif} />
                {/* <div className="details-data">
                <p>
                    <span>name:</span>
                    {` ${gif.title}`}
                </p>
                <p>
                    <span>url:</span>
                    {` ${gif.url}`}
                </p>
            </div> */}
            </div>
        </>
    );
};

export default PageDetails;
