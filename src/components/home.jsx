import React, { useEffect } from "react";
import { IMAGE_URLS } from "../constants/urls";
import { BASE_PATH } from "../constants";
import coverImage from "../assets/images/cover-image.jpg";
import useIsDesktop from "../hooks/use-is-desktop";

const Home = () => {
    const isDesktop = useIsDesktop();
    // const tURL =
    //     "https://res.cloudinary.com/dybxzpvrp/image/upload/v1735364569/cover-image_fb9ebg.jpg";
    useEffect(() => {
        if (isDesktop)
            alert(
                "This is a mobile friendly website. Please open in mobile device for smoother experience"
            );
    }, [isDesktop]);
    return (
        <div className="p-0">
            <img src={IMAGE_URLS.COVER_IMAGE} alt="cover-image" className="" />
            NEW
            <section className="text-center p-4">
                <header className="text-xl font-semibold">
                    Baams Parivaar
                </header>
                <article>
                    Baams is not just a family; it’s a philosophy, a thought
                    process, and a way of life. It represents a bond that
                    transcends blood relations, uniting individuals through
                    shared values, trust, and a profound sense of belonging.
                    Rooted in unity and diversity, it’s a space where every
                    member’s unique contributions are celebrated, fostering
                    creativity, growth, and the spirit of togetherness. Baams
                    Parivaar is a journey of collective growth and mutual
                    support. It’s a sanctuary where individuality thrives within
                    a strong, united community, creating a vibrant and
                    meaningful way of living that evolves with every shared
                    experience.
                </article>
                <br />
                <header className="text font-semibold">
                    The Three Pillars of Baams Parivaar
                </header>
                <article>
                    Our foundation stands strong on three unwavering pillars,
                    which make us resilient and united as a family. Baams
                    Parivaar has its own vocabulary, its own way of
                    communication—a style that sets us apart. Each member of
                    Baams Parivaar enjoys a unique identity within the family,
                    distinct from how they are perceived by the rest of the
                    world.
                </article>
            </section>
        </div>
    );
};

export default Home;
