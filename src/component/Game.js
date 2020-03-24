import React from 'react'
import Board from './Board'
import WinnerBoard from './WinnerBoard'
import calculateWinner from './Utils'



class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            boardSize: 3,
            history: [
                {
                    squares: Array(this.boardSize).fill(null)
                }
            ],
            winners: [],
            stepNumber: 0,
            xIsNext: true
        };
        this.handleBoardSizeChange = this.handleBoardSizeChange.bind(this)
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares, this.state.boardSize) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([
                {
                    squares: squares
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    handleBoardSizeChange(e) {
        let {value} = e.target;

       this.setState({boardSize: parseInt(value, 10)});
        e.preventDefault();
    }

    addWinner(winner) {
        this.setState({
            winners: this.state.winners.concat({
                name: winner,
                step: this.state.stepNumber
            })
        });
    }



    jumpTo(step, winner) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });

        if (step === 0 && winner) {
            this.addWinner(winner);

            this.setState({
                history: [
                    {
                        squares: Array(this.boardSize).fill(null)
                    }
                ]
            })
        }
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares, this.state.boardSize);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move} className="flex flex-col items-center">
                    <button
                        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded my-2 w-40"
                        onClick={() => this.jumpTo(move, winner)}>
                        {desc}
                    </button>
                </li>
            );
        });

        let status;
        let resetGameBtn;
        if (winner) {
            status = <span>Winner: <span className={(winner === "X" ? ' text-green-500' : 'text-yellow-500')}>{winner}</span> </span>;
            resetGameBtn = "visible";

        } else {
            status = <span>Next player: <span className={(this.state.xIsNext ? 'text-green-500': 'text-yellow-500' )}>{this.state.xIsNext ? "X" : "O"}</span> </span>;

            resetGameBtn = "hidden";
        }

        return (
            <div>

                <div className="flex flex-col mb-4 items-center">
                    <h2 className="font-bold text-xl p-3 m-5">Choose the Board Size</h2>
                    <div className="inline-block relative w-64">
                        <select
                            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                            defaultValue={this.state.boardSize}
                            onChange={this.handleBoardSizeChange} >
                            <option value="4">4 x 4 Board</option>
                            <option value="3">3 x 3 Board</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center lg:flex-row lg:items-start justify-between p-5">
                    <div className="mx-4 flex flex-col">
                        <div className="m-5 border-2 text-center border-blue-200 uppercase text-xl" >{status}</div>
                        <div className="game-board">
                            <Board
                                boardSize={this.state.boardSize}
                                squares={current.squares}
                                onClick={i => this.handleClick(i)}
                            />
                        </div>

                        <button
                            className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5 mx-auto " + resetGameBtn}
                            onClick={() => this.jumpTo(0, this.state.xIsNext ? "O" : "X" )}>
                            Play Again
                        </button>



                    </div>
                    <div className="flex flex-row justify-between">

                        <ol>{moves}</ol>
                    </div>

                    <div className="border shadow-lg pt-0" style={{"width": "500px"}}>
                        <h2 className="text-2xl rounded bg-black text-white text-center font-bold p-2 mb-3">Winner Board</h2>

                        <div className="flex flex-col items-center justify-center">
                            <WinnerBoard winners={this.state.winners} />
                        </div>

                    </div>


                </div>

            </div>
            
        );
    }
}
export default Game