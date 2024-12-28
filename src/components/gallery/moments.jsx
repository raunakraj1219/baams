import React from "react";
import { IMAGE_URLS } from "../../constants/urls";

const Moments = ({ type }) => {
    const imgURLArray = IMAGE_URLS.MOMENTS_IMAGES[type];
    return (
        <main className="flex flex-col gap-4 my-4">
            {imgURLArray.map((url, key) => (
                <img
                    src={url}
                    key={key}
                    className="w-full h-[300px] object-cover border-2 border-black mx-0.25 rounded-md"
                />
            ))}
        </main>
    );
};

export default Moments;
