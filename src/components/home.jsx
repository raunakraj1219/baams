import React from "react";
import { IMAGE_URLS } from "../constants/urls";
import { BASE_PATH } from "../constants";

const Home = () => {
    return (
        <div className="p-0">
            <img
                src={`${BASE_PATH}/src/assets/images/cover-image.jpg`}
                alt="cover-image"
                className=""
            />
            <section className="text-center p-4">
                <header className="text-xl font-semibold">
                    Baams Parivaar
                </header>
                <article>
                    At BAAMS Group, we are dedicated to transforming ideas into
                    impactful solutions. With a passion for innovation and a
                    commitment to excellence, we work across diverse industries
                    to deliver services that empower businesses and individuals
                    to reach new heights.
                </article>
                <article>
                    At BAAMS Group, we are dedicated to transforming ideas into
                    impactful solutions. With a passion for innovation and a
                    commitment to excellence, we work across diverse industries
                    to deliver services that empower businesses and individuals
                    to reach new heights.
                </article>
                <article>
                    At BAAMS Group, we are dedicated to transforming ideas into
                    impactful solutions. With a passion for innovation and a
                    commitment to excellence, we work across diverse industries
                    to deliver services that empower businesses and individuals
                    to reach new heights.
                </article>
                <article>
                    At BAAMS Group, we are dedicated to transforming ideas into
                    impactful solutions. With a passion for innovation and a
                    commitment to excellence, we work across diverse industries
                    to deliver services that empower businesses and individuals
                    to reach new heights.
                </article>
                <article>
                    At BAAMS Group, we are dedicated to transforming ideas into
                    impactful solutions. With a passion for innovation and a
                    commitment to excellence, we work across diverse industries
                    to deliver services that empower businesses and individuals
                    to reach new heights.
                </article>
            </section>
        </div>
    );
};

export default Home;
