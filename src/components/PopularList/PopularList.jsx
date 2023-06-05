const PopularList = ({ repositories = [] }) => {

    return (
        <ul className="popular-list">
            {repositories.map((rep, index) => (
                <li key={rep.id} className='popular-item'>
                    <div className="popular-rank">
                        #{index + 1}
                    </div>
                    <ul className="space-list-items">
                        <li>
                            <img className="avatar" src={rep.owner.avatar_url} alt="Avatar" />
                        </li>
                        <li>
                            <a href={rep.html_url} target='_blank' rel="noreferrer">{rep.name}</a>
                        </li>
                        <li>@{rep.owner.login}</li>
                        <li>{rep.stargazers_count} stars</li>
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default PopularList