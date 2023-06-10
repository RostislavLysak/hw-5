import { memo } from "react"
import { Link } from "react-router-dom"
import PlayerPreview from "../PlayerPreview"
import './PlayerInfo.css'

const PlayerInfo = memo(({ label, profile, score }) => {
    return (
        <div className="card column" style={{ textAlign: 'center' }}>
            <div className="content">
                <h2>{label}</h2>
                <h3>Score: {score}</h3>
                <PlayerPreview avatar={profile.avatar_url} userName={profile.login}>
                    <ul className="space-list-item">
                        {profile.name ? <li>Name: {profile.name}</li> : null}
                        {profile.location ? <li>Location: {profile.location}</li> : null}
                        {profile.company ? <li>Company: {profile.company}</li> : null}
                        <li>Followers: {profile.followers}</li>
                        <li>Following: {profile.following}</li>
                        {profile.public_repos ? <li> Public repositories: {profile.public_repos}</li> : null}
                        {profile.blog ? <li><Link to={profile.blog} alt='Blog' target='_blank' >{profile.blog}</Link></li> : null}
                    </ul>
                </PlayerPreview>
            </div>
        </div>
    )
})

export default PlayerInfo