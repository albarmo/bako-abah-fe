import React, { useEffect, useState } from "react";
import {
    Bars2Icon,
    ShoppingBagIcon,
    MagnifyingGlassIcon,
    XMarkIcon,
    PhoneIcon,
    UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Image } from "@nextui-org/react";
import { Badge, cn } from "@nextui-org/react";
import Drawer from "./Drawer";
import { usePathname, useRouter } from "next/navigation";
import useModalDisclosure from "@/hooks/useModalDisclosure";
import useFocus from "@/hooks/useFocus";
import useCustomQuery from "@/hooks/useCustomQuery";
import { fetchCategoryList } from "@/helpers/category_server";
import { fetchProductList } from "@/helpers/product_server";
import { fromatRupiah } from "@/utils/func";
import { debounce } from "@/utils/debouncer";

type TParamsSearchProduct = {
    limit: number;
    page: number;
    sort: string;
    filter: any;
};


const Navbar = () => {
    const router = useRouter();
    const [inputRef, setInputFocus] = useFocus();
    const [isMinimized, setIsMinimized] = useState<boolean>(false);

    const [params, setParams] = useState<ParamsType>({
        page: 1,
        limit: 8,
        field: "",
        sort: "desc",
        keyword: "",
        type: 1,
    });

    const { data: category, isLoading: isLoadingCategory } = useCustomQuery(
        "categoryList",
        params,
        fetchCategoryList
    );


    const [paramsSearch, setParamsSearch] = React.useState<TParamsSearchProduct>({
        limit: 5,
        page: 1,
        filter: { name: "", is_active: true },
        sort: "name",
    });

    const { data: product, isLoading: isLoadingProduct } = useCustomQuery(
        "searchProduct",
        paramsSearch,
        (paramsSearch?: TParamsSearchProduct) => {
            if (paramsSearch?.filter?.name) {
                return fetchProductList(paramsSearch);
            }
            return Promise.resolve(undefined);
        }
    );


    const handleSearch = debounce(
        (keyword: string) =>
            setParamsSearch((prevParams) => ({
                ...prevParams,
                filter: { ...paramsSearch.filter, name: keyword },
                limit: 10,
                page: 1,
            })),
        1000
    );


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

    const pathname = usePathname();
    const { isOpen, open, close } = useModalDisclosure();
    const {
        isOpen: isSearchMode,
        open: openSearchMode,
        close: closeSearchMode,
    } = useModalDisclosure();

    const [currentSection, setCurrentSection] = useState<string>("/");

    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest("#drawer-navigation")) {
            close();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    return (
        <header>
            <Drawer
                isOpen={isOpen}
                close={close}
                active={""}
                setCurrentSection={setCurrentSection}
            />
            <nav
                className={cn(
                    isMinimized ? "h-20 lg:h-28" : "h-auto",
                    "w-screen bg-white fixed top-0 z-40",
                    "transition-all duration-100 ease-out"
                )}
            >
                {/* Desktop */}
                <div className="hidden lg:flex justify-between items-center px-20 h-28">
                    <Link href="/">
                        <Image
                            src="/assets/web-logo.svg"
                            alt="Toko Tembakau Abah"
                            width={180}
                            height={180}
                            className="pointer-events-none cursor-pointer"
                        />
                    </Link>
                    <div className="relative w-3/5">
                        <MagnifyingGlassIcon className="h-6 w-6 absolute top-2 left-2" />
                        <input
                            type="text"
                            placeholder="Cari produk tembakau seleramu"
                            className="text-md font-light w-full pl-10 pr-5 py-2 bg-gray-100 rounded-sm"
                            onChange={(e) =>
                                handleSearch(e.target.value)
                            }
                        />
                        <div
                            className={cn(
                                paramsSearch.filter?.name ? "block" : "hidden",
                                "absolute top-12 w-full bg-white shadow p-5"
                            )}
                        >
                            {product?.data?.rows?.map((product: any) => (
                                <article
                                    key={product?.id}
                                    className="flex space-x-3 mb-2 w-full cursor-pointer"
                                    onClick={() =>
                                        router.push(`/product/${product?.id}`)
                                    }
                                >
                                    <Image
                                        radius="sm"
                                        alt={product?.name}
                                        className="w-full object-cover"
                                        src={`${process.env.apiUrl}${product?.image}`}
                                        width={50}
                                        height={50}
                                    />
                                    <section>
                                        <h1>{product?.name}</h1>
                                        <p className="text-lg text-default-500">
                                            {fromatRupiah(product?.local_price)}
                                        </p>
                                    </section>
                                </article>
                            ))}
                        </div>
                    </div>
                    <section className="flex space-x-5">
                        <Link href={"/sign-in"}>
                            <UserIcon className="h-6 w-6" />
                        </Link>
                        <Link href={"/cart"}>
                            <ShoppingBagIcon className="h-6 w-6 " />
                        </Link>
                        <Bars2Icon className="h-6 w-6 block md:hidden" />
                    </section>
                </div>
                {/* Mobile */}
                <div className="flex lg:hidden justify-between items-center px-5 h-20">
                    <MagnifyingGlassIcon
                        className="h-6 w-6 cursor-pointer"
                        onClick={async () => {
                            await openSearchMode();
                            await setInputFocus();
                        }}
                    />
                    <Link href="/">
                        <Image
                            src="/assets/web-logo.svg"
                            alt="Toko Tembakau Abah"
                            width={150}
                            height={150}
                            className="pointer-events-none cursor-pointer"
                        />
                    </Link>
                    <section className="flex space-x-5">
                        <Link
                            href={"/cart"}
                            className="relative hidden md:block"
                        >
                            <Badge color="warning" content={5} shape="circle">
                                <ShoppingBagIcon className="h-6 w-6 " />
                            </Badge>
                        </Link>
                        <Bars2Icon className="h-6 w-6" onClick={() => open()} />
                    </section>
                </div>
                <div
                    className={cn(
                        isSearchMode ? "block" : "hidden",
                        "w-full",
                        "transition-all duration-100 ease-out"
                    )}
                >
                    <div className="relative w-full bg-white">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Cari produk tembakau seleramu"
                            className="text-md font-light w-full px-5 py-2 bg-gray-100 rounded-sm"
                            autoFocus
                            onChange={(e) =>
                                handleSearch(e.target.value)
                            }
                        />
                        <XMarkIcon
                            className="h-6 w-6 absolute top-2 right-2 cursor-pointer"
                            onClick={() => closeSearchMode()}
                        />
                        <div
                            className={cn(
                                paramsSearch.filter?.name ? "block" : "hidden",
                                "absolute w-full min-h-20 bg-white shadow p-5 z-40"
                            )}
                        >
                            {product?.data?.rows?.map((product: any) => (
                                <article
                                    key={product?.id}
                                    className="flex space-x-3 mb-2 w-full cursor-pointer"
                                    onClick={() =>
                                        router.push(`/product/${product?.id}`)
                                    }
                                >
                                    <Image
                                        radius="sm"
                                        alt={product?.name}
                                        className="w-full object-cover"
                                        src={`${process.env.apiUrl}${product?.image}`}
                                        width={50}
                                        height={50}
                                    />
                                    <section>
                                        <h1>{product?.name}</h1>
                                        <p className="text-lg text-default-500">
                                            {fromatRupiah(product?.local_price)}
                                        </p>
                                    </section>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    className={cn(
                        isMinimized ? "opacity-0" : "opacity-100 visible",
                        "transition-all duration-100 ease-out",
                        "w-full h-12 border-t flex justify-between items-center px-5 md:px-18 divide-x-1 space-x-5"
                    )}
                >
                    <Link
                        href={"/cart"}
                        className="relative md:hidden flex space-x-5 "
                    >
                        <Badge color="warning" content={5} shape="circle">
                            <ShoppingBagIcon className="h-6 w-6 " />
                        </Badge>
                    </Link>
                    <Link
                        href={"tel:081245552365"}
                        className="relative md:flex items-center hidden space-x-5  w-80"
                    >
                        <PhoneIcon className="h-6 w-6 " />
                        +62 0812-4555-2365
                    </Link>
                    <ul className="flex items-center px-5 space-x-16 lg:space-x-20 overflow-x-scroll ">
                        {category?.data?.rows?.map((category: any) => (
                            <li
                                key={category?.id}
                                className="cursor-pointer w-max"
                                onClick={() =>
                                    router.push(
                                        `/category/${category?.id}`
                                    )
                                }
                            >
                                {category?.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
