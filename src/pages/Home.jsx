import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home-page'>
            <div className='home-page__title'>Сайт <span>портфолио</span></div>
            <p className='name'>Ахмеда Даурбекова</p>
            <Link className='link home-page__link' to='./projects'>Перейти в портфолио</Link>
            {/* 2400FF */}
        </div>
    );
};

export default Home;