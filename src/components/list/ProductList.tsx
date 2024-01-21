"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { fromatRupiah } from "@/utils/func";

interface IPropsProductList {
    data: any[] | undefined
}
const ProductList:React.FC<IPropsProductList> = ({data}) =>  {
    const router = useRouter();
    return (
        <div className="py-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-base">Produk</h1>
                <Link href={"/product"} className="text-orange-base">
                    Lihat Semua
                </Link>
            </div>
            <div className="gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-5">
                {data?.map((item) => (
                    <Card
                        key={item?.id}
                        shadow="sm"
                        radius="sm"
                        isPressable
                        onClick={() => router.push(`/product/${item?.id}`)}
                    >
                        <CardBody className="w-full h-60 overflow-visible p-0">
                            <Image
                                radius="none"
                                alt={item?.name}
                                className="w-full object-cover"
                                src={`${process.env.apiUrl}/${item?.image}`}
                            />
                        </CardBody>
                        <CardFooter className="text-small text-left block">
                            <h1 className="text-lg font-normal line-clamp-2">
                                {item?.name}
                            </h1>
                            <p className="text-lg text-default-500">
                                {fromatRupiah(item?.local_price)}
                            </p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
export default ProductList