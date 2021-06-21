import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {gameActions, gameActionTypes} from "../../Store/GameTycoon/actions";

function NewCreatedItemsList() {

    const dispatch = useDispatch()

    const newCreateItem = useSelector(state => state.game.newCreateItem)

    const clearCreatedItem = () => {
        dispatch(gameActions.clearCreatedItem())
    }

    return (

        newCreateItem.map(el => (
            <div className='col-xl-12 d-flex justify-content-center m-3 '>
               <div className="row">
                   <h1 className=' w-100 text-center '>Поздравляю! Вы создали предмет.</h1>
                   <div style={{background: `${el.back}`}}
                        className=' p-2 m-3  w-100 '
                        onClick={clearCreatedItem}
                   >
                       <img src={el.img} alt="" className='img-fluid d-block mx-auto' style={{height: '100px'}}/>
                   </div>
               </div>
            </div>
        ))

    );
}

export {NewCreatedItemsList};