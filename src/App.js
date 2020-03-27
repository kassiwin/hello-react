import React, {useState} from 'react';
import Game from "./component/Game";
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from "react-router-dom";
import NewsFeed from "./component/NewsFeed";
import Header from "./component/Header";
import SignIn from "./component/Account/SignIn";
import SignUp from "./component/Account/SignUp";

export const AuthContext = React.createContext(null);

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false
        };
        this.setAuthenticated = this.setAuthenticated.bind(this);
    }

    setAuthenticated() {
        this.setState({
            isAuthenticated: true
        });
    }


    render() {
        return (
            <Router>
                <div>
                    <Header/>
                </div>

                <Switch>
                    <Route path="/signin">
                        <SignIn action={this.setAuthenticated}/>
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>

                    <Route path="/news">
                        <NewsFeed />
                    </Route>

                    <Route path="/">
                        <Game/>
                    </Route>
                </Switch>
            </Router>
        );
    }

}




export default App;
