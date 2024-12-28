import React from "react";
import { MEMBERS_FORMAL_NAME, MEMBERS_NAME } from "../constants";
import ultraMemberImage from "../assets/images/ultra/ultra-member.jpeg";
import ashikMemberImage from "../assets/images/ashik/ashik-member.jpeg";
import banaMemberImage from "../assets/images/bana/bana-member.jpeg";

const Members = () => {
    return (
        <div className="text-center p-4">
            <header className="text-xl font-semibold text-underline mb-10">
                Members of Baams Parivaar
            </header>
            <main className="flex flex-col gap-8">
                <section className="text-center flex flex-col gap-3">
                    <h2>
                        {MEMBERS_NAME.ULTRA} ({MEMBERS_FORMAL_NAME.ULTRA})
                    </h2>
                    <img
                        src={ultraMemberImage}
                        className=""
                        alt="ultra-image"
                    />
                </section>
                <hr />
                <section className="text-center flex flex-col gap-3">
                    <h2>
                        {MEMBERS_NAME.ASHIK} ({MEMBERS_FORMAL_NAME.ASHIK})
                    </h2>
                    <img src={ashikMemberImage} alt="ashik-image" />
                </section>
                <hr />
                <section className="text-center flex flex-col gap-3">
                    <h2>
                        {MEMBERS_NAME.BANA} ({MEMBERS_FORMAL_NAME.BANA})
                    </h2>
                    <img src={banaMemberImage} alt="bana-image" />
                </section>
            </main>
        </div>
    );
};
//
export default Members;
