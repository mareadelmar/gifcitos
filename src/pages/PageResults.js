import React from "react";
import "./PageResults.css";
import ListGifs from "../components/ListGifs";
import Spinner from "../components/Spinner";
import { useGifs } from "../hooks/useGifs";
import { Helmet } from "react-helmet";

const PageResults = ({ params }) => {
    // console.log(props) --> las props traen un objeto params con los parámetros.
    const { keyword } = params;
    const { gifs, loading, setPage } = useGifs({ keyword });

    const title = `GIFCITOS | Resultados para ${decodeURI(keyword)}`;
    // useDocTitle({ title });

    const handleClickPage = () => {
        console.log("click a next page");
        setPage((prevPage) => prevPage + 1);
    };

    console.log(gifs);
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={title} />
            </Helmet>
            <section className="results-container">
                {loading ? (
                    <div className="results-spinner">
                        <Spinner />
                    </div>
                ) : (
                    <div>
                        <div className="gifs-container">
                            <ListGifs gifs={gifs} />
                        </div>
                        <div className="results-btn">
                            <button onClick={handleClickPage}>
                                Cargas más
                            </button>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default PageResults;

/* hacer componente Loading */
