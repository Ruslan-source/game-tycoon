import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Button} from "react-bootstrap";

import {gameActions} from "../../Store/GameTycoon/actions";
import {NewCreatedItemsList} from "./NewCreatedItemsList";
import {CardItemAdd} from "./CardItemAdd";
import {CardItemDel} from "./CardItemDel";

function CreateItems() {

    const dispatch = useDispatch()

    const [rare, setRare] = useState()

    const item = useSelector(state => state.game.item)
    const createItem = useSelector(state => state.game.createItem)
    const newCreateItem = useSelector(state => state.game.newCreateItem)

    const checkRare = !!createItem.length && createItem.map(el => el.rare).slice(0,1)[0]


    const [valList, setValList] = useState(20)

    const createdItem = () => {
        dispatch(gameActions.createItem())
    }

    const btnGenerateItem = createItem.length === 4? <button onClick={createdItem}>Создать предмет</button> : <p>Для создания необходимо еще: {4 - createItem.length} предмета</p>

    const btnLoading = !!item.length && <Button onClick={() => setValList(valList + 20)} className='m-3 w-100'>Загрузить все</Button>



    return (
        <div className='container'>
            <div className="row d-flex justify-content-center ">
                <h2 className='text-center p-2'>Создание предметов</h2>
                {
                   !!newCreateItem.length ? <NewCreatedItemsList /> : <CardItemDel />
                }
            </div>
            <div className='col-xl-12 d-flex justify-content-center '>
                {btnGenerateItem}
            </div>
            <div className='d-flex align-items-center justify-content-center row'>
                <h2 className='text-center p-2'>Ваши предметы</h2>
                {
                    !!item.length ?
                        !!checkRare.length ?  <CardItemAdd checkRare={checkRare}/> : <CardItemAdd checkRare={checkRare}/> : <p>no</p>
                }
                {btnLoading}
            </div>
        </div>
    );
}

export {CreateItems}
