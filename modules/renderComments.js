import { commentInfo } from './commentInfo.js'
import { initLikeListeners } from './initListeners.js'
import { initCommentListeners } from './initListeners.js'

const container = document.querySelector('.container')

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

    container.innerHTML = commentsHTML

    const addCommetnsHtml = `
            <div class="add-form">
                <input
                    type="text"
                    class="add-form-name"
                    placeholder="Введите ваше имя"
                />
                <textarea
                    type="textarea"
                    class="add-form-text"
                    placeholder="Введите ваш коментарий"
                    rows="4"
                ></textarea>
                <div class="add-form-row">
                    <button class="add-form-button">Написать</button>
                </div>
            </div>
            <div class="loader-new hidden">Добавляю комметарий...</div>`

    const linkToLoginText = `<p>Чтобы отправить комментарий, <span class="link-login">войдите</span></p>`
    
    const baseHtml = `<ul class ="comments">${commentsHTML}</ul>
    ${linkToLoginText}`

    container.innerHTML = baseHtml

    initLikeListeners()
    initCommentListeners()
}
