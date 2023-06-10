import { useState } from "react"
import { Link } from "react-router-dom"
import PlayerForm from "./PlayerForm"
import PlayerPreview from "./PlayerPreview"


const Battle = () => {
    const [players, setPlayers] = useState({
        playerOneName: '',
        playerTwoName: '',
        playerOneImage: null,
        playerTwoImage: null
    })
    const handleSubmit = (id, userName) => {
        setPlayers({ ...players, [`${id}Name`]: userName, [`${id}Image`]: `https://github.com/${userName}.png?size200` })
    }

    const handleReset = (id) => {
        setPlayers({ ...players, [`${id}Name`]: '', [`${id}Image`]: null })
    }

    return (
        <>
            <div className="row">
                {players.playerOneImage ?
                    <PlayerPreview avatar={players.playerOneImage}
                        userName={players.playerOneName} >
                        <button className="reset" onClick={() => handleReset('playerOne')}>Reset</button>
                    </PlayerPreview> :
                    <PlayerForm id='playerOne' label='Player 1' onSubmit={handleSubmit} />}
                {players.playerTwoImage ?
                    <PlayerPreview avatar={players.playerTwoImage}
                        userName={players.playerTwoName}>
                        <button className="reset" onClick={() => handleReset('playerTwo')}>Reset</button>
                    </PlayerPreview> :
                    <PlayerForm id='playerTwo' label='Player 2' onSubmit={handleSubmit} />}
            </div>
            {players.playerOneImage && players.playerTwoImage ?
                <Link className="button" to={{
                    pathname: 'results',
                    search: `?playerOneName=${players.playerOneName}&playerTwoName=${players.playerTwoName}`
                }}>
                    Battle
                </Link> :
                null}
        </>
    )
}

export default Battle
