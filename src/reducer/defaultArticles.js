import defaultArticles from '../fixtures'
import {DELETE_ARTICLE} from '../constants'

export default (articleState = defaultArticles, action) => {
    const {type, payload} = action
    // switch (type) {
    //     case DELETE_ARTICLE:
    //     console.log('delete article: ' + payload.id)
    //     return articleState.filter(article => article.id !== payload.id)
    // }

    return articleState
}