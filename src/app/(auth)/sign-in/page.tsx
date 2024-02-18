'use client'
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useCustomMutation from "@/hooks/useCustomMutation";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginAccount } from "@/helpers/auth_server";
import * as yup from "yup";

import {
    EnvelopeIcon,
    LockClosedIcon,
} from "@heroicons/react/24/outline";

type Inputs = {
    email: string;
    password: string;
};

const schema = yup
    .object({
        email: yup
            .string()
            .email("Not a valid email")
            .required("Harap isi email"),
        password: yup.string().required("Masukan password"),
    })
    .required();

const SignIn = () => {
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
    const { mutation } = useCustomMutation(loginAccount as any);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const resp = await mutation.mutateAsync(data);
            if (resp.status === 200) {
                router.push("/");
            }
        } catch (error) {
            console.error(
                "An error occurred while submitting the form:",
                error
            );
        }
    };
    return (
        <main className="flex justify-center p-10 w-screen h-screen">
            <div className="flex justify-center items-center w-full">
                <article className="flex flex-col space-y-4 justify-center w-2/6 p-10 bg-gray-100">
                    <h1 className="text-xl font-semibold">
                        Masuk ke akun anda
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5">
                        <section className="relative">
                            <EnvelopeIcon className="w-6 h-6 absolute mt-2 ml-3 pointer-events-none color-gray-300" />
                            <input
                                id="email"
                                {...register("email", { required: true })}
                                type="text"
                                placeholder="Email Address"
                                className="w-full h-10 pl-12 placeholder-gray-300 text-black rounded-sm border-none ring-1 ring-gray-200"
                            />
                            <p className="text-red-400 text-sm">{errors?.email?.message}</p>
                        </section>
                        <section className="relative">
                            <LockClosedIcon className="w-6 h-6 absolute mt-2 ml-3 pointer-events-none" />
                            <input
                                id="password"
                                {...register("password", { required: true })}
                                type="password"
                                placeholder="Password"
                                className="w-full h-10 pl-12 placeholder-gray-300 text-black rounded-sm border-none ring-1 ring-gray-200"
                            />
                            <p className="text-red-400 text-sm">{errors?.password?.message}</p>
                        </section>
                        <button type="submit" className="w-full h-12 rounded-sm bg-gray-200 hover:bg-slate-400">
                            Masuk
                        </button>
                    </form>
                    <h1 className="flex justify-center text-sm">
                        Belum memiliki akun ?
                        <Link href={"/sign-up"} className="font-semibold ml-1">
                            Sign Up
                        </Link>
                    </h1>
                </article>
            </div>
        </main>
    );
};

export default SignIn;
