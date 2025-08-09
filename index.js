import { fetchAndRenderComments } from './modules/fetchAndRenderComments.js'

    const listCommentEl = document.querySelector('.comments')
    const loaderComments = document.querySelector('.loader')

    listCommentEl.classList.add('hidden')

    const firstLoad = () => {

    fetchAndRenderComments()

    listCommentEl.classList.remove('hidden')
    loaderComments.classList.add('hidden')
    }

firstLoad()
