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

       this.setState({boardSize: value});
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
                <li key={move}>
                    <button onClick={() => this.jumpTo(move, winner)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }

        return (
            <div>
                <div>
                    {console.log(this.state.boardSize)}
                    <select  defaultValue={this.state.boardSize}
                             onChange={this.handleBoardSizeChange} >
                        <option value="4">4 x 4 Board</option>
                        <option value="3">3 x 3 Board</option>
                    </select>
                </div>
            <div className="game-container">
                <div className="game">
                    <div className="game-board">
                        <Board
                            boardSize={this.state.boardSize}
                            squares={current.squares}
                            onClick={i => this.handleClick(i)}
                        />
                    </div>
                    <div className="game-info">
                        <div>{status}</div>
                        <ol>{moves}</ol>
                    </div>
                </div>
            </div>
                <div className="winner-board">
                    <WinnerBoard winners={this.state.winners} />
                </div>

            </div>
            
        );
    }
}
export default Game