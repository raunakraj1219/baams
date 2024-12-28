import React from "react";
import { MOBILE_BREAKPOINT } from "../constants";

const useIsDesktop = () => {
    return window.innerWidth > MOBILE_BREAKPOINT;
};

export default useIsDesktop;
