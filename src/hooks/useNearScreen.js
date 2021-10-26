import { useEffect, useState, useRef } from "react";

export default function useNearScreen({ distance = "100px" } = {}) {
    const elementRef = useRef();
    const [isNearScreen, setNearScreen] = useState(false);

    useEffect(() => {
        let observer;

        const onChange = (entries) => {
            // entries es un array con los elementos a obseervar (podríamos estar observando más)
            console.log(entries);
            const element = entries[0];
            console.log(element);
            if (element.isIntersecting) {
                setNearScreen(true);
                observer.disconnect();
            }
        };

        // una forma simple de condicionar la descarga del polyfill de intersection-observer
        Promise.resolve(
            typeof IntersectionObserver != "undefined"
                ? IntersectionObserver
                : import("intersection-observer")
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance,
            });

            observer.observe(elementRef.current);
        });

        return () => observer && observer.disconnect();
    }, [distance]);

    return { isNearScreen, elementRef };
}
