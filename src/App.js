import './App.css';
import './Styles/app.sass'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch, useSelector} from "react-redux";
import {gameActions} from "./Store/GameTycoon/actions";
import {useCallback, useEffect, useState} from "react";
import {Routing} from "./Routing/Routing";
import {Alert, Button} from "react-bootstrap";

function App() {

  const gameDb = useSelector(state => state.game.workDb)
  const workers = useSelector(state => state.game.workers)
  const dispatch = useDispatch()



useEffect(() => {
    setInterval(() => {
       dispatch(gameActions.watcherGame())
       dispatch(gameActions.addItem())
        dispatch(gameActions.incident())
    },1000)
},[])





  return <Routing />

}

export default App;
