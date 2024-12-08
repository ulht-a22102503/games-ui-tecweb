import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Product } from "@/models/product"
import { JSX } from "react"

interface ProductItemProps {
    product: Product
    action: JSX.Element
}

export default function ProductItemComponent(props: ProductItemProps) {
    return (
        <Card className="h-100 relative">
            <CardHeader>
                <CardTitle>{props.product.title}</CardTitle>
                <CardDescription className="min-h-[110px]">{props.product.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center align-center">
                <img className="h-2/5 w-2/5 rounded-md border-2	p-5" src={props.product.image}></img>
            </CardContent>
            <CardFooter className="grid absolute bottom-0 right-0 z-1">
                {props.action}
                <span className="text-center bg-white rounded">{props.product.price.toFixed(2)}$</span>
            </CardFooter>
        </Card>
    )
}