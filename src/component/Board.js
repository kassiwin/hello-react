import React from 'react'

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardSize: props.boardSize,
        }
        console.log(props.boardSize);
    }
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    rowsToBoard(rows, bSize) {
         let board = [], i, k;

         for (i = 0, k = -1; i < rows.length; i++) {
            if (i % bSize === 0) {
                k++;
                board[k] = [];
            }

             board[k].push(rows[i]);
        }
        return board;
    }

    renderBoard(n) {
        let rows = [];
        for (let i = 0; i < n*n; i++) {
            rows.push(this.renderSquare(i));
        }
        return rows;
    }

    displayBoard(b) {
        let dboard = [];
       for (let i in b) {
           dboard.push(<div key={Date.now() + Math.random()} className="board-row">{b[i]}</div>);
       }
       return dboard;

    }


    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.boardSize !== prevState.boardSize) {
            return ({ boardSize: nextProps.boardSize }) // <- this is setState equivalent
        }

    }


    render() {
        console.log(this.state.boardSize);
        return (
            
            <div>

              {this.displayBoard(
                  this.rowsToBoard(
                      this.renderBoard(this.state.boardSize), this.state.boardSize)
              )}
            </div>
        );
    }
}
export default Board