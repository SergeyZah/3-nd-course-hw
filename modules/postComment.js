import { fetchAndRenderComments } from './fetchAndRenderComments.js'

import { token } from './fetchAndRenderComments.js'
const host = 'https://wedev-api.sky.pro/api/v2/:sergei-zaharychev'

export const postComment = (text, name) => {
    const form = document.querySelector('.add-form')
    const loaderNewComments = document.querySelector('.loader-new')
    const button = document.querySelector('.add-form-button')

    button.disabled = true

    return fetch(host + '/comments', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            text,
            name,
            // forceError: true,
        }),
    }).then((response) => {
        // loaderNewComments.classList.add('hidden')
        // form.classList.remove('hidden')

        const responseStatus = response.status

        if (responseStatus === 201) {
            return fetchAndRenderComments()
        }

        if (responseStatus === 500) {
            throw new Error('Ошибка сервера')
        }

        if (responseStatus === 400) {
            throw new Error('Неверный запрос')
        }
    })
}
