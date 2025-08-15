import { commentInfo } from './commentInfo.js'
import { renderComments } from './renderComments.js'
import { postComment } from './postComment.js'

const commentEl = document.querySelector('.add-form-text')
const button = document.querySelector('.add-form-button')
const nameEl = document.querySelector('.add-form-name')
const form = document.querySelector('.add-form')
const loaderNewComments = document.querySelector('.loader-new')

function delay(interval = 300) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, interval)
    })
}

const handlePostClick = () => {
    postComment().catch((error) => {
        if (error.message === 'Ошибка сервера') {
            handlePostClick()
        }
    })
}

export const initLikeListeners = () => {
    const likeButtonElements = document.querySelectorAll('.like-button')

    for (const likeButtonElement of likeButtonElements) {
        likeButtonElement.addEventListener('click', (event) => {
            event.stopPropagation()

            const index = likeButtonElement.dataset.index
            const comments = commentInfo[index]
            likeButtonElement.classList.add('-loading-like')

            delay(2000).then(() => {
                comments.likes = comments.isLiked
                    ? comments.likes - 1
                    : comments.likes + 1
                comments.isLiked = !comments.isLiked

                renderComments()
            })
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
    loaderNewComments.classList.remove('hidden')
    form.classList.add('hidden')

    postComment()
        .then(() => {
            loaderNewComments.classList.add('hidden')
            form.classList.remove('hidden')
        })
        .catch((error) => {
            if (error.message === 'Failed to fetch') {
                alert('Интернета нет, попробуйте снова!')
            }

            if (error.message === 'Ошибка сервера') {
                alert('Ошибка сервера!')
            }

            if (error.message === 'Неверный запрос') {
                alert(
                    'Упс, ошибка! В полях для заполнения должно быть больше трёх символов!',
                )

                nameEl.classList.add('error')
                commentEl.classList.add('error')

                setTimeout(() => {
                    nameEl.classList.remove('error')
                    commentEl.classList.remove('error')
                }, 2000)
            }
        })
})
