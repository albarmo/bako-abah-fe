import React from "react";
import { BanknotesIcon } from "@heroicons/react/24/outline";

const Transaction = () => {
    return (
        <div className="flex justify-center p-10 mt-40 w-screen ">
            <div className="flex space-x-3 bg-blue-300 w-10/12 p-3">
                <div className="w-7/12 bg-white rounded p-2 space-y-2">
                    <article className="bg-slate-100 p-2 rounded">
                        <section className="flex space-x-2 ">
                            <BanknotesIcon width={20} color="grey" />
                            <h1 className="uppercase text-gray-500">amount</h1>
                        </section>
                        <section className="flex space-x-4 items-center">
                            <h1 className="text-4xl font-semibold">
                                Rp. 500.000{" "}
                                <span className="text-blue-300">IDR</span>
                            </h1>
                            <h1 className="bg-gray-200 text-sm w-20 rounded flex justify-center">
                                Pending approval
                            </h1>
                        </section>
                    </article>
                    <article className="bg-slate-100 p-2 rounded flex space-x-20">
                        <section>
                            <h1 className="text-gray-500">Transaction Date</h1>
                            <h1 className="text-xl">05/January/2024</h1>
                        </section>
                        <section>
                            <h1 className="text-gray-500">Aircraft</h1>
                            <h1 className="text-xl">N849WC</h1>
                        </section>
                    </article>
                    <article className="bg-slate-100 p-2 rounded">
                        <h1 className="text-2xl font-medium">
                            Transaction Details
                        </h1>
                        <section className="flex">
                            <h1 className="text-gray-500">Transaction Date</h1>
                            <h1 className="text-xl">05/January/2024</h1>
                        </section>
                    </article>
                </div>
                <div className="w-5/12 space-y-5 bg-white">
                    <article className="bg-green-300 rounded">
                        section 1
                    </article>
                    <article className="bg-green-300 rounded">
                        section 2
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Transaction;
