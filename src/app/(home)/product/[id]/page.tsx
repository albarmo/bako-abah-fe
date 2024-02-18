"use client";
import { Button, Input, Image } from "@nextui-org/react";
import { fetchProductDetail } from "@/helpers/product_server";
import useCustomQuery from "@/hooks/useCustomQuery";
import { useState } from "react";
import { fromatRupiah } from "@/utils/func";
const fallbackSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQwAAACUCAMAAABREOc7AAAAPFBMVEXm6eyQm6fq7e/S1tujrLagqbPa3uHj5und4eWmr7jX29+cpbDb3uOTnqmWoauutb7L0NWyusG8w8nFytCrkPVyAAABhUlEQVR4nO3Zy46DIBhAYeSiXApY+/7vOqDTmdSy1sV/vk0TuyEnlIIoBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAi6ZG7B3UL7c2YF9hjrXasruJqGJeLGyk5mbsHdzVXnvNYLfbuwV1smVwc/xq0SdNy8Whu1mL48Tf6ITaG9lGdZsjDCY2xPJ0Lp38PqTH8VnIuwXzUkBpjdm6da34Ro8WIOcx6m7bfGMeH1Bi+ZhtKOmaGjtu+pkqNoUxbM6Ztf6KNLW5WgmOo5bUdm+/eopT+UG6M9yajtchhDdl5LTjGQbdzm33o2ebkvfAY+7yYtWo1ijOyY7xbqL1GEXs26f5b7DWS6Bi9xd95vteQG0N/tNjXUrExzi36gUVsjK8Wgjdd3y3kxmgt6vldqNQYoxZK5DvQ2M9mvcXpftGkLCyGah1MKPbl41kt9e7BXa2dzHLbebt0lrOLdw/ucmsNY08j7q6135gML+G/7lEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQIIfVKAQLyZiv80AAAAASUVORK5CYII='

export default function ProductDetailPage({
    params,
}: {
    params: { id: string };
}) {
    const [quantity, setQuantity] = useState<number>(1);
    const { data: product, isLoading } = useCustomQuery(
        "productDetail",
        params,
        (params?) => {
            if (params?.id) {
                return fetchProductDetail(params);
            }
            return Promise.resolve(undefined);
        }
    );

    return (
        <main className="flex flex-col min-h-screen items-center justify-start p-3 mt-28 md:mt-18 md:p-24">
            <div className="w-screen flex flex-col md:flex-row justify-center md:space-x-10">
                <Image
                    src={product?.data?.image || fallbackSrc}
                    fallbackSrc={fallbackSrc}
                    alt={product?.data?.name}
                    className="w-full aspect-square object-cover bg-no-repeat md:w-96"
                    radius="none"
                />
                <section className="w-full md:w-3/6 p-5 md:p-0">
                    <h1 className="text-3xl font-semibold">
                        {product?.data?.name}
                    </h1>
                    <p className="text-2xl">Rp {fromatRupiah(product?.data?.local_price)}</p>
                    <p>Tersedia {product?.data?.stock} Item</p>
                    <hr className="my-3" />
                    <Input
                        type="number"
                        label="Quantity"
                        placeholder="1"
                        defaultValue="1"
                        labelPlacement="outside"
                        className="w-20 mt-10 py-3 text-2xl"
                        size="lg"
                        width={100}
                        max={product?.data?.stock}
                        onClick={(e: any) => setQuantity(+e.target?.value)}
                    />
                    <hr className="my-3" />
                    <section className="flex justify-between items-center">
                        <p>Total</p>{" "}
                        <p className="text-xl font-semibold">
                            {fromatRupiah(
                                quantity * product?.data?.local_price
                            )}
                        </p>
                    </section>
                    <section className="flex space-x-5 items-center mt-5">
                        <Button variant="ghost" color="warning" radius="sm">
                            Tambah Ke Keranjang
                        </Button>
                        <Button variant="flat" color="primary" radius="sm">
                            Beli Langsung
                        </Button>
                    </section>
                </section>
            </div>
        </main>
    );
}
