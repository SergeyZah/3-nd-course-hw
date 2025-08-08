import { commentInfo } from './commentInfo.js'
import { initLikeListeners } from './initListeners.js'
import { initCommentListeners } from './initListeners.js'

const listCommentEl = document.querySelector('.comments')

export const renderComments = () => {
  
    const commentsHTML = commentInfo
        .map((comment, index) => {
            return `<li class="comment" data-index="${index}">
          <div class="comment-header">
            <div>${comment.author.name}</div>
            <div>${comment.date}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${comment.text}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.likes}</span>
              <button class="like-button ${comment.isLiked ? '-active-like' : ''}" data-index="${index}"></button>
            </div>
          </div>
        </li>`
        })
        .join('')

    listCommentEl.innerHTML = commentsHTML

    initLikeListeners()
    initCommentListeners()
}
