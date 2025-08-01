import { commentInfo } from './commentInfo.js'
import { initLikeListeners } from './initListeners.js'
import { initCommentListeners } from './initListeners.js'

const listCommentEl = document.querySelector('.comments')
const likeButtonEl = document.querySelector('.like-button')

export const renderComments = () => {
    const commentsHTML = commentInfo
        .map((comments, index) => {
            return `<li class="comment" data-index="${index}">
          <div class="comment-header">
            <div>${comments.author.name}</div>
            <div>${comments.date}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${comments.text}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comments.likes}</span>
              <button class="like-button ${comments.isLiked ? '-active-like' : ''}" data-index="${index}"></button>
            </div>
          </div>
        </li>`
        })
        .join('')

    listCommentEl.innerHTML = commentsHTML

    initLikeListeners()
    initCommentListeners()
}
