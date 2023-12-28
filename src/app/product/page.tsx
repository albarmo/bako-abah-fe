import ProductList from "@/components/list/ProductList";
import ProductSlider from "@/components/list/ProductSlider";

export default function ProductPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-3 mt-20 md:mt-18 md:p-24">
            <ProductList />
            {/* All Products */}
            <ProductList />
            {/* Accesories Slider */}
            <ProductSlider />
        </main>
    );
}
