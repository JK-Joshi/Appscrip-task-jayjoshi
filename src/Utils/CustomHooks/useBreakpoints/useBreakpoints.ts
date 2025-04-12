'use client'

import { useEffect, useState } from "react";

type Breakpoints = {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
};

const getBreakpoints = (width: number): Breakpoints => ({
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
})

export const useBreakpoint = (): Breakpoints => {
    const [breakpoints, setBreakpoints] = useState(() =>
        getBreakpoints(typeof window !== "undefined" ? window.innerWidth : 1024)
    );

    useEffect(() => {
        const handleResize = () => {
            setBreakpoints(getBreakpoints(window.innerWidth));
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return breakpoints;
};
