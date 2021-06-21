import React from 'react';
import {useDispatch} from "react-redux";
import {gameActions} from "../../Store/GameTycoon/actions";
import {Link} from "react-router-dom";
import {paths} from "../../constants/constants.route";

function WorkParamsList(props) {
    const {idWork,item,items,addItemWorker, mainBalance, minHiring, speed, priceLvl, balance, secondAdd, lvl, id, upLvl, delWorker} = props

    const moneySec = secondAdd * lvl + speed
    const checkBalanceDelWorker = mainBalance >= minHiring
    const checkBalLvlUp = balance >= lvl * priceLvl

    return (

        <div className='row d-flex align-items-center work-params_list p-3 m-2 box-params'>

            <div className="col-xl-2 col-sm-12 col-12 p-2"><Link to={`${paths.worker}/${id}`}><p>Шахтер</p></Link></div>
            <div className="col-xl-3 col-sm-12 col-12 p-2"><p>Заработок в секунду: {moneySec}</p></div>
            <div className="col-xl-2 col-sm-12 col-12 p-2"><p>Баланс работника: {balance}</p></div>
            <div className="col-xl-2  col-sm-12 col-12 p-2"><p>Уровень {lvl}</p></div>
            <div className="col-xl-3 col-sm-12 col-12 p-2 d-flex justify-content-between ">
                <button onClick={() => upLvl(id)} className='lvl-up-btn p-2 w-100'>
                    {checkBalLvlUp ? 'Увеличить уровень' : `До улучшения ${lvl * priceLvl - balance}`}
                </button>
                <button onClick={() => delWorker(id)}
                        className='lvl-up-btn p-2 w-100'>{checkBalanceDelWorker ? 'Уволить работника' : 'Нельзя увольнять работника'}</button>
            </div>
        </div>
    );
}

export {WorkParamsList};