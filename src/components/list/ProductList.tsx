"use client";

import React from "react";
import { Card, CardFooter, Image, cn } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { fromatRupiah } from "@/utils/func";

interface IPropsProductList {
    title: string
    data: { rows: any[] } | undefined
    hasSeeAll?: boolean
}
const ProductList: React.FC<IPropsProductList> = ({ title, data, hasSeeAll = true }) => {
    const router = useRouter();
    return (
        <div className="w-full">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-base">{title}</h1>
                <Link href={"/product"} className={cn(hasSeeAll ? "block" : "hidden", "text-orange-base")}>
                    Lihat Semua
                </Link>
            </div>
            <div className="gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-5">
                {data?.rows?.map((product) => (
                    <Card
                        key={product?.id}
                        shadow="sm"
                        radius="sm"
                        isPressable
                        onClick={() => router.push(`/product/${product?.id}`)}
                    >
                        <div className="w-full h-44 overflow-hidden p-0 bg-gray-200">
                            <Image
                                src={product?.image}
                                alt={product?.name}
                                className="w-full h-full object-cover"
                                radius="none"
                            />
                        </div>
                        <CardFooter className="text-small text-left block">
                            <h1 className="text-lg font-semibold line-clamp-2">
                                {product?.name}
                            </h1>
                            <p className="text-lg text-default-500">
                                Rp {fromatRupiah(product?.local_price)}
                            </p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
export default ProductList