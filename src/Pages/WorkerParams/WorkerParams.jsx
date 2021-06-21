import React from 'react';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {WorkerParamsList} from "./WorkerParamsList";
import {gameActions} from "../../Store/GameTycoon/actions";

function WorkerParams() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const workers = useSelector(state => state.game.workers)
    const item = useSelector(state => state.game.item)

    const addItemWorker = (id,paramsId) => {
        dispatch(gameActions.addItemWorker(id,paramsId))
    }

    const delItemWorker = (id,paramsId) => {
        dispatch(gameActions.delItemWorker(id,paramsId))
    }

    const sellItemWorker = (id,paramsId) => {
        dispatch(gameActions.sellItemWorker(id,paramsId))
    }

    return (
        <div className='container-fluid'>
<div className="container">

    {
        !!workers.length ?  workers.map(el => {
            return el.id === id && <WorkerParamsList {...el} item={item} addItemWorker={addItemWorker} sellItemWorker={sellItemWorker} paramsId={id} delItemWorker={delItemWorker}/>
        }) : <p>Тут нечего делать без работников</p>
    }
</div>
        </div>
    );
}

export {WorkerParams};