import { commentInfo } from './commentInfo.js'
import { initLikeListeners } from './initListeners.js'
import { initCommentListeners } from './initListeners.js'
import { renderLogin } from './renderLogin.js'
import { name, token } from './fetchAndRenderComments.js'

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
            <div class="loader-new hidden">Добавляю комметарий...</div>
            <div class="add-form">
                <input
                    type="text"
                    class="add-form-name"
                    placeholder="Введите ваше имя"
                    readonly
                    value="${name}"
                />
                <textarea
                    type="textarea"
                    class="add-form-text"
                    placeholder="Введите ваш коментарий"
                    rows="4"
                    value=""
                ></textarea>
                <div class="add-form-row">
                    <button class="add-form-button">Написать</button>
                </div>
            </div>
            <button id="exit" class="add-form-button">Выйти из профиля</button>`

    const linkToLoginText = `<p>Чтобы отправить комментарий, <span class="link-login">войдите</span></p>`

    const baseHtml = `<ul class ="comments">${commentsHTML}</ul>
    ${token ? addCommetnsHtml : linkToLoginText}`

    container.innerHTML = baseHtml

    if (token) {
        initLikeListeners()
        initCommentListeners()

        document.getElementById('exit').addEventListener('click', () => {
            renderLogin()
            localStorage.removeItem('saveToken')
        })

    } else {
        document.querySelector('.link-login').addEventListener('click', () => {
            renderLogin()
        })
    }
}
