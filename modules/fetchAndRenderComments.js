import { updateCommentInfo } from "./commentInfo.js"
import { renderComments } from "./renderComments.js"

const commentEl = document.querySelector('.add-form-text')
const nameEl = document.querySelector('.add-form-name')

export const fetchAndRenderComments = () => {
    fetch('https://wedev-api.sky.pro/api/v1/sergei-zaharychev/comments', {
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