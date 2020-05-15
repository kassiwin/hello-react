import React from "react";

const Footer = () => {


    return (
        <footer className="absolute bottom-0 w-full">
            <div className="flex flex-col w-full ">
                <div className="flex flex-row p-4">
                    <div className="p-2">
                        Home
                    </div>
                    <div className="p-2">
                        Nos Plats
                    </div>
                    <div className="p-2">
                        Contact
                    </div>
                </div>
                <div className="self-center text-sm">
                    Copyright ©2020 All rights reserved | Orizon Tech
                </div>

            </div>
            <div id="goup" className="fixed right-0 bottom-0 mb-8 mr-5 cursor-pointer">

            </div>

        </footer>
    );

}

export default Footer;