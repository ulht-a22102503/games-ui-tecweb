export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
}

export interface Rating {
    rate: number
    count: number
}

export interface BuyResponse {
    reference: string
    message: string
    totalCost: string // should be a number
}

export interface BuyRequest {
    products: number[]
    student: boolean
    coupon: string
    name: string
}