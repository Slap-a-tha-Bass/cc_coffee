import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { orders } from '../../../types';
import { apiService } from '../utils/api-service';

const OrderCard = (props: orders) => {
    const history = useHistory();
    const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (confirm('Are you sure you want to delete this order?')) {
            apiService(`/api/orders/${props.id}/delete`, 'DELETE')
                .then(data => {
                    history.push('/')
        });
    }
}

return (
    <div className="card col-md-4 m-3 border shadow rounded">
        <h1 className="card-header text-center">Order for {props.first_name}</h1>
        <div className="card-body d-flex justify-content-around">
            <h4 className="card-text">{props.drink_type}</h4>
            <h4 className="card-text"> + </h4>
            <h4 className="card-text">{props.food_type}</h4>
        </div>
        <h4 className="card-text text-center mb-2">${props.price}.00</h4>
        <div className="d-flex justify-content-between m-3">
            <Link className="btn btn-outline-primary" to={`/${props.id}/edit`}>Edit</Link>
            <button className="btn btn-primary" onClick={handleDeleteClick} >Delete</button>
        </div>
    </div>
)
}

export default OrderCard;
