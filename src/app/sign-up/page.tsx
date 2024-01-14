import React from "react";
import Link from "next/link";
import Image from "next/image";
import { EnvelopeIcon, KeyIcon, PhoneIcon } from "@heroicons/react/24/outline";

const SignUp = () => {
    return (
        <main className="flex justify-center p-10 mt-40 w-screen">
            <div className="flex w-10/12 shadow-md rounded-md ">
                <section className="flex justify-center w-6/12 pt-2 ">
                    <section className="w-10/12 pt-2 ">
                        <h1 className="text-5xl font-semibold">Sign up</h1>
                        <form action="" className="mt-10 space-y-4">
                            <article className="flex justify-between">
                                <span>
                                    <h1 className="text-lg font-medium">
                                        First name
                                    </h1>
                                    <input
                                        type="text"
                                        placeholder="Click here .."
                                        name="first name"
                                        className="w-[300px] h-[40px] pl-3 text-2xl placeholder-gray-500 text-black rounded border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                                    />
                                </span>
                                <span>
                                    <h1 className="text-lg font-medium">
                                        Last name
                                    </h1>
                                    <input
                                        type="text"
                                        placeholder="Click here .."
                                        name="last name"
                                        className="w-[300px] h-[40px] pl-3 text-2xl placeholder-gray-500 text-black rounded border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                                    />
                                </span>
                            </article>
                            <article>
                                <h1 className="text-lg font-medium">Email</h1>
                                <EnvelopeIcon className="w-6 h-6 absolute mt-2 ml-3" />
                                <input
                                    type="text"
                                    placeholder="Click here .."
                                    name="email"
                                    className="w-full h-[40px] pl-12 text-2xl placeholder-gray-500 text-black rounded border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                                />
                            </article>
                            <article>
                                <h1 className="text-lg font-medium">
                                    Password
                                </h1>
                                <KeyIcon className="w-6 h-6 absolute mt-2 ml-3" />
                                <input
                                    type="text"
                                    placeholder="Click here .."
                                    name="password"
                                    className="w-full h-[40px] pl-12 text-2xl placeholder-gray-500 text-black rounded border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                                />
                            </article>
                            <article className="relative">
                                <h1 className="text-lg font-medium">
                                    Phone number
                                </h1>
                                <PhoneIcon className="w-6 h-6 absolute mt-2 ml-3" />
                                <input
                                    type="int"
                                    placeholder="Click here .."
                                    name="phone number"
                                    className="w-full h-[40px] pl-12 text-2xl placeholder-gray-500 text-black rounded border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                                />
                            </article>
                            <article className="pt-14">
                                <button className="w-full h-[50px] bg-teal-400 rounded-xl text-2xl hover:bg-slate-400 ">
                                    <Link href={"/"}>Sign Up</Link>
                                </button>
                                <h1 className="flex justify-center text-lg pt-5 pb-5">
                                    Already have an account?{" "}
                                    <Link
                                        href={"/user"}
                                        className="text-blue-600 font-medium"
                                    >
                                        Log in.
                                    </Link>
                                </h1>
                            </article>
                        </form>
                    </section>
                </section>
                <section className=" w-6/12 pt-2">
                    <Image
                        src={"/assets/android-chrome-512x512.png"}
                        alt=""
                        width={500}
                        height={50}
                        className="ml-20 mt-5"
                    />
                </section>
            </div>
        </main>
    );
};

export default SignUp;
