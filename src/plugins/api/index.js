import axios from 'axios'


const handleError = (error) => {
    throw new Error(error)
}

const getCount = (arr, name) => {
    return arr.reduce((sum, next) => sum + next[name], 0)
}

const handleSort = (arr = [], name = '') => {
    return arr.sort((a, b) => b[name] - a[name])
}

const getGitUser = (username) => {
    return axios.get(`https://api.github.com/users/${username}`)
        .then(user => user.data)
        .catch(handleError)
}

const getGitRepos = (username) => {
    return axios.get(`https://api.github.com/users/${username}/repos`)
        .then(response => response.data)
        .catch(handleError)
}

const getUserData = (username) => {
    return Promise.all([
        getGitUser(username),
        getGitRepos(username)
    ])
        .then(([profile, repos]) => ({ profile, score: getCount(repos, 'stargazers_count') }))
        .catch(handleError)
}

export const makeBattle = (players) => {
    return Promise.all(players.map(getUserData))
        .then((data) => handleSort(data, 'score'))
        .catch(handleError)
}


export const fetchPopularRepos = (language) => {
    return axios.get(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=desc&type=Repositories`)
        .then(
            response => response.data.items
        )
        .catch(handleError)
}