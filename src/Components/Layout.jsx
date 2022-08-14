import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from './Link/CustomLink';
import { overlay } from '../functions/Function';

const Layout = () => {
    return (
        <>
            <div className='wrapper'>
                <nav className='navbar'>
                    <ul className='nav-ul'>
                        <li>
                            <CustomLink to={'./'}>Main</CustomLink>
                        </li>
                        <li>
                            <CustomLink to={'./about-me'}>About me</CustomLink>
                        </li>
                        <li>
                            <CustomLink to={'./projects'}>Projects</CustomLink>
                        </li>
                        <li>
                            <CustomLink to={'./contact'}>Contact</CustomLink>
                        </li>
                    </ul>
                    <div className='burger' onClick={overlay}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
                <div className='wrap container'>
                    <Outlet/>
                </div>
            </div>
        </>
    );
};

export default Layout;