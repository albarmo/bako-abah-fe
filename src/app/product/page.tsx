"use client";
import ProductList from "@/components/list/ProductList";
import ProductSlider from "@/components/list/ProductSlider";
import { fetchProductList } from "@/helpers/product_server";
import useCustomQuery from "@/hooks/useCustomQuery";
import { useState } from "react";

export default function ProductPage() {
    const [params, setParams] = useState<ParamsType>({
        page: 1,
        limit: 10,
        field: "",
        sort: "desc",
        keyword: "",
        type: 1,
    });

    const { data, isLoading } = useCustomQuery(
        "listUsersAccess",
        params,
        fetchProductList
    );

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-3 mt-20 md:mt-18 md:p-24">
            <ProductList data={data?.data} />
            {/* All Products */}
            <ProductList data={data?.data} />
            {/* Accesories Slider */}
            <ProductSlider data={data?.data} />
        </main>
    );
}
