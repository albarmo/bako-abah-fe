"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { fromatRupiah } from "@/utils/func";
const fallbackSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQwAAACUCAMAAABREOc7AAAAPFBMVEXm6eyQm6fq7e/S1tujrLagqbPa3uHj5und4eWmr7jX29+cpbDb3uOTnqmWoauutb7L0NWyusG8w8nFytCrkPVyAAABhUlEQVR4nO3Zy46DIBhAYeSiXApY+/7vOqDTmdSy1sV/vk0TuyEnlIIoBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAi6ZG7B3UL7c2YF9hjrXasruJqGJeLGyk5mbsHdzVXnvNYLfbuwV1smVwc/xq0SdNy8Whu1mL48Tf6ITaG9lGdZsjDCY2xPJ0Lp38PqTH8VnIuwXzUkBpjdm6da34Ro8WIOcx6m7bfGMeH1Bi+ZhtKOmaGjtu+pkqNoUxbM6Ztf6KNLW5WgmOo5bUdm+/eopT+UG6M9yajtchhDdl5LTjGQbdzm33o2ebkvfAY+7yYtWo1ijOyY7xbqL1GEXs26f5b7DWS6Bi9xd95vteQG0N/tNjXUrExzi36gUVsjK8Wgjdd3y3kxmgt6vldqNQYoxZK5DvQ2M9mvcXpftGkLCyGah1MKPbl41kt9e7BXa2dzHLbebt0lrOLdw/ucmsNY08j7q6135gML+G/7lEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQIIfVKAQLyZiv80AAAAASUVORK5CYII='

interface IPropsProductList {
    data: { rows: any[] } | undefined
}
const ProductList: React.FC<IPropsProductList> = ({ data }) => {
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
                {data?.rows?.map((product) => (
                    <Card
                        key={product?.id}
                        shadow="sm"
                        radius="sm"
                        isPressable
                        onClick={() => router.push(`/product/${product?.id}`)}
                    >
                        <CardBody className="w-full bg-gray-200 max-h-42 overflow-hidden p-0">
                            <Image
                                src={product?.image}
                                fallbackSrc={fallbackSrc}
                                alt={product?.name}
                                className="w-full h-full aspect-square object-cover"
                                radius="none"
                            />
                        </CardBody>
                        <CardFooter className="text-small text-left block">
                            <h1 className="text-xl font-semibold line-clamp-2">
                                {product?.name}
                            </h1>
                            <p className="text-xl text-default-500">
                                {fromatRupiah(product?.local_price)}
                            </p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
export default ProductList