"use client";
import React from "react";
import ProductList from "@/components/list/ProductList";
import ProductSlider from "@/components/list/ProductSlider";
import { fetchProductList } from "@/helpers/product_server";
import useCustomQuery from "@/hooks/useCustomQuery";
import { debounce } from "@/utils/debouncer";
import { Button, cn } from "@nextui-org/react";

type TParamsSearchProduct = {
    limit: number;
    page: number;
    sort: string;
    filter: any;
};

export default function ProductPage() {
    const [paramsSearch, setParamsSearch] = React.useState<TParamsSearchProduct>({
        limit: 25,
        page: 1,
        filter: { name: "", is_active: true },
        sort: "createdAt",
    });

    const { data, isLoading } = useCustomQuery(
        "latestProducts",
        paramsSearch,
        fetchProductList
    );

    const handleSearch = debounce(
        (keyword: string) =>
            setParamsSearch((prevParams) => ({
                ...prevParams,
                filter: { ...paramsSearch.filter, name: keyword },
                page: 1,
            })),
        1000
    );

    const handleLoadMore = debounce(
        () =>
            setParamsSearch((prevParams) => ({
                ...prevParams,
                limit: prevParams.limit + 10,
            })),
        1000
    );

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-3 mt-20 md:mt-18 md:p-24">
            <div className="w-full flex justify-between items-center">
                <h1 className="text-2xl font-base">Semua Produk</h1>
                <div
                    className={cn(
                        "w-1/2",
                        "transition-all duration-100 ease-out"
                    )}
                >
                    <div className="relative w-full bg-white">
                        <input
                            type="text"
                            placeholder="Cari produk tembakau seleramu"
                            className="text-md font-light w-full px-5 py-2 bg-gray-100 rounded-sm"
                            autoFocus
                            onChange={(e) =>
                                handleSearch(e.target.value)
                            }
                        />
                    </div>
                </div>
            </div>
            {/* All Products */}
            <ProductList data={data?.data} title={""} hasSeeAll={false} />
            <Button onClick={() => handleLoadMore()}>Lihat Lebih Banyak</Button>
        </main>
    );
}
