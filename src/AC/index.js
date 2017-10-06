import {INCREMENT, DELETE_ARTICLE, DATE_RANGE, SELECT_ARTICLE} from '../constants'

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

export function setDateRange(dateRange) {
    return {
        type: DATE_RANGE,
        payload: { dateRange }
    }
}

export function selectArticle(selected) {
    return {
        type: SELECT_ARTICLE,
        payload: { selected }
    }
}