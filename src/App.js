import React from 'react';
import Game  from "./component/Game";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import NewsFeed from "./component/NewsFeed";
import Header from "./component/Header";


class App extends React.Component {

  render() {
    return (
        <Router>
            <div>
               <Header/>
            </div>

            <Switch>

                <Route path="/news">
                    <NewsFeed />
                </Route>

                <Route path="/">
                    <Game />
                </Route>
            </Switch>
        </Router>
  );
  }

}

export default App;
