import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faFigma, faGit, faGitAlt, faGulp, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import img3 from '../img/images/ava.png'

const AboutMe = () => {
    return (
        <div className='aboutMe-page'>
            <p className='aboutMe-page__title'>обо мне</p>
            <div className='aboutMe-page__info-blocks'>
                <div className='aboutMe-page__info-block image-block'>
                    <img src={img3} />
                </div>
                <div className='aboutMe-page__info-block text-block'>
                    <p>
                        Меня зовут Ахмед.
                        <br/>
                        Я начинающий front-end разработчик, умею верстать сайты на HTML, CSS и JavaScript.<br/>
                        Также имею знание по React, Git, Gulp имею знания работать с Figma 
                    </p>
                </div>
            </div>
            <p className='aboutMe-page__title'>мои знания в front-end</p>

            <div className='skills'>
                <div className='skills-text'>
                    Skills
                </div>
                <div className='skills-lists'>
                    <div className='skills-list'>
                        <span>Hard skils</span>
                        <ul>
                            <li><FontAwesomeIcon icon={faHtml5} style={{color: '#dd4b25'}} />HTML</li>
                            <li><FontAwesomeIcon icon={faCss3} style={{color: '#254bdd'}} />CSS(SCSS)</li>
                            <li><FontAwesomeIcon icon={faJs} style={{color: '#efd81d', background: '#000'}} />JavaScript(ES6)</li>
                            <li><FontAwesomeIcon icon={faReact} style={{color: '#5ed3f3'}} />React</li>
                        </ul>
                    </div>
                    <div className='skills-list'>
                        <span>Other</span>
                        <ul>
                            <li><FontAwesomeIcon icon={faGulp} style={{color: '#d34446'}} />Gulp</li>
                            <li><FontAwesomeIcon icon={faFigma} style={{color: '#19b6f6'}} />Figma</li>
                            <li><FontAwesomeIcon icon={faGitAlt} style={{color: '#e84e31'}} />Git</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;