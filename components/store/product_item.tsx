import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Game } from "@/models/product"

interface ProductItemProps {
    game: Game 
}

export default function GameItemComponent(props: ProductItemProps) {
    return (
        <Card className="h-100 relative">
            <CardHeader>
                <CardTitle>{props.game.title}</CardTitle>
                <CardDescription className="min-h-[110px]">{props.game.description}</CardDescription>
            </CardHeader>
            
        </Card>
    )
}