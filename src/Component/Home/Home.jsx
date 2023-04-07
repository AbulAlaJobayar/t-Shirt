import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirts=useLoaderData()
    return (
        <div>
            <h1>hello home{tShirts.length}</h1>
        </div>
    );
};

export default Home;