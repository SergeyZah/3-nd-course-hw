import { updateCommentInfo } from "./commentInfo.js"
import { renderComments } from "./renderComments.js"

const host = 'https://wedev-api.sky.pro/api/v2/:sergei-zaharychev'
const authHost = 'https://wedev-api.sky.pro/api/user'

export let token = ''

export const setToken = (newToken) => {
    token = newToken
}

export let name = ''

export const setName = (newName) => {
    name = newName
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

        // nameEl.value = ''
        // commentEl.value = ''
}