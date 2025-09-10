import { fetchAndRenderComments } from './modules/fetchAndRenderComments.js'

    const loaderComments = document.querySelector('.loader')

    const firstLoad = () => {

    fetchAndRenderComments()

    loaderComments.classList.add('hidden')
    }

firstLoad()
