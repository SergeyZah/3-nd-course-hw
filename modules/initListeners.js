import { commentInfo } from './commentInfo.js'
import { renderComments } from './renderComments.js'
import { clearHTML } from './utils.js'
import { fetchAndRenderComments } from './fetchAndRenderComments.js'

const commentEl = document.querySelector('.add-form-text')
const button = document.querySelector('.add-form-button')
const nameEl = document.querySelector('.add-form-name')

export const initLikeListeners = () => {
    const likeButtonElements = document.querySelectorAll('.like-button')

    for (const likeButtonElement of likeButtonElements) {
        likeButtonElement.addEventListener('click', (event) => {
            event.stopPropagation()

            const index = likeButtonElement.dataset.index
            const comments = commentInfo[index]

            comments.likes = comments.isLiked
                ? comments.likes - 1
                : comments.likes + 1
            comments.isLiked = !comments.isLiked

            renderComments()
        })
    }
}

export const initCommentListeners = () => {
    const commentsElements = document.querySelectorAll('.comment')

    for (const commentsElement of commentsElements) {
        commentsElement.addEventListener('click', () => {
            const currentComment = commentInfo[commentsElement.dataset.index]

            commentEl.value = `${currentComment.author.name}: ${currentComment.text}`

            renderComments()
        })
    }
}

button.addEventListener('click', () => {
    nameEl.style.backgroundColor = '#fff'
    commentEl.style.backgroundColor = '#fff'

    if (nameEl.value === '' && commentEl.value === '') {
        nameEl.style.backgroundColor = 'rgb(231, 67, 67)'
        commentEl.style.backgroundColor = 'rgb(231, 67, 67)'
        return
    } else if (nameEl.value === '') {
        nameEl.style.backgroundColor = 'rgb(231, 67, 67)'
        return
    } else if (commentEl.value === '') {
        commentEl.style.backgroundColor = 'rgb(231, 67, 67)'
        return
    }

    const newCommentInfo = {
        text: clearHTML(commentEl.value),
        name: clearHTML(nameEl.value),
    }

    fetch('https://wedev-api.sky.pro/api/v1/sergei-zaharychev/comments', {
        method: 'POST',
        body: JSON.stringify(newCommentInfo),
    }).then((response) => {
        const responseStatus = response.status
        if (responseStatus === 201) {
            return fetchAndRenderComments()
        }
        if (responseStatus === 400) {
            if (nameEl.value.length < 3 || commentEl.value.length < 3) {
                alert('Упс, ошибка! В поле для заполнения должно быть больше трёх символов!')
                return
            }
        }
    })

    nameEl.value = ''
    commentEl.value = ''
})
