import React, { useEffect, useState } from 'react';
import { orders } from '../../../types';

const Home = () => {

    const [orders, setOrders] = useState<orders[]>([]);

    const [drinks, setDrinkType] = useState<orders[]>([]);
    const [drink_name, setDrinkName] = useState<orders['drink_type']>('');
    const [foods, setFoodType] = useState<orders[]>([]);
    const [food_name, setFoodName] = useState<orders['food_type']>('');

    useEffect(() => {
        fetch('api/drinks')
            .then(res => res.json())
            .then(data => {
                setDrinkType(data)
            })
    }, []);
    useEffect(() => {
        fetch('api/food')
            .then(res => res.json())
            .then(data => {
                setFoodType(data)
            })
    }, []);

    const handleSelectDrink = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDrinkName(e.target.value);
    }
    const handleSelectFood = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFoodName(e.target.value);
    }
    const handleSubmitOrder = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fetch('api/orders', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ drink_name, food_name })
            // pickup here when returning!!
            // 
            // 
        })

    }
    return (
        <>
            <main className="container">
                <section className="row m-2">
                    <div className="col-md-4 m-2 border shadow rounded">
                        <h2 className="text-center mt-2 text-primary">Welcome to C^2 Coffee!</h2>
                        <form className="form-group">
                            <label className="my-2">First Name</label>
                            <input type="text" className="form-control" />
                            <select onChange={handleSelectDrink} className="form-select my-3" aria-label="Default select sample">
                                <option value="0">Choose your drink!</option>
                                {drinks.map((drink) => (
                                    <option key={drink.id} value={drink.id}>
                                        {drink.drink_type} - ${drink.price}
                                    </option>
                                ))}
                            </select>
                            <select onChange={handleSelectFood} className="form-select my-3" aria-label="Default select sample">
                                <option value="0">Choose your food!</option>
                                {foods.map((food) => (
                                    <option key={food.id} value={food.id}>
                                        {food.food_type} - ${food.price}
                                    </option>
                                ))}
                            </select>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-outline-primary">Submit Order</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;
