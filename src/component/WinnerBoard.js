import React from 'react';

export default function WinnerBoard(props) {

        if(props.winners.length > 0) {
            props.winners.sort((a, b) => (Math.round(a.step / 2) > Math.round(b.step / 2)) ? 1 : -1);
        }

        return (
            <ol className="list-decimal">
                {props.winners.length > 0 ?
                    props.winners.map(winner => (
                    <li
                        className="text-black text-xl"
                        key={Date.now() + Math.random()}>

                        Player
                         <span className={"font-bold text-2xl " + (winner.name === "X" ? ' text-green-500' : 'text-yellow-500')}>
                             {" " + winner.name + " " }
                        </span>
                            won with
                         <span className={"font-bold text-2xl " + (winner.name === "X" ? ' text-green-500' : 'text-yellow-500')}>
                             {" " + Math.round(winner.step / 2) + " "}
                        </span>

                        moves
                    </li>
                )) :
                <div>No Winner Yet</div>}
            </ol>
        );

}