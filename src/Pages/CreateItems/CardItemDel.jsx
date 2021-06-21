import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {gameActions} from "../../Store/GameTycoon/actions";

function CardItemDel() {

    const dispatch = useDispatch()


    const createItem = useSelector(state => state.game.createItem)


    const delCreatedItem = (id) => {
        dispatch(gameActions.delCreatedItem(id))
    }

    return (
        createItem.map(el => (
            <div style={{background: `${el.back}`}}
                 className=' p-2 col-xl-2 m-3  bg-warning'
                 onClick={() => delCreatedItem(el.id)}>
                <img src={el.img} alt="" className='img-fluid d-block mx-auto ' style={{height: '100px'}}/>
            </div>
        ))
    );
}

export {CardItemDel};