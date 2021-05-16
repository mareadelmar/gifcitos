import { useEffect, useRef } from "react";

export default function useDocTitle({ title }) {
    const refPrevTitle = useRef();

    useEffect(() => {
        const prevTitle = refPrevTitle;

        document.title = `${title} | GIFCITOS`;

        // cuando se desmonta el componente, el efecto vuelve al título anterior que tenemos referenciado.
        return () => (document.title = prevTitle);
    }, [title]);
}
