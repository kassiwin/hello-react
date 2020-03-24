import React from 'react'

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {

    renderSquare(i) {
        return (
            <Square
                key={"square-" + i}
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
           dboard.push(<div className="board-row">{b[i]}</div>);
       }
       return dboard;

    }




    render() {
        console.log(this.props.boardSize);
        return (
            
            <div>

              {this.displayBoard(
                  this.rowsToBoard(
                      this.renderBoard(this.props.boardSize), this.props.boardSize)
              )}
            </div>
        );
    }
}
export default Board