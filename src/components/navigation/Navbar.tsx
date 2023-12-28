import React, { useEffect, useRef, useState } from "react";
import {
    HeartIcon,
    Bars2Icon,
    ShoppingBagIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { Badge, cn } from "@nextui-org/react";

const Navbar = () => {
    const [isMinimized, setIsMinimized] = useState<boolean>(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setIsMinimized(true);
            } else {
                setIsMinimized(false);
            }
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={cn(
                isMinimized ? "h-20 lg:h-28" : "h-auto",
                "w-screen bg-white fixed top-0 z-50",
                "transition-all duration-100 ease-out"
            )}
        >
            {/* Desktop */}
            <div className="hidden lg:flex justify-between items-center px-20 h-28">
                <Image
                    src="/assets/web-logo.svg"
                    alt="Toko Tembakau Abah"
                    width={180}
                    height={180}
                    className="pointer-events-none"
                />
                <div className="relative w-3/5">
                    <MagnifyingGlassIcon className="h-6 w-6 absolute top-2 left-2" />
                    <input
                        type="text"
                        placeholder="Cari produk tembakau seleramu"
                        className="text-md font-light w-full pl-10 pr-5 py-2 bg-gray-100 rounded-sm"
                    />
                </div>
                <section className="flex space-x-12">
                    <Link href={"/wishlist"}>
                        <HeartIcon className="h-6 w-6" />
                    </Link>
                    <Link href={"/Cart"}>
                        <ShoppingBagIcon className="h-6 w-6 " />
                    </Link>
                    {isMinimized && <Bars2Icon className="h-6 w-6" />}
                </section>
            </div>
            {/* Mobile */}
            <div className="flex lg:hidden justify-between items-center px-5 h-20">
                <MagnifyingGlassIcon className="h-6 w-6" />
                <Image
                    src="/assets/web-logo.svg"
                    alt="Toko Tembakau Abah"
                    width={150}
                    height={150}
                    className="pointer-events-none"
                />
                <section className="flex space-x-5">
                    <Link href={"/Cart"} className="relative">
                        <Badge color="warning" content={5} shape="circle">
                            <ShoppingBagIcon className="h-6 w-6 " />
                        </Badge>
                    </Link>
                    <Bars2Icon className="h-6 w-6" />
                </section>
            </div>
            <div
                className={cn(
                    isMinimized ? "opacity-0" : "opacity-100 visible",
                    "w-full h-12 overflow-x-scroll border-t flex justify-between items-center px-20",
                    "transition-all duration-100 ease-out"
                )}
            >
                <ul className="flex space-x-16 lg:space-x-20">
                    <li>Mole</li>
                    <li>Aksesoris</li>
                    <li>Grosir</li>
                    <li>Premium</li>
                    <li>Dugong</li>
                    <li>Aksesoris</li>
                    <li>Grosir</li>
                    <li>Premium</li>
                    <li>Dugong</li> <li>Aksesoris</li>
                    <li>Grosir</li>
                    <li>Premium</li>
                    <li>Dugong</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
