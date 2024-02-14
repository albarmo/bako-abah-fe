"use client";
import Image from "next/image";
import { Button, Checkbox } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useCustomQuery from "@/hooks/useCustomQuery";
import { fetchUserCarts } from "@/helpers/cart_server";
import { fromatRupiah } from "@/utils/func";

export default function CheckoutPage() {
    const router = useRouter();
    const [params, setParams] = useState<ParamsType>({
        page: 1,
        limit: 10,
        field: "",
        sort: "desc",
        keyword: "",
        type: 1,
    });

    const { data, isLoading } = useCustomQuery(
        "cartlist",
        params,
        fetchUserCarts
    );

    console.log(data)
    // const cartData = data?.data[0];

    return (
        <main className="flex flex-col items-center justify-between p-3 mt-32 md:mt-18 md:p-24">
            {/* <div className="w-full">
                <h1 className="text-2xl font-semibold w-full text-left">
                    Cart
                </h1>
                <p>Checlist produk yang ingin anda lanjutkan ke pembayaran</p>
            </div> */}
            {/* <div className="w-full h-min flex flex-col md:flex-row justify-center md:space-x-10 mt-5">
                <div className="grid gap-y-2">
                    {cartData?.items?.map((cartItem: any) => (
                        <article
                            key={cartItem?.id}
                            className="w-full flex justify-between bg-gray-100"
                        >
                            <section className="flex space-x-3">
                                <Image
                                    src={
                                        "data:image/jpeg;base64,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"
                                    }
                                    alt={"Promo Tembakau Abah"}
                                    width={100}
                                    height={100}
                                    className="w-20 h-20 aspect-square"
                                />
                                <section className="leading-tight py-1">
                                    <h1 className="text-lg font-semibold">
                                        {cartItem?.product?.name}
                                    </h1>
                                    <p>
                                        Rp{" "}
                                        {fromatRupiah(
                                            cartItem?.product?.local_price
                                        )}{" "}
                                        {cartItem?.quantity} item
                                    </p>
                                </section>
                            </section>
                            <Button variant="light" size="sm" color="danger">
                                Hapus
                            </Button>
                            <Checkbox value="buenos-aires" />
                        </article>
                    ))}
                </div>
                <section className="w-full h-min md:w-2/6 bg-gray-100 p-5">
                    <h1 className="text-xl font-semibold">Ringkasan Pesanan</h1>
                    <hr className="my-3" />
                    {cartData?.items?.map((cartItem: any) => (
                        <section
                            key={cartItem?.id}
                            className="flex justify-between items-center"
                        >
                            <p>{cartItem?.product?.name}</p>
                            <p className="text-sm">
                                {cartItem?.quantity} item
                            </p>{" "}
                            <p>Rp {fromatRupiah(cartItem?.subtotal)}</p>
                        </section>
                    ))}

                    <hr className="my-3" />

                    <section className="flex justify-between items-center">
                        <p> Total</p>{" "}
                        <p className="text-xl font-semibold">
                            Rp {fromatRupiah(cartData?.subtotal)}
                        </p>
                    </section>
                    <section className="flex space-x-5 items-center mt-5">
                        <Button
                            variant="flat"
                            color="warning"
                            radius="sm"
                            className="w-full"
                            onClick={() => router.push("/checkout")}
                        >
                            Beli Langsung
                        </Button>
                    </section>
                </section>
            </div> */}
        </main>
    );
}
