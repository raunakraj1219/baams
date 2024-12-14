import React from "react";
import { IMAGE_URLS } from "../constants/urls";
import { BASE_PATH } from "../constants";

const Home = () => {
    return (
        <div>
            <img
                src={`${BASE_PATH}/src/assets/images/cover-image.jpg`}
                alt="cover-image"
                className=""
            />
        </div>
    );
};

export default Home;
