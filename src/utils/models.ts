export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export interface Cart {
  products: CartItem[]
}

export interface CartItem {
  product: Product
  amount: number
}
