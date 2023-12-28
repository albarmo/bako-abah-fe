"use client";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductSlider = () => {
    return (
        <div className="w-full h-full py-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-base">Produk Bundling</h1>
                <Link href={"/"} className="text-orange-base">
                    Lihat Semua
                </Link>
            </div>
            <Swiper spaceBetween={50} slidesPerView={5} className="mt-5">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                    <SwiperSlide key={index} className="w-96 h-60 bg-white">
                        <Image
                            radius="none"
                            width="100%"
                            alt="Product Image"
                            className="w-full object-cover h-[250px] rounded"
                            src={"/images/bundling-1.jpg"}
                        />
                        <section className="px-4 py-2">
                            <h1 className="text-md font-normal line-clamp-2">
                                Product {item}
                            </h1>
                            <p className="text-default-500">Rp 20.000</p>
                        </section>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
export default ProductSlider;
