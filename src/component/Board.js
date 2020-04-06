import React from 'react'

function Square(props) {
    return (
        <button className={"square  " + (props.value === "X" ? 'text-green-500' : 'text-yellow-500')}
                onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default function Board(props) {

    function renderSquare(i) {
        return (
            <Square
                key={"square-" + i}
                value={props.squares[i]}
                onClick={() => props.onClick(i)}
            />
        );
    }

    function rowsToBoard(rows, bSize) {
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

    function renderBoard(n) {
        let rows = [];
        for (let i = 0; i < n * n; i++) {
            rows.push(renderSquare(i));
        }
        return rows;
    }

    function displayBoard(b) {
        let dboard = [];
        for (let i in b) {
            dboard.push(<div key={"rows-" + i} className="board-row">{b[i]}</div>);
        }
        return dboard;
    }

    return (
        <div>
            {displayBoard(
                rowsToBoard(
                    renderBoard(props.boardSize), props.boardSize)
            )}
        </div>
    );
}