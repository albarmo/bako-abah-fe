import React from "react";
import {
    EnvelopeIcon,
    LockClosedIcon,
    AtSymbolIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const User = () => {
    return (
        <main className="flex justify-center p-10 mt-40 w-screen">
            <div className="flex w-10/12 bg-slate-100 ">
                <article className="flex justify-center w-6/12">
                    <section className=" w-8/12 pt-2">
                        <h1 className="text-4xl font-semibold">
                            Hello there <br /> Please sign in to continue
                            access.
                        </h1>
                        <form action="" className="mt-12">
                            <section className="relative">
                                <EnvelopeIcon className="w-6 h-6 absolute mt-2 ml-3 pointer-events-none" />
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    name="Email"
                                    className="w-full h-[40px] pl-12 text-xl placeholder-gray-500 text-black rounded-xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                                />
                            </section>
                            <section className="relative pt-6">
                                <LockClosedIcon className="w-6 h-6 absolute mt-2 ml-3 pointer-events-none" />
                                <input
                                    type="text"
                                    placeholder="Password"
                                    name="Email"
                                    className="w-full h-[40px] pl-12 text-xl placeholder-gray-500 text-black rounded-xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                                />
                            </section>
                            <Link
                                href={"/"}
                                className="flex justify-end mt-3 text-xl font-semibold"
                            >
                                Forgot password?{" "}
                            </Link>
                            <button className="w-full h-14 rounded-2xl bg-teal-400 mt-4 text-2xl hover:bg-slate-400">
                                <Link href={"/"} className="">
                                    Sign In
                                </Link>
                            </button>
                            <h1 className="flex justify-center pt-5 pb-5">
                                {" "}
                                or Login with Another Account
                            </h1>
                            <div className="space-y-4">
                                <section className="flex items-center w-full h-14 outline rounded  ">
                                    <section className="pl-5">
                                        <AtSymbolIcon className="w-7 h-7" />
                                    </section>
                                    <h1 className="pl-5 text-xl">
                                        Sign in With Google Account
                                    </h1>
                                </section>
                            </div>
                            <h1 className="flex justify-center pt-5">
                                Dont have an account?
                                <Link
                                    href={"/sign-up"}
                                    className="font-semibold"
                                >
                                    Sign Up
                                </Link>
                            </h1>
                        </form>
                    </section>
                </article>
                <section className="relative ">
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

export default User;
