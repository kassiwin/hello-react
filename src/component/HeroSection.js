import React from 'react';
import {Phone}  from '../assets/images/mobile.png';


const HeroSection = () => {
    return (
        <section id="hero-section" className="flex flex-row items-center justify-center">


            <div className="flex flex-row items-center">
                <div id="phone-img-container" className="h-auto" style={{backgroundImage: Phone}}>

                </div>

                <div id="hero-text" className="flex flex-col">

                    <div>
                        <div>
                            Flamboyant
                        </div>
                        <div>
                            Cuisine africaine, fast-food, pizzeria
                        </div>

                    </div>

                    <div>
                        <div>
                            MENU DU JOUR
                        </div>

                        <div>
                            Riz + sauce de poisson frais
                        </div>

                    </div>
                </div>


            </div>




        </section>

    );

}
export default HeroSection;
