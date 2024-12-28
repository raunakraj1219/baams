import React from "react";
import { MEMBERS_FORMAL_NAME, MEMBERS_NAME } from "../constants";
import { IMAGE_URLS } from "../constants/urls";

const Members = () => {
    return (
        <div className="text-center p-4">
            <header className="text-xl font-semibold text-underline my-10">
                Members of Baams Parivaar
            </header>
            <main className="flex flex-col gap-8">
                <section className="text-center flex flex-col gap-3">
                    <h2>
                        {MEMBERS_NAME.ULTRA} ({MEMBERS_FORMAL_NAME.ULTRA})
                    </h2>
                    <img
                        src={IMAGE_URLS.MEMBERS_IMAGE[MEMBERS_NAME.ULTRA]}
                        className="rounded-[20px] h-[420px] object-cover"
                        alt="ultra-image"
                    />
                </section>
                <hr />
                <section className="text-center flex flex-col gap-3">
                    <h2>
                        {MEMBERS_NAME.ASHIK} ({MEMBERS_FORMAL_NAME.ASHIK})
                    </h2>
                    <img
                        src={IMAGE_URLS.MEMBERS_IMAGE[MEMBERS_NAME.ASHIK]}
                        alt="ashik-image"
                        className="rounded-[20px] h-[420px] object-cover"
                    />
                </section>
                <hr />
                <section className="text-center flex flex-col gap-3">
                    <h2>
                        {MEMBERS_NAME.BANA} ({MEMBERS_FORMAL_NAME.BANA})
                    </h2>
                    <img
                        src={IMAGE_URLS.MEMBERS_IMAGE[MEMBERS_NAME.BANA]}
                        alt="bana-image"
                        className="rounded-[20px] h-[420px] object-cover"
                    />
                </section>
            </main>
        </div>
    );
};
//
export default Members;
