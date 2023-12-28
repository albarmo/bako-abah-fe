import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

export default function ProductList() {
    const list = [
        {
            title: "Orange",
            img: "/images/fruit-1.jpeg",
            price: "$5.50",
        },
        {
            title: "Tangerine",
            img: "/images/fruit-2.jpeg",
            price: "$3.00",
        },
        {
            title: "Raspberry",
            img: "/images/fruit-3.jpeg",
            price: "$10.00",
        },
        {
            title: "Lemon",
            img: "/images/fruit-4.jpeg",
            price: "$5.30",
        },
        {
            title: "Avocado",
            img: "/images/fruit-5.jpeg",
            price: "$15.70",
        },
        {
            title: "Lemon 2",
            img: "/images/fruit-6.jpeg",
            price: "$8.00",
        },
        {
            title: "Banana",
            img: "/images/fruit-7.jpeg",
            price: "$7.50",
        },
        {
            title:
                "Watermelon Watermelon WatermelonWatermelonWatermelonWatermelonWatermelon Watermelon WatermelonWatermelonWatermelonWatermelon",
            img: "/images/fruit-8.jpeg",
            price: "$12.20",
        },
    ];

    return (
        <div className="py-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-base">Produk</h1>
                <Link href={"/"} className="text-orange-base">
                    Lihat Semua
                </Link>
            </div>
            <div className="gap-5 grid grid-cols-2 sm:grid-cols-5 mt-5">
                {list.map((item, index) => (
                    <Card shadow="sm" radius="sm" key={index} isPressable>
                        <CardBody className="overflow-visible p-0">
                            <Image
                                radius="none"
                                alt={item.title}
                                className="w-full object-cover h-[250px]"
                                src={"/images/bundling-1.jpg"}
                            />
                        </CardBody>
                        <CardFooter className="text-small text-left block">
                            <h1 className="text-md font-normal line-clamp-2">
                                {item.title}
                            </h1>
                            <p className="text-default-500">{item.price}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
