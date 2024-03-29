"use client";
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/24/outline";
import ProductList from "@/components/list/ProductList";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import ProductSlider from "@/components/list/ProductSlider";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { fetchProductList } from "@/helpers/product_server";
import useCustomQuery from "@/hooks/useCustomQuery";
import { useState } from "react";
import { fetchStoreList } from "@/helpers/store_server";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function Home() {
    const [params, setParams] = useState<Params>({
        limit: 25,
        page: 1,
        filter: { is_active: true },
        sort: "name",
    })
    const {
        data: allProducts,
    } = useCustomQuery('productList', params, fetchProductList);

    const {
        data: latestProduct,
    } = useCustomQuery('latestProduct', {
        limit: 5,
        page: 1,
        filter: { is_active: true },
        sort: "createdAt",
    }, fetchProductList);

    const {
        data: bundlings,
    } = useCustomQuery('bundlings', {
        limit: 10,
        page: 1,
        filter: { is_active: true, category_id: "dd9f8b80-7c5a-4b1d-b8f2-2238e54443c0" },
        sort: "createdAt",
    }, fetchProductList);


    const {
        data: accesories,
    } = useCustomQuery('accsories', {
        limit: 10,
        page: 1,
        filter: { is_active: true, category_id: "dd9f8b80-7c5a-4b1d-b8f2-2238e54443c0" },
        sort: "createdAt",
    }, fetchProductList);

    const {
        data: store,
    } = useCustomQuery('storeList', {
        page: 1,
        limit: 10,
        sort: 'name',
    }, fetchStoreList);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between space-y-8 p-3 mt-16 md:mt-18 md:p-24">
            {/* HERO */}
            <div className="w-screen">
                <Image
                    src={
                        "https://cdn.cigarcountry.com/wp-content/uploads/2022/08/09014512/CUBAN.jpg"
                    }
                    alt={"Promo Tembakau Abah"}
                    width={500}
                    height={500}
                    className="w-screen"
                />
                <section>
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-5 -mt-12 px-5 lg:px-10">
                        {[1, 2, 3, 4].map((store, index) => (
                            <li
                                key={index}
                                className="bg-white rounded-sm p-4 text-center md:text-left flex flex-col md:flex-row items-center space-x-3 h-auto md:h-24 shadow-sm"
                            >
                                <HomeIcon className="w-10 h-10" />
                                <span>
                                    <h1 className="text-lg font-semibold">
                                        Delivery Order
                                    </h1>
                                    <h2 className="leading-tight">
                                        Pengiriman pesanan langsung kerumah
                                    </h2>
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
            {/* Latest Product */}
            <ProductList title="Produk Terbaru" data={latestProduct?.data} hasSeeAll={false} />
            {/* Store */}
            <section className="w-full block">
                <h1 className="text-2xl font-base">Toko Abah</h1>
                {/* Desktop View */}
                <div className="hidden md:block">
                    <Swiper spaceBetween={10} slidesPerView={2.8}>
                        {store?.data?.rows?.map((store: any) => (
                            <SwiperSlide key={store?.id} className="cursor-pointer">
                                <Card
                                    shadow="none"
                                    className="w-auto mt-5 shadow-sm"
                                >
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                        <h1 className="font-bold text-large">
                                            {store?.name}
                                        </h1>
                                        <p className="text-tiny uppercase font-bold">
                                            {store?.operational_hour}
                                        </p>
                                        <p className="text-default-500 my-2 leading-tight">
                                            {store?.address}
                                        </p>
                                        <p className="text-default-500 my-2 leading-tight">{store?.admin_phone_number}</p>
                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2 relative">
                                        <Link
                                            target="_blank"
                                            href={store?.map_url}
                                        >
                                            <Button
                                                className="mt-2 w-full"
                                                variant="solid"
                                                radius="sm"
                                                color="warning"
                                            >
                                                Meluncur
                                            </Button>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* Mobile View */}
                <div className="block md:hidden">
                    <Swiper spaceBetween={10} slidesPerView={1.8}>
                        {store?.data?.rows?.map((store: any) => (
                            <SwiperSlide key={store?.id} className="cursor-pointer">
                                <Card
                                    shadow="none"
                                    className="w-auto mt-5 shadow-sm"
                                >
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                        <h1 className="font-bold text-large">
                                            {store?.name}
                                        </h1>
                                        <p className="text-tiny uppercase font-bold">
                                            {store?.operational_hour}
                                        </p>
                                        <p className="text-default-500 my-2 leading-tight">
                                            {store?.address}
                                        </p>
                                        <p className="text-default-500 my-2 leading-tight">{store?.admin_phone_number}</p>
                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2 relative">
                                        <Link
                                            target="_blank"
                                            href={store?.map_url}
                                        >
                                            <Button
                                                className="mt-2 w-full"
                                                variant="solid"
                                                radius="sm"
                                                color="warning"
                                            >
                                                Meluncur
                                            </Button>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            {/* All Products */}
            <ProductList title="Produk" data={allProducts?.data} />
            {/* Produk Bundling */}
            <ProductSlider title="Produk Bundling" data={bundlings?.data} />
            {/* Aksesories */}
            <ProductList title="Aksesoris" data={accesories?.data} />
            {/* Brands */}
            <div className="w-full">
                <h1 className="text-2xl font-base">Brand Tembakau Pilihan</h1>
                <section className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
                    {[1, 2, 3, 4, 5, 6, 6, 7, 78, 8].map((item, index) => (
                        <article
                            key={index}
                            className="cursor-pointer h-20 bg-gray-200 flex  justify-center items-center grayscale hover:grayscale-0 transition-all transition-transform-opacity delay-75"
                        >
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Backwoods_%28cigar_brand%29_logo.svg/2560px-Backwoods_%28cigar_brand%29_logo.svg.png"
                                alt="sa"
                                width={100}
                                height={100}
                            />
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
}
