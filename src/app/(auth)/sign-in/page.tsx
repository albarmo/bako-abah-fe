import React from "react";
import {
    EnvelopeIcon,
    LockClosedIcon,
    AtSymbolIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
    return (
        <div className="flex justify-center p-10 mt-40 w-screen">
            <div className="flex justify-center items-center w-full">
                <article className="flex flex-col space-y-4 justify-center w-2/6 p-10 bg-gray-100">
                    <h1 className="text-4xl font-semibold">
                        Masuk ke akun anda
                    </h1>
                    <form action="" className="grid grid-cols-1 gap-5">
                        <section className="relative">
                            <EnvelopeIcon className="w-6 h-6 absolute mt-2 ml-3 pointer-events-none color-gray-300" />
                            <input
                                type="text"
                                placeholder="Email Address"
                                name="Email"
                                className="w-full h-10 pl-12 placeholder-gray-300 text-black rounded-sm border-none ring-1 ring-gray-200"
                            />
                        </section>
                        <section className="relative">
                            <LockClosedIcon className="w-6 h-6 absolute mt-2 ml-3 pointer-events-none" />
                            <input
                                type="password"
                                placeholder="Password"
                                name="Email"
                                className="w-full h-10 pl-12 placeholder-gray-300 text-black rounded-sm border-none ring-1 ring-gray-200"
                            />
                            <Link
                                href={"/"}
                                className="flex justify-end mt-3 text-sm font-base hover:text-blue-600"
                            >
                                Forgot password?{" "}
                            </Link>
                        </section>

                        <button className="w-full h-12 rounded-sm bg-gray-200 hover:bg-slate-400">
                            <Link href={"/"} className="">
                                Masuk
                            </Link>
                        </button>
                    </form>
                    <h1 className="flex justify-center text-sm">
                        or Login with Another Account
                    </h1>
                    <button className="w-full flex justify-center items-center">
                        <AtSymbolIcon className="w-7 h-7" />
                        Sign in With Google Account
                    </button>
                    <h1 className="flex justify-center text-sm">
                        Dont have an account?
                        <Link href={"/sign-up"} className="font-semibold ml-1">
                            Sign Up
                        </Link>
                    </h1>
                </article>
            </div>
        </div>
    );
};

export default SignIn;
