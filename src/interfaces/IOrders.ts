export interface IOrders {
    id: string;
    date: string;
    total_price: number;
    products_list: [
        {
            id: string;
            name: string;
            type: string;
            photo: string;
            quantity: number;
            size: string;
            price: number;
        },
    ];
}
