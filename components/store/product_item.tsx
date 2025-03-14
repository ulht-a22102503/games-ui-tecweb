import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Product } from "@/models/product"

interface ProductItemProps {
    product: Product // TODO
}

export default function GameItemComponent(props: ProductItemProps) {
    return (
        <Card className="h-100 relative">
            <CardHeader>
                <CardTitle>{props.product.title}</CardTitle>
                <CardDescription className="min-h-[110px]">{props.product.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center align-center">
                <img className="h-2/5 w-2/5 rounded-md border-2	p-5" src={props.product.image}></img>
            </CardContent>
        </Card>
    )
}