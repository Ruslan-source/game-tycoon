import {combineReducers} from "redux";
import {gameReducers as game} from "./GameTycoon/reducers";



export const reducers = combineReducers({
    game
})
