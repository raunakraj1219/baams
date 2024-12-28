import React from "react";
import { MEMBERS_FORMAL_NAME, MEMBERS_NAME } from "../constants";
import ultraMemberImage from "../assets/images/ultra/ultra-member.jpeg";
import ashikMemberImage from "../assets/images/ashik/ashik-member.jpeg";
import banaMemberImage from "../assets/images/bana/bana-member.jpeg";

const Gallery = () => {
    return (
        <div className="text-center p-4">
            <header className="text-xl font-semibold text-underline mb-10">
                Moments
            </header>
            <main className="flex flex-col gap-8">
                <section className="text-center flex flex-col gap-3">
                    <h2>Parivaar</h2>
                    <img
                        src={ultraMemberImage}
                        className=""
                        alt="ultra-image"
                    />
                </section>
                <hr />
                <section className="text-center flex flex-col gap-3">
                    <h2>Ultra and Ashik</h2>
                    <img src={ashikMemberImage} alt="ashik-image" />
                </section>
                <hr />
                <section className="text-center flex flex-col gap-3">
                    <h2>Ashik and Bana</h2>
                    <img src={banaMemberImage} alt="bana-image" />
                </section>
                <hr />
                <section className="text-center flex flex-col gap-3">
                    <h2>Bana and Ultra</h2>
                    <img src={banaMemberImage} alt="bana-image" />
                </section>
            </main>
        </div>
    );
};

export default Gallery;
