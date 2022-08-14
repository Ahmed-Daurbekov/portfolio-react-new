import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='error-page'>
            <h1 className='error-page__title'>Ошибка 404</h1>
            <p className='error-page__text'>Страница не найдена</p>
            <p className='error-page__text'>
                Страница, которую вы ищете, не существует. Возможно вы ошиблись адресом
            </p>
            <Link to={'./'} />
        </div>
    );
};

export default ErrorPage;