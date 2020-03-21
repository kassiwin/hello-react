import React from 'react'

class WinnerBoard extends React.Component {
    render() {
        return (
            <ul>
                {this.props.winners.map(winner => (
                    <li key={Date.now() + Math.random()}> Player { winner.name} won with { Math.round(winner.step / 2)} moves </li>
                ))}
            </ul>
        );
    }
}

export default WinnerBoard