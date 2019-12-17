import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUserComponent from "../users/ListUserComponent";
import AddUserComponent from "../users/AddUserComponent";
import EditUserComponent from "../users/EditUserComponent";
import React from "react";

const AppRouter = () => {
    return(
        <div>
            <Router>
                <div>
                    <h1 className="App-header col-xs-12" style={style}>React User App</h1>
                    <Switch>
                        <Route path="/" exact component={ListUserComponent} />
                        <Route path="/users" component={ListUserComponent} />
                        <Route path="/add-user" component={AddUserComponent} />
                        <Route path="/edit-user" component={EditUserComponent} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

const style = {
    color: 'red',
    margin: '10px'
}

export default AppRouter;