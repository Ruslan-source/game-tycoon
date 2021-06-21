import React from 'react';
import {useSelector} from "react-redux";
import {WorkListItem} from "./WorkListItem";

function WorkList() {

    const gameDb = useSelector(state => state.game.workDb)



    return (
        <div className='container mt-4'>
            <div className="row text-center " >
                {
                  !!gameDb && gameDb.map(el => {
                        return <WorkListItem {...el} key={el.work}/>
                    })
                }
            </div>
        </div>
    );
}

export {WorkList};