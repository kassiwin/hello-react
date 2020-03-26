import React from "react";
import SignIn from "./component/Account/SignUp";
import Game from "./component/Game";
import NewsFeed from "./component/NewsFeed";

const routes = [
    {name: "SignIn", path: "/signin", exact: true, main: () => <SignIn />},
    {name: "SignUp", path: "/signup", exact: true, main: () => <SignUp />},
    {name: "Game", path: "/", exact: true, main: () => <Game/>},
    {name: "News", path: "/news", exact: true, main: () => <NewsFeed />},
];

export default routes;