"use client";
import { Button, Input, Image } from "@nextui-org/react";
import { fetchProductDetail } from "@/helpers/product_server";
import useCustomQuery from "@/hooks/useCustomQuery";
import { useState } from "react";
import { fromatRupiah } from "@/utils/func";

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
        <main className="flex flex-col min-h-screen items-center justify-between p-3 mt-28 md:mt-18 md:p-24">
            {/* HERO */}
            <div className="w-screen flex flex-col md:flex-row justify-center md:space-x-10">
                <Image
                    src={`${process.env.apiUrl}/${product?.data?.image}`}
                    alt={product?.data?.name}
                    className="w-full aspect-square"
                    width={"100vw"}
                    radius="none"
                />
                <section className="w-full md:w-3/6 p-5 md:p-0">
                    <h1 className="text-xl font-semibold">
                        {product?.data?.name}
                    </h1>
                    <p>{fromatRupiah(product?.data?.local_price)}</p>
                    <p>Tersedia {product?.data?.stock} Item</p>
                    <hr className="my-3" />
                    <Input
                        type="number"
                        label="Quantity"
                        placeholder="1"
                        defaultValue="1"
                        labelPlacement="outside"
                        className="w-20 mt-10 py-3 text-xl"
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
            {/* Similar Products */}
            {/* <ProductSlider /> */}
        </main>
    );
}
