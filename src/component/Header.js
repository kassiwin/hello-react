import React from 'react';
import {
    Link
} from "react-router-dom";

const Header = () => {

    function navToggle() {
        let btn = document.getElementById('menuBtn');
        let nav = document.getElementById('menu');

        btn.classList.toggle('open');
        nav.classList.toggle('flex');
        nav.classList.toggle('mob-submenu');
        nav.classList.toggle('hidden');
    }



    window.addEventListener('scroll', function() {
        let nav = document.getElementById('site-menu');
        let header = document.getElementById('top');
        if (window.scrollY >=400) {
            nav.classList.add('nav-sticky');
            header.classList.add('pt-scroll');
        } else {
            nav.classList.remove('nav-sticky');
            header.classList.remove('pt-scroll');
        }
    });
    return (
        //#EA730D
        <header id="top" className="w-full flex flex-col fixed sm:relative text-white mx-auto">
            <nav id="site-menu"
                 className="flex flex-col sm:flex-row w-full h-20 justify-between items-center px-4 sm:px-6 py-1 shadow sm:shadow-none border-t-4 border-red-900">
                <div
                    className="w-full sm:w-auto h-full self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
                    <a href="#" className="no-underline py-1">
                        <h1 className="font-bold text-lg tracking-widest">LOGO Restaurant</h1>
                    </a>
                    <button id="menuBtn" className="hamburger block sm:hidden focus:outline-none" type="button"
                            onClick={() => navToggle()}>
                        <span className="hamburger__top-bun"/>
                        <span className="hamburger__bottom-bun"/>
                    </button>
                </div>
                <div id="menu"
                     className="w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden">
                    <a className="font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2"
                       href="#" target="_blank">Nos Plats</a>
                    <a className="font-bold text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2"
                       href="#">Ecrivez-nous</a>
                </div>
            </nav>
        </header>



    );
}

export default Header;


