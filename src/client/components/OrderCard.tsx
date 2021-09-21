import React from 'react';
import { orders } from '../../../types';

const OrderCard = (props: orders) => {
    return (
        <div className="card col-md-4 m-3 border shadow rounded">
            <h1 className="card-header text-center">Order for {props.first_name}</h1>
            <div className="card-body d-flex justify-content-around">
                {props.isPreview && <h4 className="card-text">{props.drink_type}</h4>}
                {props.isPreview && <h4 className="card-text"> + </h4>}
                {props.isPreview && <h4 className="card-text">{props.food_type}</h4>}
            </div>
            <h4 className="card-text text-center mb-2">${props.price}.00</h4>
        </div>
    )
}

export default OrderCard;
