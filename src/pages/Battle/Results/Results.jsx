import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { makeBattle } from '../../../plugins/api'
import PlayerInfo from "./PlayerInfo"
import Loader from "../../../components/Loader"



const Results = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(true)
    const [winner, setWinner] = useState('')
    const [loser, setLoser] = useState('')
    const [error, setError] = useState(null)
    useEffect(() => {

        makeBattle([searchParams.get('playerOneName'), searchParams.get('playerTwoName')])
            .then(([winner, loser]) => {
                setWinner(winner)
                setLoser(loser)
            })
            .catch(error => setError(error))
            .finally(() => setLoading(false))

    }, [])

    if (loading)
        return <Loader />

    if (error)
        return <p>{error}</p>

    return (
        <div className="row" >
            <PlayerInfo label='Winner' profile={winner.profile} score={winner.score} />
            <PlayerInfo label='Loser' profile={loser.profile} score={loser.score} />
        </div>

    )
}

export default Results