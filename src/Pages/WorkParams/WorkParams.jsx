import React from 'react';
import './style.sass'
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {WorkParamsList} from "./WorkParamsList";
import {gameActions} from "../../Store/GameTycoon/actions";

function WorkParams() {
    const {work} = useParams()
    const dispatch = useDispatch()

    const workers = useSelector(state => state.game.workers)
    const speedList = useSelector(state => state.game.speedList)
    const balance = useSelector(state => state.game.balance)
    const minHiring = useSelector(state => state.game.minHiring)
    const item = useSelector(state => state.game.item)


    const addWorker = (work) => dispatch(gameActions.addWorker(work))
    const delWorker = (id) => dispatch(gameActions.delWorker(id))
    const upLvl = (id) => dispatch(gameActions.upLvl(id))
    const addSpeed = (id, speed, price) => dispatch(gameActions.addSpeed(id, speed, price))
    const saveMoney = (work) => dispatch(gameActions.saveMoney(work))
    const addItemWorker = (id) => dispatch(gameActions.addItemWorker(id))

    const moneyWork = workers.map(el => el.idWork === work && el.balance).reduce((a, b) => a + b, 0)


    const SpeedList = () => {
        return !!speedList.length && speedList.map(el => {
            return <div className=' row text-start d-flex  justify-content-between m-2 align-items-center'>
                    <div className="col-xl-4">
                        <p>{el.name}</p>
                    </div>
                    <div className="col-xl-4">
                        <p className=''>Цена: {el.price}</p>
                    </div>
                    <div className="col-xl-4">
                        {
                            !!workers.length ? balance >= el.price ?   <button onClick={() => addSpeed(work, el.speed, el.price)} className='lvl-up-btn pt-1 pb-1 w-100'>Купить
                                усиление
                            </button> : <button className='bg-primary border-1 pt-1 pb-1 w-100'>
                                Не хватает {el.price - balance}
                            </button> :  <p className=' bg-success  border-1 text-center pt-1 pb-1 w-100' >Ускорять некого</p>
                        }
                    </div>
                </div>

        })
    }



    return (
        <div className='container mb-5'>
            <div className="row text-center">
                <div className="col-xl-12">
                    <h1>{work}</h1> <br/>
                    <p>Общий баланс {balance}</p>
                    <p>Денег в шахте {moneyWork}</p>
                </div>


                <div className="col-xl-12 mt-3 mb-3 box-params p-4">
                    <div className="row d-flex justify-content-between">
                        <div className="col-xl-6  p-4">
                            <SpeedList/>
                        </div>
                        <div className="col-xl-6 d-flex flex-column  justify-content-center   align-items-center">
                            <button onClick={() => addWorker(work)} className='lvl-up-btn p-2 m-2 w-100'>Нанять
                                работника <br/>{minHiring} </button>
                            <button onClick={() => saveMoney(work)} className='lvl-save-bn p-2 m-2 w-100'>Собрать
                                прибыль <br/>{moneyWork} </button>
                        </div>

                    </div>
                </div>

                <h1 className='text-center'>Работники</h1>

                    <div className="col-xl-12">
                        <div className="row">
                            {
                                !!workers.length && workers.map(el => {
                                    return el.idWork === work &&
                                        <WorkParamsList {...el} work={work} upLvl={upLvl} addSpeed={addSpeed} item={item}
                                                        delWorker={delWorker} minHiring={minHiring} mainBalance={balance} addItemWorker={addItemWorker}/>
                                })
                            }
                        </div>
                    </div>

                <div className="col-xl-12">


                </div>
            </div>
        </div>
    );
}

export {WorkParams};