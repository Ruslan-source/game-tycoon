import React from 'react';
import {Link} from "react-router-dom";
import {paths} from "../../constants/constants.route";
import {useSelector} from "react-redux";

function WorkListItem(props) {
    const {work, maxWorkers, key, img} = props
    const workers = useSelector(state => state.game.workers)

    const balanceCompany = workers.map(el => el.idWork === work && el.balance).reduce((a, b) => a + b, 0)

    return (
        <div className='col-xl-4' key={key}>
            <Link to={`${paths.work}/${work}`}>
                <p className='p-2'>{work}</p>
                <img src={img} alt="Img" className='img-fluid'/>
                {
                    !!workers.length ?
                        <p>
                            Баланс предприятия {balanceCompany}</p>
                        :
                        <p>Баланс предприятия 0</p>
                }
            </Link>
        </div>
    );
}

export {WorkListItem}