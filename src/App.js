import React from 'react';
import Game from "./component/Game";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import NewsFeed from "./component/NewsFeed";
import Header from "./component/Header";
import SignIn from "./component/Account/SignIn";
import SignUp from "./component/Account/SignUp";


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
        console.log(this.state.isAuthenticated);
        return (
            <Router>
                <div>
                    <Header/>
                </div>

                <Switch>
                    <Route exact path="/signin">
                        <SignIn setAuthenticated={this.setAuthenticated} />
                    </Route>

                    <Route exact path="/signup">
                        <SignUp />
                    </Route>

                    <Route exact path={"/news"}>
                        {this.state.isAuthenticated ? <NewsFeed />: <SignIn setAuthenticated={this.setAuthenticated} />}
                    </Route>

                    <Route exact path="/">
                        <Game/>
                    </Route>
                </Switch>
            </Router>
        );
    }

}




export default App;
