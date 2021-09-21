import React, { useEffect, useState } from 'react';
import { orders } from '../../../types';
import { apiService } from '../../../utils/api-service';
import OrderCard from '../components/OrderCard';

const Orders = () => {

    const [orders, setOrders] = useState<orders[]>([]);

    useEffect(() => {
        apiService('api/orders')
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
