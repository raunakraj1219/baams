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
                    className="w-full h-[300px] object-cover border-2 border-white mx-0.25 rounded-md shadow-lg"
                    // className="w-full h-[300px] object-cover border-2 border-black rounded-md shadow-lg transform transition-transform duration-300 hover:rotate-x-6 hover:rotate-y-6 hover:shadow-2xl"
                />
            ))}
        </main>
    );
};

export default Moments;
