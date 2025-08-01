import { renderComments } from './modules/renderComments.js'
import { updateCommentInfo } from './modules/commentInfo.js'

fetch('https://wedev-api.sky.pro/api/v1/:sergey-zaharychev/comments', {
    method: 'GET',
})
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        updateCommentInfo(data.comments)
        renderComments()
    })
