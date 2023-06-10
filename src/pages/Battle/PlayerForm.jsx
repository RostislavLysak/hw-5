import { useState, memo } from "react"

const PlayerForm = memo(({ id, label, onSubmit }) => {
    const [userName, setUserName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(id, userName)
    }

    return (
        <form className="column" onSubmit={handleSubmit}>
            <label htmlFor={id} className="header">
                {label}
            </label>
            <input type='text' id={id} value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='GitHub Username' autoComplete="off" />
            <button className="button" disabled={!userName.length}>Submit</button>
        </form>
    )
})

export default PlayerForm