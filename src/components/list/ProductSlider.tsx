"use client";
import { fromatRupiah } from "@/utils/func";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
interface IPropsProductSlider {
    title: string,
    data: { rows: any[] } | undefined
}
const ProductSlider: React.FC<IPropsProductSlider> = ({ title, data }) => {
    const router = useRouter();
    return (
        <div className="w-full h-full py-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-base">{title}</h1>
                <Link href={"/product"} className="text-orange-base">
                    Lihat Semua
                </Link>
            </div>
            {/* Desktop View */}
            <div className="mt-5 hidden md:block ">
                <Swiper spaceBetween={10} slidesPerView={4.8}>
                    {data?.rows?.map((product, index) => (
                        <SwiperSlide
                            key={index}
                            className="bg-white cursor-pointer"
                            onClick={() => router.push(`/product/${product?.id}`)}
                        >
                            <Image
                                radius="none"
                                width="100%"
                                alt="Product Image"
                                className=" object-cover  rounded"
                                src={`${product?.image}`}
                            />
                            <section className="px-4 py-2">
                                <h1 className="text-md font-normal line-clamp-2">
                                    {product?.name}
                                </h1>
                                <p className="text-default-500">
                                    {fromatRupiah(product?.local_price)}
                                </p>
                            </section>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* Mobile View */}
            <div className="mt-5 block md:hidden ">
                <Swiper spaceBetween={10} slidesPerView={3.4}>
                    {data?.rows?.map((product: any, index: number) => (
                        <SwiperSlide
                            key={index}
                            className="bg-white cursor-pointer"
                            onClick={() => router.push(`/product/${product?.id}`)}
                        >
                            <Image
                                radius="none"
                                width="100%"
                                alt="Product Image"
                                className=" object-cover rounded"
                                src={`${process.env.apiUrl}/${product?.image}`}
                            />
                            <section className="px-4 py-2">
                                <h1 className="text-md font-normal line-clamp-2">
                                    {product?.name}
                                </h1>
                                <p className="text-default-500"> {fromatRupiah(product?.local_price)}</p>
                            </section>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
export default ProductSlider;
