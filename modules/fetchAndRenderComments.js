import { updateCommentInfo } from "./commentInfo.js"
import { renderComments } from "./renderComments.js"

const commentEl = document.querySelector('.add-form-text')
const nameEl = document.querySelector('.add-form-name')
const host = 'https://wedev-api.sky.pro/api/v2/:sergei-zaharychev'
const authHost = 'https://wedev-api.sky.pro/api/user'

let token = ''

export const setToken = (newToken) => {
    token = newToken
}

export const fetchAndRenderComments = () => {
    fetch(host +'/comments', {
        method: 'GET',
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            updateCommentInfo(data.comments)
            renderComments()
        })

        nameEl.value = ''
        commentEl.value = ''
}