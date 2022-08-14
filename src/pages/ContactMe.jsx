import React from 'react';
import { Link } from 'react-router-dom';
import CustomSvg from '../Components/Svg/CustomSvg';

const ContactMe = () => {

    return (
        <div className='contactMe-page'>
            <p className='contactMe-page__title'>Мои контакты</p>    
            <div className='contactMe-page__contanct-blocks'>
                <a href='https://t.me/AhmedDaurbekov' target='_blank' className='contactMe-page__contanct-block contactMe-page__contanct-telegram'>
                    <div className='contactMe-page__contanct-block-img'>
                        <CustomSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill='#6363eb' className='svg-inline--fa fa-telegram fa-w-16 fa-7x'>
                            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"/>
                        </CustomSvg>
                    </div>
                    <div className='contactMe-page__contanct-block-title'>Telegram:</div>
                    <div className='contactMe-page__contanct-block-adress'>Ахмед Даурбеков</div>
                </a>
                <a href='https://wa.me/79287264053' target='_blank' className='contactMe-page__contanct-block contactMe-page__contanct-whatsapp'>
                    <div className='contactMe-page__contanct-block-img'>
                        <CustomSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#6363eb" className='svg-inline--fa fa-skype fa-w-14 fa-9x'>
                            <path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z"/>
                        </CustomSvg>
                    </div>
                    <div className='contactMe-page__contanct-block-title'>Whatsapp:</div>
                    <div className='contactMe-page__contanct-block-adress'>8 (928) 726-40-53</div>
                </a>
                <a href='mailto:daa_2103@mail.ru' target='_blank' className='contactMe-page__contanct-block contactMe-page__contanct-mail'>
                    <div className='contactMe-page__contanct-block-img'>
                        <CustomSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#6363eb" className='svg-inline--fa fa-envelope fa-w-16 fa-9x'>
                            <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/>
                        </CustomSvg>
                    </div>
                    <span className='contactMe-page__contanct-block-title'>E-mail:</span>
                    <span className='contactMe-page__contanct-block-adress'>8 (928) 726-40-53</span>
                </a>
            </div>
        </div>
    );
};

export default ContactMe;