import {workDb} from "../../work.db";
import {gameActionTypes} from "./actions";
import {v4 as uuidv4} from 'uuid';
import {speedList} from "../../speed";
import {itemsGame} from "../../items.game";
import {nameDb} from "../../name.da";

const initialState = {
    test: 0,
    workDb: workDb,
    name: nameDb,
    balance: 100000,
    minHiring: 100,
    itemsGame: itemsGame,
    incident: false,
    item: [],
    createItem: [],
    newCreateItem: [],
    speedList: speedList,
    workers: [],
    message: null
}

export const gameReducers = (state = initialState, action) => {
    switch (action.type) {

        case gameActionTypes.ADD_WORKER:

            //Поля работника
            const generateWorker = {
                idWork: action.payload,
                heals: 10,
                damage: 10,
                items: false,
                balance: 0,
                secondAdd: 5,
                lvl: 1,
                limitLvl: 10,
                priceLvl: 10,
                speed: 0,
                skill: 0,
                incident: 0,
                id: uuidv4()
            }
            //Проверка на возможность покупки баланс должен быть больше цены покупки
            const checkBal = state.balance >= state.minHiring

            const decBalance = checkBal ? state.balance - 100 : state.balance

            const addWorkers = checkBal ? [...state.workers, generateWorker] : state.workers

            const addMinHiring = checkBal ? state.minHiring * 5 : state.minHiring

            return {...state, workers: addWorkers, balance: decBalance, minHiring: addMinHiring,}

        case gameActionTypes.DEL_WORKER:
            //Находим пользователя и удаляем
            const checkSellWorkers = state.balance > state.minHiring

            const delWorker = checkSellWorkers ? state.workers.filter(el => el.id !== action.payload.id) : state.workers

            return {...state, workers: delWorker}

        case gameActionTypes.WATCHER_GAME:
            //Обновление баланса пользователя
            //Баланс
            //secondAdd = ежесекундное обновление баланса
            //lvl = уровень работника
            //speed = усиление
            const addBalance = state.workers.map(el => !!el ? {
                ...el,
                balance: el.balance + el.secondAdd * el.lvl + el.skill + el.speed,
                speed: !!el.speed && el.speed - el.secondAdd,
                incident:  el.incident - 5 + el.lvl,
                heals: el.heals - el.damage
            } : el )





            return {...state, workers: addBalance}

        case gameActionTypes.UP_LVL:
            //Увеличение уровня работника
            const upLvl = state.workers.map(el => el.id === action.payload && el.lvl < 10 && el.balance >= el.lvl * el.priceLvl ? {
                ...el,
                lvl: el.lvl + 1,
                balance: el.balance - el.lvl * el.priceLvl
            } : el)

            return {...state, workers: upLvl}

        case gameActionTypes.ADD_SPEED:

            const addSpeed = action.payload.price <= state.balance ? state.workers.map(el => el.idWork === action.payload.work ? {
                ...el,
                speed: el.speed + action.payload.speed,
            } : el) : state.workers

            const delMoneyBalance = action.payload.price <= state.balance ? state.balance - action.payload.price : state.balance

            return {...state, workers: addSpeed, balance: delMoneyBalance}

        case gameActionTypes.SAVE_MONEY:

            const saveMoney = state.workers.map(el => el.idWork === action.payload && el.balance).reduce((acc, curr) => acc + curr, state.balance)

            const nullMoney = state.workers.map(el => el.idWork === action.payload ? {
                ...el,
                balance: el.balance = 0
            } : el)

            return {...state, workers: nullMoney, balance: saveMoney}


        case gameActionTypes.ADD_ITEM:

            const random = Math.floor(Math.random() * (100 - 1) + 1)

            const searchRandomItem = state.itemsGame.filter(el => el.probability >= random)

            const checkRandomItem = searchRandomItem.map(el => el && {...el, id: el.id = uuidv4(), created: el.created = false,})

            const check = !!searchRandomItem && [...state.item, ...checkRandomItem]

            return {...state, item: check}

        case gameActionTypes.ADD_ITEM_WORKER:

            const searchItem = state.item.find(el => el.id === action.payload.id)

            const addItemWorker = state.workers.map(el => el.id === action.payload.paramsId ? {
                ...el,
                items: el.items = searchItem,
                skill: el.speed = searchItem.skill
            } : el)

            const delItem = state.item.filter(el => el.id !== action.payload.id)

            return {...state, workers: addItemWorker, item: delItem}

        case gameActionTypes.DEL_ITEM_WORKER:

            const checkItemWorker = state.workers.map(el => el.id === action.payload.paramsId && el.items)

            const delItemWorker = state.workers.map(el => el.id === action.payload.paramsId ? {
                ...el,
                items: el.items = false
            } : el)

            return {...state, workers: delItemWorker, item: [...state.item, checkItemWorker]}

        case gameActionTypes.SELL_ITEM_WORKER:

            const checkItemWorkerSell = state.workers.find(el => el.id === action.payload.paramsId && el.items)

            const sellItemWorker = state.workers.map(el => el.id === action.payload.paramsId ? {
                ...el,
                items: el.items = false
            } : el)

            const updateBalanceSellItem =  state.balance + checkItemWorkerSell.skill

            return {...state, workers: sellItemWorker, balance: updateBalanceSellItem}

        case gameActionTypes.ADD_CREATE_ITEM:

            const checkIdAddCreate = state.createItem.find(el => el.id === action.payload.id)

            const addSearchItem = state.item.filter(el => el.id === action.payload.id && {created: el.created = true})

            const itemAdd = state.createItem.length < 4 ? state.item.filter(el => el.id !== action.payload.id) : state.item

            const updateCreatedItem = state.createItem.length < 4 ? !!checkIdAddCreate ? state.createItem.map(el => el.id === action.payload.id ? {...el} : el) : [...state.createItem, ...addSearchItem] : state.createItem

            return {...state, createItem: updateCreatedItem, item: itemAdd, newCreateItem: []}

        case gameActionTypes.DEL_CREATE_ITEM:

            const searchItemDel = state.item.find(el => el.id === action.payload.id)

            const searchUpdateCreatedItem = state.createItem.filter(el => el.id === action.payload.id && {created: el.created = false})

            const delCreatedItem = state.createItem.filter(el => el.id !== action.payload.id)

            const updateItem = !!searchItemDel ? state.item.map(el => el.id === action.payload.id ? {...el} : el) : [...state.item, ...searchUpdateCreatedItem]

            return {...state, createItem: delCreatedItem, item: updateItem }

        case gameActionTypes.CREATE_ITEM:

            const checkLength = state.createItem.length === 4

            const searchRareItem =  state.createItem.map(el => el.rare)

            const checkLvlRare = searchRareItem[0] === 3 ? 0 : +1

            const searchLvlRare =  state.itemsGame.filter(el => el.rare === searchRareItem[0] + checkLvlRare)

            const ulLvlRare =  searchLvlRare[Math.floor(Math.random() * searchLvlRare.length)]

            const addRandomRare = {...ulLvlRare, id: uuidv4()}

            const clearCreateItem = !!ulLvlRare && []

            return {...state, item: [...state.item, addRandomRare], newCreateItem: [addRandomRare], createItem: clearCreateItem}

        case gameActionTypes.CLEAR_CREATED_ITEM:

            return {...state, newCreateItem: []}


        case gameActionTypes.INCIDENT:

            const randomIncident = Math.floor( Math.random() * 101)

            const searchIdWorkIncident = state.workDb.filter(el => randomIncident > el.incidentScaleStart && randomIncident < el.incidentScaleEnd)

            const searchItemIncident = !!searchIdWorkIncident && searchIdWorkIncident.map(el => el.work).join(' ')

            const effectIncidentWorker =  state.workers.map(el => el.idWork === searchItemIncident ? {...el, incident: el.incident = 100, damage: el.damage + 5} : el)

            return {...state, workers: effectIncidentWorker}



        default:
            return state
    }
}
