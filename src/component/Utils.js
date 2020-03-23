function calculateWinner(squares, bordSize) {

    // if(bordSize === 3) {
    //     const lines3by3 = [
    //         [0, 1, 2],
    //         [3, 4, 5],
    //         [6, 7, 8],
    //         [0, 3, 6],
    //         [1, 4, 7],
    //         [2, 5, 8],
    //         [0, 4, 8],
    //         [2, 4, 6]
    //     ];
    //     for (let i = 0; i < lines3by3.length; i++) {
    //         const [a, b, c] = lines3by3[i];
    //         console.log(i);
    //         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    //             console.log("3x3 winner",squares[a]);
    //             return squares[a];
    //         }
    //     }
    // }


    if (bordSize === 4) {
        const lines4by4 = [
            [0, 1, 2, 3],
            [4, 5, 6, 7],
            [8, 9, 10, 11],
            [12, 13, 14, 15],
            [0, 5, 10, 15],
            [3, 6, 9, 12],
            [0, 4, 8, 12],
            [1, 5, 9, 13],
            [2,6,10,14],
            [3, 7, 11, 15]
        ];
        console.log(lines4by4);

        for (let i = 0; i < lines4by4.length; i++) {
            console.log(i);
            const [a, b, c, d] = lines4by4[i];
            console.log("Index Table",[a, b, c, d]);
            if (squares[a] && squares[b] === squares[b] && squares[c] === squares[c] && squares[d] === squares[a] && squares[d]) {
                console.log("4x4 winner", squares[a]);
                return squares[a];
            }
        }

    }

    return null;
}
export default calculateWinner