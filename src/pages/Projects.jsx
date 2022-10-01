import React, { useState } from 'react';
import { addHover, removeHover, btnAddActiveClass, resize } from '../functions/Function';
import project1 from '../img/projects/project-1.png'
import project2 from '../img/projects/project-2.png'
import project3 from '../img/projects/project-3.png'
import project4 from '../img/projects/project-4.png'
import project5 from '../img/projects/project-5.png'
import project6 from '../img/projects/project-6.png'
import project7 from '../img/projects/project-7.png'
import project8 from '../img/projects/project-8.png'
import project9 from '../img/projects/project-9.png'
import project10 from '../img/projects/project-10.png'
import project11 from '../img/projects/project-11.png'
import project12 from '../img/projects/project-12.png'

const Projects = () => {
    let [btnText, setBtnText] = useState(false)

    return (
        <div className='projects-page'>
            <p className='projects-page__title'>Мои проекты</p>
            <div className='projects-page__project-blocks'>
                <div className='projects-page__project-blocks__block'>
                    <div onMouseEnter={e => addHover(e)} onMouseLeave={e => removeHover(e)} className='projects-page__project-block projects-page__project-block_project-1'>
                        <div className='block-img'>
                            <img src={project12} />
                        </div>
                        <div className='text-block'>
                            <div className='project__name'>Тренажер слепой печати</div>
                            <a href='https://ahmed-daurbekov.github.io/printing-simulator-new/' target='_blank' className='project__link'>Посмотреть</a>
                        </div>
                    </div>
                    <button onClick={event => btnAddActiveClass(btnText, setBtnText, event)} className='showInfo'>{btnText ? 'Скрыть ссылку' : 'Показать ссылку'}</button>
                </div>
                <div className='projects-page__project-blocks__block'>
                    <div onMouseEnter={e => addHover(e)} onMouseLeave={e => removeHover(e)} className='projects-page__project-block projects-page__project-block_project-1'>
                        <div className='block-img'>
                            <img src={project11} />
                        </div>
                        <div className='text-block'>
                            <div className='project__name'>Игра крестики нолики</div>
                            <a href='https://ahmed-daurbekov.github.io/tic-toe/' target='_blank' className='project__link'>Посмотреть</a>
                        </div>
                    </div>
                    <button onClick={event => btnAddActiveClass(btnText, setBtnText, event)} className='showInfo'>{btnText ? 'Скрыть ссылку' : 'Показать ссылку'}</button>
                </div>
                <div className='projects-page__project-blocks__block'>
                    <div onMouseEnter={e => addHover(e)} onMouseLeave={e => removeHover(e)} className='projects-page__project-block projects-page__project-block_project-1'>
                        <div className='block-img'>
                            <img src={project10} />
                        </div>
                        <div className='text-block'>
                            <div className='project__name'>Кино персонажи</div>
                            <a href='https://ahmed-daurbekov.github.io/movie-characters/' target='_blank' className='project__link'>Посмотреть</a>
                        </div>
                    </div>
                    <button onClick={event => btnAddActiveClass(btnText, setBtnText, event)} className='showInfo'>{btnText ? 'Скрыть ссылку' : 'Показать ссылку'}</button>
                </div>
                
                <div className='projects-page__project-blocks__block'>
                    <div onMouseEnter={e => addHover(e)} onMouseLeave={e => removeHover(e)} className='projects-page__project-block projects-page__project-block_project-1'>
                        <div className='block-img'>
                            <img src={project1} />
                        </div>
                        <div className='text-block'>
                            <div className='project__name'>Обзор фильма</div>
                            <a href='https://ahmed-daurbekov.github.io/film/' target='_blank' className='project__link'>Посмотреть</a>
                        </div>
                    </div>
                    <button onClick={event => btnAddActiveClass(btnText, setBtnText, event)} className='showInfo'>{btnText ? 'Скрыть ссылку' : 'Показать ссылку'}</button>
                </div>
                <div className='projects-page__project-blocks__block'>
                    <div onMouseEnter={e => addHover(e)} onMouseLeave={e => removeHover(e)} className='projects-page__project-block projects-page__project-block_project-2'>
                        <div className='block-img'>
                            <img src={project2} />
                        </div>
                        <div className='text-block'>
                            <div className='project__name'>Путешествие по Индии</div>
                            <a href='https://ahmed-daurbekov.github.io/travel/' target='_blank' className='project__link'>Посмотреть</a>
                        </div>
                    </div>
                    <button onClick={event => btnAddActiveClass(btnText, setBtnText, event)} className='showInfo'>Показать ссылку</button>
                </div>
                <div className='projects-page__project-blocks__block'>
                    <div onMouseEnter={e => addHover(e)} onMouseLeave={e => removeHover(e)} className='projects-page__project-block projects-page__project-block_project-3'>
                        <div className='block-img'>
                            <img src={project3} />
                        </div>
                        <div className='text-block'>
                            <div className='project__name'>Сайт по  ПП</div>
                            <a href='https://ahmed-daurbekov.github.io/Proper_nutrition/' target='_blank' className='project__link'>Посмотреть</a>
                        </div>
                    </div>
                    <button onClick={event => btnAddActiveClass(btnText, setBtnText, event)} className='showInfo'>Показать ссылку</button>
                </div>

                <div className='projects-page__project-blocks__block'>
                    <div onMouseEnter={e => addHover(e)} onMouseLeave={e => removeHover(e)} className='projects-page__project-block projects-page__project-block_project-4'>
                        <div className='block-img'>
                            <img src={project4} />
                        </div>
                        <div className='text-block'>
                            <div className='project__name'>Сайт кинотеатра</div>
                            <a href='https://ahmed-daurbekov.github.io/progect-cinema/' target='_blank' className='project__link'>Посмотреть</a>
                        </div>
                    </div>
                    <button onClick={event => btnAddActiveClass(btnText, setBtnText, event)} className='showInfo'>Показать ссылку</button>
                </div>
                <div className='projects-page__project-blocks__block'>
                    <div onMouseEnter={e => addHover(e)} onMouseLeave={e => removeHover(e)} className='projects-page__project-block projects-page__project-block_project-5'>
                        <div className='block-img'>
                            <img src={project5} />
                        </div>
                        <div className='text-block'>
                            <div className='project__name'>Игра в ячейки</div>
                            <a href='https://ahmed-daurbekov.github.io/game-guess-cell/' target='_blank' className='project__link'>Посмотреть</a>
                        </div>
                    </div>
                    <button onClick={event => btnAddActiveClass(btnText, setBtnText, event)} className='showInfo'>Показать ссылку</button>
                </div>
                <div className='projects-page__project-blocks__block'>
                    <div onMouseEnter={e => addHover(e)} onMouseLeave={e => removeHover(e)} className='projects-page__project-block projects-page__project-block_project-6'>
                        <div className='block-img'>
                            <img src={project6} />
                        </div>
                        <div className='text-block'>
                            <div className='project__name'>Калькулятор квадратных уравнений</div>
                            <a href='https://ahmed-daurbekov.github.io/equation-calculator/' target='_blank' className='project__link'>Посмотреть</a>
                        </div>
                    </div>
                    <button onClick={event => btnAddActiveClass(btnText, setBtnText, event)} className='showInfo'>Показать ссылку</button>
                </div>

                <div className='projects-page__project-blocks__block'>
                    <div onMouseEnter={e => addHover(e)} onMouseLeave={e => removeHover(e)} className='projects-page__project-block projects-page__project-block_project-7'>
                        <div className='block-img'>
                            <img src={project7} />
                        </div>
                        <div className='text-block'>
                            <div className='project__name'>Генератор чисел</div>
                            <a href='https://ahmed-daurbekov.github.io/namber-generator/' target='_blank' className='project__link'>Посмотреть</a>
                        </div>
                    </div>
                    <button onClick={event => btnAddActiveClass(btnText, setBtnText, event)} className='showInfo'>Показать ссылку</button>
                </div>
                <div className='projects-page__project-blocks__block'>
                    <div onMouseEnter={e => addHover(e)} onMouseLeave={e => removeHover(e)} className='projects-page__project-block projects-page__project-block_project-8'>
                        <div className='block-img'>
                            <img src={project8} />
                        </div>
                        <div className='text-block'>
                            <div className='project__name'>Слайдер карточки</div>
                            <a href='https://ahmed-daurbekov.github.io/flex-cards/' target='_blank' className='project__link'>Посмотреть</a>
                        </div>
                    </div>
                    <button onClick={event => btnAddActiveClass(btnText, setBtnText, event)} className='showInfo'>Показать ссылку</button>
                </div>
                <div className='projects-page__project-blocks__block'>
                    <div onMouseEnter={e => addHover(e)} onMouseLeave={e => removeHover(e)} className='projects-page__project-block projects-page__project-block_project-9'>
                        <div className='block-img'>
                            <img src={project9} />
                        </div>
                        <div className='text-block'>
                            <div className='project__name'>Вертикальный слайдер</div>
                            <a href='https://ahmed-daurbekov.github.io/slider/' target='_blank' className='project__link'>Посмотреть</a>
                        </div>
                    </div>
                    <button onClick={event => btnAddActiveClass(btnText, setBtnText, event)} className='showInfo'>Показать ссылку</button>
                </div>
            </div>
        </div>
    );
};

export default Projects;