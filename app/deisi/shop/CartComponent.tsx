'use client'

import { BuyRequest, BuyResponse, Product } from "@/models/product"
import ProductItemComponent from "../../../components/store/product_item"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, Trash2 } from 'lucide-react';

interface CartProps {
    cart: Product[]
    removeItemFromCart: (product: Product) => void
    clearCart: () => void
}

export default function CartComponent(props: CartProps) {
    const { toast } = useToast()
    const [response, setResponse] = useState<BuyResponse>()

    const [coupom, setCoupom] = useState("")
    const [isStudent, setIsStudent] = useState(false)

    const [open, setOpen] = useState(false);

    const buy = () => {
        fetch("/api/deisishop/buy", {
            method: "POST",
            body: JSON.stringify({
                products: props.cart.map(product => product.id),
                name: "",
                student: isStudent,
                coupon: coupom
            } as BuyRequest),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        }).then((response) => {
            setResponse(response as BuyResponse)
            setOpen(true)
            props.clearCart()
        }).catch((error) => {
            toast({
                description: "Erro ao comprar, tente novamente mais tarde",
            })
        })
    }

    return <div className="mt-2">
        <Card className="h-100">
            <CardHeader>
                <CardTitle>Cesto Resumo</CardTitle>
            </CardHeader>

            {props.cart.length === 0 && <div className="m-10">
                <Alert >
                    <Info className="h-4 w-4" />
                    <AlertTitle>Sem Produtos!</AlertTitle>
                    <AlertDescription>
                        Adiciona produtos ao cesto para poderes comprar!
                    </AlertDescription>
                </Alert></div>}

            {props.cart.length > 0 && <>
                <CardContent>
                    <p>Produtos no Cesto: {props.cart.length}</p>
                    <p>Custo Total: {props.cart.reduce((partialSum, a) => partialSum + a.price, 0).toFixed(2)}$</p>

                    <Button variant="destructive" onClick={props.clearCart}>Esvaziar Carrinho</Button>

                    <div className="mt-10 grid sm:grid-cols-2 gap-2">
                        {props.cart.map((product, i) => (
                            <ProductItemComponent key={i} product={product}
                                action={<Button variant="destructive" onClick={() => props.removeItemFromCart(product)}>
                                    <Trash2 className="h-4 w-4" />
                                </Button>}
                            />
                        ))}
                    </div>
                </CardContent>
                <CardFooter >

                    <div className="flex flex-wrap align-center justify-center w-full ">
                        <Input className="w-100 mr-5" value={coupom} onChange={
                            (e) => {
                                setCoupom((e.target as HTMLInputElement).value)
                            }
                        } placeholder="Cupão" id="coupom" />

                        {props.cart.length > 0 && <Button size="lg" onClick={buy}>Comprar</Button>}
                    </div>

                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Compra Realizada com Sucesso</DialogTitle>
                            </DialogHeader>
                            <div>
                                <p>{response?.message}</p>
                                <p>Pagamento: {response?.reference}</p>
                                <p>Total com descontos: {parseInt(response?.totalCost || "0").toFixed(2)}$</p>
                            </div>
                        </DialogContent>
                    </Dialog>
                </CardFooter>
            </>}


        </Card>
    </div>
}