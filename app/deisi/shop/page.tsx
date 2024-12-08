'use client'
import { useEffect, useState } from "react";
import CartComponent from "./CartComponent";
import FiltersComponent, { Filters } from "./FiltersComponent";
import ProductsComponent from "./ProductsComponent";
import { Product } from "@/models/product";
import { Store, ShoppingBasket } from 'lucide-react';

export default function DeiseShopPage() {
    const [filters, setFilters] = useState<Filters>({
        search: "",
        category: "",
        priceAsc: false
    })

    const [cart, setCart] = useState<Product[]>([])

    useEffect(() => {
        const cart = localStorage.getItem("cart")
        if (cart) {
            setCart(JSON.parse(cart))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return <div className="w-auto">
        <div className="mx-5 mb-10">
            <h2 className="text-6xl	font-bold text-center tracking-wide overline decoration-8 ">DEISI Shop</h2>
            <FiltersComponent
                filters={filters}
                changeFilters={(newFilters: Filters) => {
                    setFilters(newFilters)
                }} ></FiltersComponent>

            <h3 className="flex align-center  space-x-2 text-xl mt-5 font-bold text-center" id="products">
                <Store className="h-6 w-6 inline-block mr-2" />
                Produtos
            </h3>
            <ProductsComponent
                filters={filters}
                addItemToCart={(product: Product) => {
                    setCart((prevCart) => [...prevCart, product]);
                }}></ProductsComponent>


            <h3 className="flex align-center  space-x-2 text-xl mt-5 font-bold text-center" id="cart">
                <ShoppingBasket className="h-6 w-6 inline-block mr-2" />
                Cesto
            </h3>

            <CartComponent cart={cart}
                clearCart={() => {
                    setCart([])
                }}
                removeItemFromCart={(product: Product) => {
                    setCart(cart.filter((item) => item.id !== product.id))
                }} ></CartComponent>
        </div>
    </div >
} 