import React from 'react'


function Header() {
    return (
        <header>
            <div className="bg-black flex flex-col lg:flex-row text-white justify-between h-12 items-center p-3">
                <div>Logo</div>
                <div>Menu</div>
                <div
                    onClick={() => {window.location.reload();}}
                    className="bg-red-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Reset the Game
                </div>
                </div>
        </header>
    );   
}
export default Header;