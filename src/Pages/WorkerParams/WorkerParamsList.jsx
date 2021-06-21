import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";

function WorkerParamsList(props) {
    const {speed, paramsId, priceLvl, balance, secondAdd, lvl, id, items, item, addItemWorker,delItemWorker,sellItemWorker} = props
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const moneyWorkerSec = secondAdd * lvl + speed
    const imgItemWorker = !!items.id ? `${items.img}` : 'https://avatars.mds.yandex.net/get-pdb/4240980/000dcb16-88b9-41e5-a632-e5eaf1c2908c/s1200'
    return (
        <div className='row w-100 mt-4'>
            <div className="col-xl-12 text-center">
                <h3 className='w-100 bg-warning p-3 mb-3'>Личный кабинет работника</h3>
                <h4 className='p-2'>Информация о работнике </h4>

                <div className="col-xl-12">
                    <p>Работник зарабатывает в секунду {moneyWorkerSec}</p>
                    <p>Уровень работника {lvl}</p>
                    <p>Баланс работника {balance}</p>
                </div>


                <h4 className='p-2'>Предметы работника </h4>
                <Button variant="primary" onClick={handleShow} className='p-3'>
                        <img src={imgItemWorker} alt=""
                             className='img-fluid' style={{height: '100px'}}/>
                    </Button>


                <Modal show={show} onHide={handleClose}>

                    {
                        !!items.id ?  <div className='text-center p-4'>
                            <h4 className=''>Одетый предмет</h4>
                            <p className='m-2'>Название: <br/> {items.name}</p>
                            <p className='m-2'>Цена: <br/> {items.price}</p>
                            <p className='m-2'>Прибыль в секунду: <br/> {items.skill} </p>
                            <button onClick={() => sellItemWorker(items.id, paramsId)}>Продать предмет</button>
                            <button onClick={() => delItemWorker(items.id, paramsId)}>Удалить предмет</button>
                        </div> : <div className='w-100 p-4'>
                            <h4 className='text-center'>Ваши предметы</h4>
                            <div className="d-flex flex-wrap align-items-center justify-content-between  ">
                                {
                                    item.map(el => {
                                        return  <Button onClick={() => addItemWorker(el.id, paramsId)} className='m-2'>{el.name}</Button>


                                    })
                                }
                            </div>
                        </div>
                    }

                </Modal>
            </div>
        </div>
    );
}

export {WorkerParamsList}