import { useState, useEffect, useMemo } from "react"
import { fetchPopularRepos } from "../../plugins/api"
import { memo } from "../../utils/index"
import { useSearchParams } from "react-router-dom"
import Loader from "../../components/Loader"
import LanguagesNav from "../../components/LanguagesNav"
import PopularList from "../../components/PopularList"




const Popular = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [selectedLanguage, setSelectedLanguage] = useState(searchParams.get('lang') ?? 'All')
    const [loading, setLoading] = useState(false)
    const [repos, setRepos] = useState([])
    const [error, setError] = useState(null)


    const fetchPopularReposMemoized = useMemo(() => memo(fetchPopularRepos), [])

    useEffect(() => {
        setLoading(true)

        fetchPopularReposMemoized(selectedLanguage)
            .then(response => setRepos(response))
            .catch(error => setError(error))
            .finally(() => setLoading(false))


    }, [selectedLanguage])

    const handleClick = (value) => {
        setSelectedLanguage(value)
        setSearchParams(`?lang=${value}`)
    }

    return (
        <>
            {loading ? <Loader /> : null}
            <div>
                <LanguagesNav onClick={handleClick} selectedLanguage={selectedLanguage} />
                <PopularList repositories={repos} />
            </div >
        </>
    )
}

export default Popular