const host = 'https://wedev-api.sky.pro/api/v2/:sergey-zaharychev'
const authHost = 'https://wedev-api.sky.pro/api/user'

export const login = (login, password) => {
    return fetch(authHost + '/login', {
        method: 'POST',
        body: JSON.stringify({login: login, password: password}),
    }).then((response) => {
        const responseStatusLogin = response.status

        console.log(responseStatusLogin)

        if (responseStatusLogin === 400) {
            throw new Error ('Неверный логин или пароль')
        }
    })
}

export const registration = (name, login, password) => {
    return fetch(authHost, {
        method: 'POST',
        body: JSON.stringify({name:name, login: login, password: password}),
    })
}