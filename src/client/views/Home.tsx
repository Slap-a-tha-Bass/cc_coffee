import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { drinks, food, orders } from '../../../types';
import { apiService } from '../../../utils/api-service';

const Home = () => {
    const history = useHistory();
    const [orders, setOrders] = useState<orders[]>([]);
    const [first_name, setFirstName] = useState<orders['first_name']>('');
    const [drinks, setDrinkType] = useState<orders[]>([]);
    const [drink_type, setDrinkName] = useState<orders['drink_type']>('');
    const [foods, setFoodType] = useState<orders[]>([]);
    const [food_type, setFoodName] = useState<orders['food_type']>('');
    const [price, setPrice] = useState<orders['price']>(null);
    const [food_price, setFoodPrice] = useState<food['price']>();
    const [drink_price, setDrinkPrice] = useState<drinks['price']>();
    const [food_id, setFoodid] = useState<food['id']>();
    const [drink_id, setDrinkid] = useState<drinks['id']>();

    useEffect(() => {
        apiService('/api/drinks')
            .then(data => {
                setDrinkType(data)
                setDrinkPrice(data)
            })
    }, []);
    useEffect(() => {
        apiService('api/food')
            .then(data => {
                setFoodType(data)
                setFoodPrice(data)
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
        apiService('/api/orders', 'POST',
            { drink_id, food_id, price: food_price + drink_price, first_name })
            .then(data => {
                history.push('/orders')
                console.log(data)
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
                            <input value={first_name} onChange={e => setFirstName(e.target.value)} type="text" className="form-control" />
                            <select onChange={handleSelectDrink} className="form-select my-3" aria-label="Default select sample">
                                <option value="0">Choose your drink!</option>
                                {drinks.map((drink) => (
                                    <option key={drink.id} value={drink.drink_type}>
                                        {drink.drink_type} - ${drink.price}
                                    </option>
                                ))}
                            </select>
                            <select onChange={handleSelectFood} className="form-select my-3" aria-label="Default select sample">
                                <option value="0">Choose your food!</option>
                                {foods.map((food) => (
                                    <option key={food.id} value={food.food_type}>
                                        {food.food_type} - ${food.price}
                                    </option>
                                ))}
                            </select>
                            <div className="d-flex justify-content-center">
                                <button onClick={handleSubmitOrder} className="btn btn-outline-primary">Submit Order</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;
