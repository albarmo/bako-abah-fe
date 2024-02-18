"use client";
import { Image, Card, CardBody, CardFooter, cn } from "@nextui-org/react";
import useCustomQuery from "@/hooks/useCustomQuery";
import ProductList from "@/components/list/ProductList";
import { fetchCategoryDetail } from "@/helpers/category_server";
import { useRouter } from "next/navigation";
import { fromatRupiah } from "@/utils/func";

export default function ProductDetailPage({
    params,
}: {
    params: { id: string };
}) {
    const router = useRouter()
    const { data: category, isLoading } = useCustomQuery(
        "productDetail",
        params,
        (params?) => {
            if (params?.id) {
                return fetchCategoryDetail(params);
            }
            return Promise.resolve(undefined);
        }
    );

    return (
        <main className="flex flex-col min-h-screen items-start justify-start p-3 mt-28 md:mt-18 md:p-24">
            <h1 className={cn(isLoading && "animate-pulse", "text-3xl font-bold")}>{category?.data?.name || "Loading..."}</h1>
            <div className="gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-5">
                {category?.data?.products?.map((item: any) => (
                    <Card
                        key={item?.id}
                        shadow="sm"
                        radius="sm"
                        isPressable
                        onClick={() => router.push(`/product/${item?.id}`)}
                    >
                        <CardBody className="w-full bg-gray-200 max-h-42 overflow-hidden p-0">
                            <Image
                                src={item?.image}
                                alt={item?.name}
                                className="w-full h-full aspect-square object-cover"
                                radius="none"
                            />
                        </CardBody>
                        <CardFooter className="text-small text-left block">
                            <h1 className="text-2xl font-normal line-clamp-2">
                                {item?.name}
                            </h1>
                            <p className="text-xl text-default-500">
                                Rp {fromatRupiah(item?.local_price)}
                            </p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </main>
    );
}
