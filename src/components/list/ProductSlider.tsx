"use client";
import { Image } from "@nextui-org/react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductSlider = () => {
    return (
        <div className="w-full h-full py-8">
            <h1 className="text-2xl font-base">Produk Bundling</h1>
            <Swiper spaceBetween={50} slidesPerView={4} className="mt-5">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                    <SwiperSlide key={index} className="w-96 h-60 bg-gray-300">
                        <Image
                            radius="none"
                            width="100%"
                            alt="Product Image"
                            className="w-full object-cover h-[250px]"
                            src={"/images/bundling-1.jpg"}
                        />
                        <h1>Product {item}</h1>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
export default ProductSlider;
