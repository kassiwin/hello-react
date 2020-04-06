import React, {useCallback, useState} from 'react'
import Board from './Board'
import WinnerBoard from './WinnerBoard'
import calculateWinner from './Utils'


function Game() {


    const [boardSize, setBoardSize] = useState(3);
    const [history, setHistory] = useState([{squares: Array(3).fill(null)}]);
    const [winners, setWinner] = useState([]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);

    const HandleBoardSizeChange = useCallback(
        (e) => {
            let {value} = e.target;
            setBoardSize(parseInt(value, 10));
            e.preventDefault();
        },
        [], // Tells React to memoize regardless of arguments.
    );


    function handleClick(i) {
        const lochistory = history.slice(0, stepNumber + 1);
        const current = lochistory[lochistory.length - 1];
        const squares = current.squares.slice();


        if (calculateWinner(squares, boardSize) || squares[i]) {
            return;
        }

        squares[i] = xIsNext ? "X" : "O";
        setHistory(history.concat({squares: squares}));
        setStepNumber(history.length);
        setXisNext(!xIsNext);
    }


    function addWinner(winner) {
        setWinner(
            winners.concat({
                name: winner,
                step: stepNumber
            })
        );
    }


    function jumpTo(step, winner) {
        setStepNumber(step);

        setXisNext((step % 2) === 0);

        if (step === 0 && winner) {
            addWinner(winner);
            setHistory([{squares: Array(boardSize).fill(null)}]);
            console.log("Jump To", history);
        }
    }


    const current = history[stepNumber];
    const winner = calculateWinner(current.squares, boardSize);

    const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move} className="flex flex-col items-center">
                <button
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded my-2 w-40"
                    onClick={() => jumpTo(move, winner)}>
                    {desc}
                </button>
            </li>
        );
    });


    let status;
    let resetGameBtn;
    if (winner) {
        status = <span>Winner: <span
            className={(winner === "X" ? ' text-green-500' : 'text-yellow-500')}>{winner}</span> </span>;
        resetGameBtn = "visible";

    } else {
        status = <span>Next player: <span
            className={(xIsNext ? 'text-green-500' : 'text-yellow-500')}>{xIsNext ? "X" : "O"}</span> </span>;
        resetGameBtn = "hidden";
    }




return (
    <div>
        <div className="flex flex-col mb-4 items-center">
            <h2 className="font-bold text-xl p-3 m-5">Choose the Board Size</h2>
            <div className="inline-block relative w-64">
                <select
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    defaultValue={boardSize}
                    onChange={HandleBoardSizeChange}>
                    <option value="4">4 x 4 Board</option>
                    <option value="3">3 x 3 Board</option>
                </select>
                <div
                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:items-start justify-between p-5">


            <div className="mx-4 flex flex-col">

                <button
                    className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5 mx-auto " + resetGameBtn}
                    onClick={() => jumpTo(0, xIsNext ? "O" : "X")}>
                    Play Again
                </button>

                <div className="m-5 border-2 text-center border-blue-200 uppercase text-xl">{status}</div>
                <div className="game-board">
                    <Board
                        boardSize={boardSize}
                        squares={current.squares}
                        onClick={i => handleClick(i)}
                    />
                </div>

            </div>
            <div className="flex flex-row justify-between">

                <ol>{moves}</ol>
            </div>

            <div className="border shadow-lg pt-0 w-full max-w-sm mr-4 mb-4">
                <h2 className="text-2xl rounded bg-black text-white text-center font-bold p-2 mb-3">Winner
                    Board</h2>

                <div className="flex flex-col items-center justify-center p-8">
                    <WinnerBoard winners={winners}/>
                </div>

            </div>
        </div>

    </div>
);

}

export default Game