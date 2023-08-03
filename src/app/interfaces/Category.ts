export interface Category {
    name: string;
    id_category: number;
    products: Array<Product>

};

export interface Product {
    id_product: number;
    name: string;
    description: string;
    price: number;
    category: string;
    image1: string;
    image2: string;
    quantity: number;
    banner: string


};



