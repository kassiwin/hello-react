import React from 'react';
import {
    Link
} from "react-router-dom";
function Header() {
    return (

            <header className="fixed w-full z-50 mb-4 overflow-y-scroll overflow-x-hidden h-20 bg-transparent shadow-md lg:shadow-none">

                <div className="bg-white flex flex-col lg:flex-row text-black justify-between items-center p-3 shadow-md">
                    <div className="flex flex-col my-3 lg:my-0 lg:flex-row items-center">
                        <Link to="/"> <span className="hover:font-extrabold">Game</span> </Link>
                        <div
                            onClick={() => {window.location.reload();}}
                            className="hover:bg-red-800 bg-blue-700 text-white py-1 px-4 rounded ml-2 cursor-pointer my-3 lg:my-0">
                            Reset the Game
                        </div>
                    </div>


                    <Link to="/news" ><span className="hover:font-extrabold">News</span>  </Link>

                    <div className="flex flex-col my-3 lg:my-0 lg:flex-row text-white">
                        <div
                            className="bg-green-800 hover:bg-green-700 my-3 hover:font-extrabold lg:my-1  py-2 px-4 rounded mx-2 cursor-pointer">
                            <Link to="/signin">Sign In</Link>
                        </div>
                        <div
                            className="bg-green-800 hover:bg-green-700 my-3 lg:my-1 hover:font-extrabold py-2 px-4 rounded cursor-pointer">
                            <Link to="/signup">Sign Up</Link>
                        </div>

                    </div>

                </div>
            </header>

    );
}

export default Header;


