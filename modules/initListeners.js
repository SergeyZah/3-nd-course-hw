import { commentInfo } from './commentInfo.js'
import { renderComments } from './renderComments.js'

export const initLikeListeners = () => {
    const likeButtonElements = document.querySelectorAll('.like-button')

    for (const likeButtonElement of likeButtonElements) {
        likeButtonElement.addEventListener('click', (event) => {
            event.stopPropagation()

            const index = likeButtonElement.dataset.index
            const comment = commentInfo[index]

            comment.counter = comment.likeActive
                ? comment.counter - 1
                : comment.counter + 1
            comment.likeActive = !comment.likeActive

            renderComments()
        })
    }

    const commentsElements = document.querySelectorAll('.comment')

    for (const commentsElement of commentsElements) {
        commentsElement.addEventListener('click', () => {
            const currentComment = commentInfo[commentsElement.dataset.index]

            commentEl.value = `${currentComment.name}: ${currentComment.text}`
        })
    }
}
