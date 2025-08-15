import { fetchAndRenderComments } from './fetchAndRenderComments.js'
import { clearHTML } from './utils.js'

const commentEl = document.querySelector('.add-form-text')
const nameEl = document.querySelector('.add-form-name')
const form = document.querySelector('.add-form')
const loaderNewComments = document.querySelector('.loader-new')

const newCommentInfo = {
    text: clearHTML(commentEl.value),
    name: clearHTML(nameEl.value),
    forceError: true,
}

export const postComment = () => {
    return fetch(
        'https://wedev-api.sky.pro/api/v1/sergei-zaharychev/comments',
        {
            method: 'POST',
            body: JSON.stringify(newCommentInfo),
        },
    ).then((response) => {
        loaderNewComments.classList.add('hidden')
        form.classList.remove('hidden')

        const responseStatus = response.status
        console.log(responseStatus)

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
