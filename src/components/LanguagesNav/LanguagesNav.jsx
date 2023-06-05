const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']

const LanguagesNav = ({ onClick, selectedLanguage }) => {

    return (
        <ul className="languages">
            {languages.map((language, index) => (
                <li key={index} className={language === selectedLanguage ? 'active' : null}
                    onClick={() => onClick(language)}>{language}</li>
            ))}
        </ul>
    )
}

export default LanguagesNav