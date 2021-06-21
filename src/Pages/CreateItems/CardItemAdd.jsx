import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {map} from "react-bootstrap/ElementChildren";
import {gameActions} from "../../Store/GameTycoon/actions";

function CardItemAdd({checkRare}) {

    const dispatch = useDispatch()

    const item = useSelector(state => state.game.item)

    const addCreatedItem = (id,name) => {
        dispatch(gameActions.addCreatedItem(id, name))
    }
    console.log(checkRare)
    return (
           item.map(el => (
               !!checkRare ? el.rare === checkRare &&
                <div style={{background: `${el.back}`}}
                     className=' p-2 m-3 col-xl-2 d-flex justify-content-center '
                     onClick={() => addCreatedItem(el.id, el.name)}>
                    <img src={el.img} alt="" className='img-fluid' style={{height: '100px'}}/>
                </div> : <div style={{background: `${el.back}`}}
                                className=' p-2 m-3 col-xl-2 d-flex justify-content-center '
                                onClick={() => addCreatedItem(el.id, el.name)}>
                   <img src={el.img} alt="" className='img-fluid' style={{height: '100px'}}/>
               </div>
            ))
    );
}

export {CardItemAdd};