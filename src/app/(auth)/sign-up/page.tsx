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
    },
    {
        key: "phone_number",
        label: "Nomor Telepon",
        type: "text",
        placeholder: "Masukan Nomor Telepon (WA)",
    },
    {
        key: "password",
        label: "Password",
        type: "password",
        placeholder: "Buat Password",

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
                                <input
                                    name={input.key}
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    className="w-full h-10 p-3 placeholder-gray-300 text-black text-sm rounded-sm border-none ring-1 ring-gray-200"
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
                        Sudah punya akun ?
                        <Link href={"/sign-in"} className="font-semibold ml-1">
                            Login
                        </Link>
                    </h1>
                </article>
            </div>
        </div>
    );
};

export default SignUp;
