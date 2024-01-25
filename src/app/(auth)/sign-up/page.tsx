import React from "react";
import {
    EnvelopeIcon,
    LockClosedIcon,
    AtSymbolIcon,
    UserIcon,
    PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const RegisterFormsInput = [
    {
        key: "first_name",
        label: "Nama Depan",
        type: "text",
        placeholder: "Masukan Nama Depan Anda",
        icon: (
            <UserIcon className="w-6 h-6 absolute mt-2 ml-3 pointer-events-none color-gray-300" />
        ),
    },
    {
        key: "last_name",
        label: "Nama Belakang",
        type: "text",
        placeholder: "Masukan Nama Belakang Anda",
    },
    {
        key: "email",
        label: "Email",
        type: "text",
        placeholder: "Masukan Email Anda",
        icon: (
            <EnvelopeIcon className="w-6 h-6 absolute mt-2 ml-3 pointer-events-none color-gray-300" />
        ),
    },
    {
        key: "phone_number",
        label: "Nomor Telepon",
        type: "text",
        placeholder: "Masukan Nomor Telepon (WA)",
        icon: (
            <PhoneIcon className="w-6 h-6 absolute mt-2 ml-3 pointer-events-none color-gray-300" />
        ),
    },
    {
        key: "password",
        label: "Password",
        type: "password",
        placeholder: "Buat Password",
        icon: (
            <LockClosedIcon className="w-6 h-6 absolute mt-2 ml-3 pointer-events-none" />
        ),
    },
    {
        key: "password_match",
        label: "Konfrimasi Password",
        type: "password",
        placeholder: "Konfirmasi Password",
        
    },
];

const SignUp = () => {
    return (
        <div className="flex justify-center p-10 mt-40 w-screen">
            <div className="flex justify-center items-center w-full">
                <article className="flex flex-col space-y-4 justify-center w-2/6 p-10 bg-gray-100">
                    <h1 className="text-xl font-semibold">Buat Akun</h1>
                    <form action="" className="grid grid-cols-1 gap-5">
                        {RegisterFormsInput.map((input) => (
                            <section key={input.key} className="relative">
                                {input?.icon && input?.icon}
                                <input
                                    name={input.key}
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    className="w-full h-10 p-3 px-10 placeholder-gray-300 text-black rounded-sm border-none ring-1 ring-gray-200"
                                />
                            </section>
                        ))}

                        <button className="w-full h-12 rounded-sm bg-gray-200 hover:bg-slate-400">
                            <Link href={"/"} className="">
                                Buat Akun
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

export default SignUp;
