export interface ProductInt {
    id: string;
    image: string;
    title: string;
    price: number;
    description: string;
}

export interface ProductCheckoutInt {
    id: string;
    image: string;
    title: string;
    price: number;
    description: string;
    qty: number;
}

export interface BuyerInt {
    name: string;
    email: string;
    addres: string;
    city: string;
    country: string;
    state: string;
    cp: string;
    phone: string;
    apto: string;
}

export interface ListProducts {
    cart: ProductCheckoutInt[];
    products: ProductInt[];
    buyer: BuyerInt;
    orders: any[]
}
