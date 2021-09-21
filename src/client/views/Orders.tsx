import React, { useEffect, useState } from 'react';
import { orders } from '../../../types';
import OrderCard from '../components/OrderCard';

const Orders = () => {

    const [orders, setOrders] = useState<orders[]>([]);

    useEffect(() => {
        fetch('api/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            {orders.map((order => (
                <OrderCard {...order} key={order.id} isPreview />
            )))}
        </div>
    )
}

export default Orders;
