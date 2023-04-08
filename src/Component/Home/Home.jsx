import React, { useState } from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {
    const tShirts = useLoaderData()
    const [cart, setCart] = useState([])
    const handleAddToCart = tshirt => {
const exist=cart.find(ts=>ts._id===tshirt._id);
if(exist){
    toast('you have already added this t-shirt')
}
else{
    const newCart=[...cart,tshirt];
    setCart(newCart);
}    
    }
    const handleRemoveFromCart = id => {
        const remaining=cart.filter(ts=>ts._id !==id);
        setCart( remaining)
    }

    return (
        <div className='home-container'>
            <div className='t-shirt-container'>
                {
                    tShirts.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></Tshirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;