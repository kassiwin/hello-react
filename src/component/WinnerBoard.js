import React from 'react'

class WinnerBoard extends React.Component {
    render() {
        this.props.winners.sort((a, b) => (Math.round(a.step / 2) > Math.round(b.step / 2)) ? 1 : -1);
        return (
           
            <ul className="winner-board-list">
                
                {this.props.winners.map(winner => (
                    <li className="winner-item" key={Date.now() + Math.random()}> Player { winner.name} won with { Math.round(winner.step / 2)} moves </li>
                ))}
            </ul>
        );
    }
}

export default WinnerBoard