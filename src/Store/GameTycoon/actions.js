export const gameActionTypes = {
    ADD_WORKER: "GAME.ADD_WORKER",
    DEL_WORKER: "GAME.DEL_WORKER",
    WATCHER_GAME: "GAME.WATCHER_GAME",
    UP_LVL: "GAME.UP_LVL",
    ADD_SPEED: "GAME.ADD_SPEED",
    CHECK_BALANCE: "GAME.CHECK_BALANCE",
    SAVE_MONEY: "GAME.SAVE_MONEY",
    ADD_ITEM: "GAME.ADD_ITEM",
    ADD_ITEM_WORKER: "GAME.ADD_ITEM_WORKER",
    DEL_ITEM_WORKER: "GAME.DEL_ITEM_WORKER",
    SELL_ITEM_WORKER: "GAME.SELL_ITEM_WORKER",
    ADD_CREATE_ITEM: "GAME.ADD_CREATE_ITEM",
    DEL_CREATE_ITEM: "GAME.DEL_CREATE_ITEM",
    CREATE_ITEM: "GAME.CREATE_ITEM",
    CLEAR_CREATED_ITEM: "GAME.CLEAR_CREATED_ITEM",
    INCIDENT: "GAME.INCIDENT",
}



export const gameActions = {
    addWorker: (payload) => ({type: gameActionTypes.ADD_WORKER, payload}),
    delWorker: (id) => ({type: gameActionTypes.DEL_WORKER, payload:{id}}),
    upLvl: (payload) => ({type: gameActionTypes.UP_LVL, payload}),
    addSpeed: (work,speed,price) => ({type: gameActionTypes.ADD_SPEED, payload:{work,speed,price}}),
    checkBalance: () => ({type: gameActionTypes.CHECK_BALANCE}),
    saveMoney: (payload) => ({type: gameActionTypes.SAVE_MONEY,payload}),
    addItem: () => ({type: gameActionTypes.ADD_ITEM}),
    watcherGame: () => ({type: gameActionTypes.WATCHER_GAME}),
    addItemWorker: (id,paramsId) => ({type: gameActionTypes.ADD_ITEM_WORKER, payload:{id,paramsId}}),
    delItemWorker: (id,paramsId) => ({type: gameActionTypes.DEL_ITEM_WORKER, payload: {id,paramsId}}),
    sellItemWorker: (id,paramsId) => ({type: gameActionTypes.SELL_ITEM_WORKER, payload: {id,paramsId}}),
    addCreatedItem: (id,name) => ({type: gameActionTypes.ADD_CREATE_ITEM, payload:{id,name}}),
    delCreatedItem: (id) => ({type: gameActionTypes.DEL_CREATE_ITEM, payload: {id}}),
    createItem: () => ({type: gameActionTypes.CREATE_ITEM}),
    clearCreatedItem: () => ({type: gameActionTypes.CLEAR_CREATED_ITEM}),
    incident: () => ({type: gameActionTypes.INCIDENT})
}