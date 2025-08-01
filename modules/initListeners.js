import { commentInfo } from './commentInfo.js'
import { renderComments } from './renderComments.js'
import { clearHTML } from './utils.js'

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

            commentEl.value = `${currentComment.name}: ${currentComment.text}`

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

    let timeEl = new Date()

    const newUsers = {
        name: clearHTML(nameEl.value),
        text: clearHTML(commentEl.value),
        data: `${timeEl.toLocaleDateString([], { year: '2-digit', month: 'numeric', day: 'numeric' })} ${timeEl.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
        counter: 0,
        likeActive: false,
    }

    commentInfo.push(newUsers)
    renderComments()

    nameEl.value = ''
    commentEl.value = ''
})
