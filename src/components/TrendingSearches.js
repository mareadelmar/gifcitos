import React, { Suspense } from "react";
import useNearScreen from "../hooks/useNearScreen";

// usamos react.lazy para hacer un import dinámico de TrendingSearches
const TrendingSearchesServices = React.lazy(() =>
    import("./TrendingSearchesServices")
);

export default function LazyTrends() {
    // le podemos pasar una distancia customizada (por defecto serán 100px).
    const { isNearScreen, elementRef } = useNearScreen();

    return (
        <div ref={elementRef} className="links-container">
            <Suspense fallback={"Cargando..."}>
                {isNearScreen ? <TrendingSearchesServices /> : null}
            </Suspense>
        </div>
    );
}
