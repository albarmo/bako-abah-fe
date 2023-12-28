import { useRef } from "react";

const useFocus = () => {
    const htmlElRef: any = useRef(null);
    const setFocus = () => {
        if (htmlElRef.current) {
            htmlElRef.current?.focus();
        }
    };

    return [htmlElRef, setFocus];
};

export default useFocus;
