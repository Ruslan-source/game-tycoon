import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {paths} from "../../constants/constants.route";

function Office(props) {
    const dispatch = useDispatch()
    const workers = useSelector(state => state.game.workers)
    const item = useSelector(state => state.game.item)
    return (
        <div>
            <Link to={paths.createItems}>А афыфыафыа</Link>
        </div>
    );
}

export {Office};