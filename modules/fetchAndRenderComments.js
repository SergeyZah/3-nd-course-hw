import { updateCommentInfo } from "./commentInfo.js"
import { renderComments } from "./renderComments.js"

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
}