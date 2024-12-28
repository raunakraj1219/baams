import React, { useEffect, useState } from "react";
import {
    MEMBERS_FORMAL_NAME,
    MEMBERS_NAME,
    MOMENTS_SECTIONS,
} from "../../constants";
import Moments from "./moments";
import { useLocation } from "react-router-dom";

const SCREENS = {
    DEFAULT: "DEFAULT",
    MOMENTS: "MOMENTS",
};

const Gallery = () => {
    const location = useLocation();
    const [galleryScreen, setGalleryScreen] = useState(SCREENS.DEFAULT);
    const handleMomentsSectionClick = (key) => {
        const item = MOMENTS_SECTIONS[key];
        setGalleryScreen(item);
        window.location.hash = key;
    };
    useEffect(() => {
        if (location.hash === "") {
            console.log("temp");
            setGalleryScreen(SCREENS.DEFAULT);
        }
    }, [location.hash]);
    return galleryScreen === SCREENS.DEFAULT ? (
        <div className="text-center p-4">
            <header className="text-xl font-semibold text-underline my-10">
                Baams Moments
            </header>
            <main className="flex flex-col gap-10">
                {Object.keys(MOMENTS_SECTIONS).map((item, key) => (
                    <section
                        className="text-center flex flex-col gap-3"
                        key={key}
                        onClick={() => handleMomentsSectionClick(item)}
                    >
                        <div className="text-[#0000EE] cursor-pointer underline shadow-md border-b border-gray-200 bg-[#e9edf5] py-6 text-xl">
                            {MOMENTS_SECTIONS[item]}
                        </div>
                    </section>
                ))}
            </main>
        </div>
    ) : (
        <Moments type={galleryScreen} />
    );
};

export default Gallery;
