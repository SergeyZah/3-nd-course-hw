import { commentInfo } from './commentInfo.js'
import { initLikeListeners } from './initListeners.js'
import { initCommentListeners } from './initListeners.js'

const listCommentEl = document.querySelector('.comments')
const likeButtonEl = document.querySelector('.like-button')

export const renderComments = () => {
    const commentsHTML = commentInfo
        .map((comment, index) => {
            return `<li class="comment" data-index="${index}">
          <div class="comment-header">
            <div>${comment.name}</div>
            <div>${comment.data}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${comment.text}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.counter}</span>
              <button class="like-button ${comment.likeActive ? '-active-like' : ''}" data-index="${index}"></button>
            </div>
          </div>
        </li>`
        })
        .join('')

    listCommentEl.innerHTML = commentsHTML

    initLikeListeners()
    initCommentListeners()
}
