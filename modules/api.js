const host = 'https://wedev-api.sky.pro/api/v2/:sergei-zaharychev'
const authHost = 'https://wedev-api.sky.pro/api/user'

export const login = (login, password) => {
    return fetch(authHost + '/login', {
        method: 'POST',
        body: JSON.stringify({login: login, password: password}),
    })
}

export const registration = (name, login, password) => {
    return fetch(authHost, {
        method: 'POST',
        body: JSON.stringify({name:name, login: login, password: password}),
    })
}