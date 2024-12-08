'use client'

import { SelectComponet } from "@/components/select-component"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { fetcher } from "@/utils/utils"
import useSWR from "swr"

export interface Filters {
    search: string
    category: string
    priceAsc: boolean
}

export interface FiltersProps {
    filters: Filters
    changeFilters: (newFilters: Filters) => void
}

export default function FiltersComponent(props: FiltersProps) {

    const { data: categories } = useSWR<string[], Error>('/api/deisishop/categories', fetcher)

    return (<Card className="mt-10">
        <CardHeader>
            <CardTitle>Filters</CardTitle>
            <CardDescription>Select Filters</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap">
            <Input onInput={
                (e) => {
                    props.changeFilters({
                        ...props.filters,
                        search: (e.target as HTMLInputElement).value
                    })
                }
            } className="w-100" placeholder="Search" id="search" />
            <SelectComponet
                handleChange={
                    (value) => {
                        props.changeFilters({
                            ...props.filters,
                            category: value
                        })
                    }
                }
                placeholder="Selecionar Categoria" items={categories || []}></SelectComponet>
            <SelectComponet
                handleChange={
                    (value) => {
                        props.changeFilters({
                            ...props.filters,
                            priceAsc: value === "Asc"
                        })
                    }
                }
                placeholder="Ordenar Preço" items={["Asc", "Desc"]}></SelectComponet>

        </CardContent>

    </Card>
    )
}