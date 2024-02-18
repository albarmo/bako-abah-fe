import React from "react";
import {
    BanknotesIcon,
    TrashIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { image } from "@nextui-org/react";

const transactionDetails = [
    {
        key: "user_id",
        label: "User ID",
        value: "bbf393ab-d6ee-4a54-8f85-34f3919c4fc6",
        type: "text",
    },
    {
        key: "cart_id",
        label: "Cart ID",
        value: "fd36f3f0-f2cd-4161-b3df-82b2c1814e1f",
        type: "text",
    },
    {
        key: "paid_amount",
        label: "Paid Amount",
        value: 100000,
        type: "text",
    },
    {
        key: "paid_at",
        label: "Paid At",
        value: "null",
        type: "text",
    },
    {
        key: "proof_of_payment",
        label: "Proof of Payment",
        value: "null",
        type: "text",
    },
    {
        key: "payment_type",
        label: "Payment Type",
        value: "Bank Transfer",
        type: "text",
    },
    {
        key: "status",
        label: "Status",
        value: "Unpaid",
        type: "text",
    },
    {
        key: "cardholder_name",
        label: "Cardholder Name",
        value: "Albar Moerhamsa",
        type: "text",
    },
    {
        key: "store_in_charge",
        label: "Store in Charge",
        value: "f4b010bf-ad46-40d8-9ce5-7494aa02eb92",
        type: "text",
    },
];

const listCart = [
    {
        id: "0",
        image:
            "https://img.ws.mms.shopee.co.id/4fb09919506f18006549f6eebd9d2e15",
        name: "bako lemak mak biadab",
        price: 20000,
        weight: "1 gram",
        quantity: "2",
        grandTotal: 40000,
        type: "text",
    },
    {
        id: "1",
        image:
            "https://img.ws.mms.shopee.co.id/4fb09919506f18006549f6eebd9d2e15",
        name: "bako lemak mak biadab",
        price: 20000,
        weight: "1 gram",
        quantity: "2",
        grandTotal: 40000,
        type: "text",
    },
    {
        id: "2",
        image:
            "https://img.ws.mms.shopee.co.id/4fb09919506f18006549f6eebd9d2e15",
        name: "bako lemak mak biadab",
        price: 20000,
        weight: "1 gram",
        quantity: "2",
        grandTotal: 40000,
        type: "text",
    },
];

const shippingDetails = [
    {
        key: "user_name",
        labelName: "Nama",
        name: "Albar Moerhamsa",
        labelEmail: "Email",
        email: "moerbiadab@gmail.com",
        labelPhone: "Phone Number",
        phone: "0857167823234",
        labelAddress: "Address",
        address: "Jl. Mandor 12a, Cilandak barat",
    },
];

const Transaction = () => {
    return (
        <div className="flex justify-center p-10 mt-40 w-screen ">
            <div className="flex space-x-3  w-10/12 p-3">
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
                        {transactionDetails.map((index) => (
                            <section
                                key={index.key}
                                className="flex justify-between px-5 space-y-1"
                            >
                                <h1
                                    className="text-gray-500 font-normal
                                "
                                >
                                    {index.label}
                                </h1>
                                <h1 className="text-xl font-medium ">
                                    {index.value}
                                </h1>
                            </section>
                        ))}
                    </article>
                    <article className=" flex justify-end pl">
                        <button className="bg-blue-300 p-2 text-white hover:bg-slate-400 font-medium rounded">
                            Download Invoice
                        </button>
                    </article>
                </div>
                <div className="w-5/12 space-y-5">
                    <article className="bg-blue-700 rounded ">
                        <h1 className="p-2 pl-4 text-white text-2xl font-semibold">
                            List Cart Item
                        </h1>
                        <article className="bg-white rounded p-2 space-y-2">
                            {listCart.map((value) => (
                                <section
                                    key={value.id}
                                    className="bg-slate-100 p-2 flex justify-between rounded"
                                >
                                    <div className="flex space-x-2 items-center">
                                        <section className="">
                                            <Image
                                                src={value.image}
                                                alt=""
                                                width={50}
                                                height={20}
                                                className="rounded-md"
                                            />
                                        </section>
                                        <section className="w-44 flex flex-col -space-y-1">
                                            <h1 className="text-lg">
                                                {value.name}
                                            </h1>
                                            <h2 className="text-sm">
                                                Rp. {value.price}
                                            </h2>
                                            <h1 className="text-sm">
                                                {value.weight}
                                            </h1>
                                        </section>
                                    </div>
                                    <div className="flex items-center">
                                        <h1>{value.quantity} - Item</h1>
                                    </div>
                                </section>
                            ))}
                        </article>
                    </article>
                    <div className="bg-white p-2 rounded">
                        <section className="flex items-center space-x-1 p-2 ">
                            <PaperAirplaneIcon width={30} color="black`" />
                            <h1 className="text-xl text-black font-medium ">
                                Shipping to
                            </h1>
                        </section>
                        {shippingDetails.map((index) => (
                            <section
                                key={index.key}
                                className="px-5 space-y-2 bg-slate-100 rounded-sm"
                            >
                                <section className="flex justify-between">
                                    <h1>{index.labelName}</h1>
                                    <h1 className="font-medium">
                                        {index.name}
                                    </h1>
                                </section>
                                <section className="flex justify-between">
                                    <h1>{index.labelEmail}</h1>
                                    <h1 className="font-medium">
                                        {index.email}
                                    </h1>
                                </section>
                                <section className="flex justify-between">
                                    <h1>{index.labelPhone}</h1>
                                    <h1 className="font-medium">
                                        {index.phone}
                                    </h1>
                                </section>
                                <section className="flex justify-between">
                                    <h1>{index.labelAddress}</h1>
                                    <h1 className="font-medium">
                                        {index.address}
                                    </h1>
                                </section>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transaction;
