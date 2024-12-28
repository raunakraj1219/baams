import React from "react";
import {
    CONTACT_NUMBERS,
    EMAILS,
    MEMBERS_FORMAL_NAME,
    MEMBERS_NAME,
} from "../constants";
import { IMAGE_URLS } from "../constants/urls";

const Contact = () => {
    return (
        <main className="flex flex-col items-center my-5">
            {Object.keys(MEMBERS_FORMAL_NAME).map((item, key) => (
                <section
                    key={key}
                    className="flex flex-col text-center items-center justify-evenly bg-[#e9edf5] rounded-[20px] shadow-md m-2 min-h-[400px] overflow-hidden p-2 transition-all duration-300 ease-in-out w-[300px]"
                >
                    <img
                        className="rounded-full h-[200px] mb-5 object-cover w-[200px] sm:w-full"
                        src={IMAGE_URLS.CONTACT_IMAGE[MEMBERS_NAME[item]]}
                    />
                    {MEMBERS_FORMAL_NAME[item]}
                    <br />
                    {EMAILS[item]}
                    <br />
                    {CONTACT_NUMBERS[item]}
                </section>
            ))}
        </main>
    );
};

export default Contact;
