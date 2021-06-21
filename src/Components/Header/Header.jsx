import React from 'react';
import './style.sass'
import {Link} from "react-router-dom";
import {paths} from "../../constants/constants.route";
function Header() {

    const nav = [
        {
            name: 'Домой',
            path: paths.home
        },
        {
            name: 'Кабинет',
            path: paths.office
        },
        {
            name: 'Статистика',
            path: ''
        },
        {
            name: 'Инструкция',
            path: ''
        },
    ]

    const NavList = () => {
        return nav.map(el => {
            return <Link to={el.path}><li className='p-2 nav-li' key={el.name}>{el.name}</li></Link>
        })
    }

    return (
        <div className='container-fluid'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 text-center p-4">
                        <h1>GAME-TYCOON</h1>
                    </div>
                    <div className="col-xl-12 text-center">
                        <ul className='nav-ul  '>
                            <NavList/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {Header};