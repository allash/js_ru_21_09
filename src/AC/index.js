import {INCREMENT, DELETE_ARTICLE, FILTER_ARTICLES, SET_FILTER} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function filterArticles(filter) {
    return {
        type: FILTER_ARTICLES,
        payload: {filter}
    }
}

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        payload: {filter}
    }
}