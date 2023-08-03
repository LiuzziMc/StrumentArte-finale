
export interface Order {
    id_order: number;
    purchase_date: Date;
    number_of_products: number;
    price: number;
    address: Array<Address>;
    fk_user: string;
    fk_payment: string
};

export interface Address {
    city: string;
    strett: string;
    zip: number;

};

