'use client'
import React, { useMemo } from "react";
import { useRouter } from "next/navigation";
import useCustomMutation from "@/hooks/useCustomMutation";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginAccount, registerAccount } from "@/helpers/auth_server";
import * as yup from "yup";
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
        key: "confrim_password",
        label: "Konfrimasi Password",
        type: "password",
        placeholder: "Konfirmasi Password",

    },
];

type Inputs = {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    password: string;
    confrim_password: string;
};

const schema = yup
    .object({
        first_name: yup.string().required("Masukan nama depan anda"),
        last_name: yup.string().required("Masukan nama depan anda"),
        email: yup
            .string()
            .email("Not a valid email")
            .required("Harap isi email"),
        phone_number: yup.string().required("Masukan nomor telepon (WA)"),
        password: yup.string().required("Masukan password"),
        confrim_password: yup.string().required("Konfrimasi password password"),
    })
    .required();


const SignUp = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm<Inputs>({
        resolver: yupResolver(schema),
        mode: "all",
    });
    const { mutation } = useCustomMutation(registerAccount as any);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const resp = await mutation.mutateAsync(data);
            if (resp.status === 200) {
                router.push("/sign-in");
            }
        } catch (error) {
            console.error(
                "An error occurred while submitting the form:",
                error
            );
        }
    };

    return (
        <div className="flex flex-col justify-center items-center w-full h-screen mt-20">
            <section className="w-11/12 md:w-1/3 bg-gray-100 p-5 space-y-2">
                <h1 className="text-xl font-semibold">Buat Akun</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5">
                    {RegisterFormsInput.map((input: any) => (
                        <section key={input.key} className="relative">
                            <input
                                id={input.key}
                                {...register(input?.key, { required: true })}
                                type={input.type}
                                placeholder={input.placeholder}
                                className="w-full h-10 px-3 placeholder-gray-300 text-black rounded-sm border-none ring-1 ring-gray-200"
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
            </section>
        </div>
    );
};

export default SignUp;
