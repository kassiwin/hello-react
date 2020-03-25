import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
function Header() {
    return (
        <Router>
            <header>
                <div className="bg-black flex flex-col lg:flex-row text-white justify-between h-auto items-center p-3">
                    <Link to="/"> Game </Link>
                    <Link to='/news'> News </Link>
                    <div
                        onClick={() => {window.location.reload();}}
                        className="bg-red-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Reset the Game
                    </div>
                </div>
            </header>
        </Router>
    );
}

export default Header;


