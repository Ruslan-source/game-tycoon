import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Header} from "../Components/Header/Header";
import {paths} from "../constants/constants.route";
import {WorkList} from "../Pages/WorkList/WorkList";
import {WorkParams} from "../Pages/WorkParams/WorkParams";
import {WorkerParams} from "../Pages/WorkerParams/WorkerParams";
import {Office} from "../Pages/Office/Office";
import {CreateItems} from "../Pages/CreateItems/CreateItems";

function Routing() {

    return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path={paths.home}>
                        <WorkList />
                    </Route>
                    <Route path={paths.workItem}>
                            <WorkParams />
                    </Route>
                    <Route path={paths.workerItem}>
                        <WorkerParams />
                    </Route>
                    <Route path={paths.office}>
                        <Office />
                    </Route>
                    <Router paths={paths.createItems}>
                        <CreateItems />
                    </Router>
                </Switch>
            </Router>
    );
}

export {Routing};