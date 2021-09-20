import React, { useEffect, useState } from 'react';
import { orders } from '../../../types';
import OrderCard from '../components/OrderCard';

const Orders = () => {

    const [orders, setOrders] = useState<orders[]>([]);
    const [drink_type, setDrinkType] = useState<orders['drink_type']>(null);
    const [food_type, setFoodType] = useState<orders['food_type']>(null);
    const [price, setPrice] = useState<orders['price']>(null);

    useEffect(() => {
        fetch('api/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            {orders.map((order => (
                <OrderCard {...order} key={order.id} />
            )))}
        </div>
    )
}

export default Orders;
