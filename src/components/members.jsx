import React from "react";
import { BASE_PATH } from "../constants";

const Members = () => {
    return (
        <div className="text-center p-4">
            <header className="text-xl font-semibold text-underline mb-10">
                Members of Baams Parivaar
            </header>
            <main className="flex flex-col gap-8">
                <section className="text-center flex flex-col gap-3">
                    <h2>Ultra Baams (Chitranshu Ranjan)</h2>
                    <img
                        src={`${BASE_PATH}/src/assets/images/ultra/ultra-member.jpeg`}
                        className=""
                    />
                </section>
                <hr />
                <section className="text-center flex flex-col gap-3">
                    <h2>Ashik Baams (Kirti Vardhan) </h2>
                    <img
                        src={`${BASE_PATH}/src/assets/images/ashik/ashik-member.jpeg`}
                    />
                </section>
                <hr />
                <section className="text-center flex flex-col gap-3">
                    <h2>Bana Baams (Raunak Raj)</h2>
                    <img
                        src={`${BASE_PATH}/src/assets/images/bana/bana-member.jpeg`}
                    />
                </section>
            </main>
        </div>
    );
};

export default Members;
