import React from 'react';
import Game  from "./component/Game";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NewsFeed from "./component/NewsFeed";


class App extends React.Component {

  render() {
    return (

        <Router>
            <div>
                <header>
                    <div className="bg-black flex flex-col lg:flex-row text-white justify-between h-auto items-center p-3">

                        <div>
                            <Link to="/">Home</Link>
                        </div>

                        <div>
                            <Link to="/news">News</Link>
                        </div>
                        <div
                            onClick={() => {window.location.reload();}}
                            className="bg-red-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Reset the Game
                        </div>
                    </div>
                </header>
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
