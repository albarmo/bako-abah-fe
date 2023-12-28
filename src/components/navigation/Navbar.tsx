import React from "react";
import {
    HeartIcon,
    Bars2Icon,
    ShoppingBagIcon,
    PhoneIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@nextui-org/react";

const Navbar = () => {
    return (
        <nav className="w-screen bg-white fixed top-0 z-50">
            <div className="flex justify-between items-center px-20 h-28">
                <Image
                    src="/assets/Tembakau-Abah-Logo.svg"
                    alt="Toko Tembakau Abah"
                    width={230}
                    height={230}
                    className="-rotate-2 pointer-events-none"
                />
                <Input
                    type="text"
                    placeholder="Cari produk tembakau seleramu"
                    startContent={<MagnifyingGlassIcon className="h-6 w-6" />}
                    variant="faded"
                    className="rounded w-3/5 text-xl font-light"
                />
                <section className="flex space-x-12">
                    <Link href={"/wishlist"}>
                        <HeartIcon className="h-6 w-6" />
                    </Link>
                    <Link href={"/Cart"}>
                        <ShoppingBagIcon className="h-6 w-6 " />
                    </Link>
                    <Bars2Icon className="h-6 w-6" />
                </section>
            </div>
            <div className="border-t flex justify-between items-center px-20 p-4">
                <ul className="flex space-x-20">
                    <li>Mole</li>
                    <li>Aksesoris</li>
                    <li>Grosir</li>
                    <li>Premium</li>
                    <li>Dugong</li>
                </ul>
                <Link href="#" className="flex font-4xl">
                    <PhoneIcon className="h-6 w-6" />
                    <h2>+62 0812-4555-2365</h2>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
