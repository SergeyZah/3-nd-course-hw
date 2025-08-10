import { fetchAndRenderComments } from './modules/fetchAndRenderComments.js'

    const listCommentEl = document.querySelector('.comments')
    const loaderComments = document.querySelector('.loader')

    const firstLoad = () => {

    listCommentEl.classList.add('hidden')

    fetchAndRenderComments()

    loaderComments.classList.add('hidden')
    listCommentEl.classList.remove('hidden')
    }

firstLoad()
