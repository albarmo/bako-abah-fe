import Image from "next/image";
import { HomeIcon } from "@heroicons/react/24/outline";
import ProductList from "@/components/list/ProductList";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import ProductSlider from "@/components/list/ProductSlider";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 mt-18">
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
                    <ul className="flex w-full justify-around -mt-12 px-20 space-x-10">
                        {[1, 2, 3, 4].map((store, index) => (
                            <li
                                key={index}
                                className="bg-white rounded-sm p-5 flex items-center space-x-3 h-24 shadow-sm"
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
            {/* Bundling */}
            <ProductList />
            {/* Store */}
            <section className="w-full block">
                <h1 className="text-2xl font-base">Toko Abah</h1>
                <div className="grid grid-cols-3 gap-5">
                    {[1, 2, 3].map((store, index) => (
                        <Card key={index} className="py-4 w-auto mt-5">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                <h4 className="font-bold text-large">
                                    Store {store}
                                </h4>
                                <p className="text-tiny uppercase font-bold">
                                    Daily Mix
                                </p>
                                <small className="text-default-500 my-2">
                                    Jl. RS. Fatmawati Raya, RT.8/RW.4, Cilandak
                                    Bar., Kec. Cilandak, Kota Jakarta Selatan,
                                    Daerah Khusus Ibukota Jakarta 12430
                                </small>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                                <Image
                                    alt="Card background"
                                    className="object-cover rounded-lg w-full"
                                    src="/images/store-1.png"
                                    width={250}
                                    height={270}
                                />
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </section>
            {/* All Products */}
            <ProductList />
            {/* Accesories Slider */}
            <ProductSlider />
            {/* Brands */}
            <div className="w-full">
                <h1 className="text-2xl font-base">Brand Tembakau Pilihan</h1>
                <section className="grid grid-cols-4 gap-5 mt-5">
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
