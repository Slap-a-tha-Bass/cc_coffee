import React from 'react';
import { orders } from '../../../types';

const OrderCard = (props: orders) => {
    return (
        <div className="card">
            <div className="card-header">{props.price}</div>
            <div className="card-body">
                <div className="card-text">{props.drink_type}</div>
                <div className="card-text">{props.food_type}</div>
            </div>
        </div>
    )
}

interface OrderCardProps {
}
export default OrderCard;
