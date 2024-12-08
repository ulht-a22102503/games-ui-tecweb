'use client'

import { Product } from "@/models/product"
import { fetcher } from "@/utils/utils"
import useSWR from "swr"
import { Button } from "@/components/ui/button"
import { Filters } from "./FiltersComponent"
import { useEffect, useState } from "react"
import ProductItemComponent from "../../../components/store/product_item"
import { useToast } from "@/hooks/use-toast"

interface ProductsComponentProps {
    filters: Filters
    addItemToCart: (product: Product) => void
}

export default function ProductsComponent(props: ProductsComponentProps) {
    const { data, error, isLoading } = useSWR<Product[], Error>('/api/deisishop/products', fetcher)
    const [filteredData, setFilteredData] = useState<Product[]>([])
    const { toast } = useToast()

    useEffect(() => {
        if (data === undefined) return

        // could use debounce here to avoid filtering on every key stroke
        const filtered = data.filter((product) => {
            return product.title.toLowerCase().includes(props.filters.search.toLowerCase()) &&
                (props.filters.category === "" || product.category === props.filters.category)
        }).sort((a, b) => props.filters.priceAsc ? a.price - b.price : b.price - a.price)


        setFilteredData(filtered)
    }, [props.filters, data])

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    if (data === undefined) return <div>failed to load</div>

    return <div className="mt-2 grid sm:grid-cols-2 gap-2">
        {filteredData.map((product) => (
            <ProductItemComponent key={product.id} product={product}
                action={<Button variant="outline" onClick={() => {
                    props.addItemToCart(product)
                    toast({
                        title: "Produto adicionado ao cesto",
                        description: `${product.title} foi adicionado ao cesto com sucesso!`,
                    })
                }}>Adicionar</Button>}
            />
        ))}
    </div>
}

