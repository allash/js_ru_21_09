import {INCREMENT, DELETE_ARTICLE, CHANGE_DATE_RANGE, CHANGE_SELECTION, ADD_COMMENT, LOAD_ALL_ARTICLES,
    LOAD_ARTICLE, LOAD_ARTICLE_COMMENTS, START, SUCCESS, FAIL} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: { dateRange }
    }
}

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: { selected }
    }
}

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: { comment, articleId },
        generateId: true
    }
}

export function checkAndLoadAllArticles() {
    return (disaptch, getState) => {
        const {articles} = getState()

        if (articles.loading || articles.loaded) return

        disaptch({
            type: LOAD_ALL_ARTICLES,
            callAPI: '/api/article'
        })
    }
}

export function loadArticle(id) {
    return (dispatch, getState) => {
        const article = getState().articles.getIn(['entities', id])

        if (article && (article.text || article.loading)) return

        dispatch({
            type: LOAD_ARTICLE + START,
            payload: { id }
        })

        setTimeout(() => fetch(`/api/article/${id}`)
            .then(res => res.json())
            .then(response => dispatch({
                type: LOAD_ARTICLE + SUCCESS,
                payload: { response, id }
            }))
            .catch(error => dispatch({
                type: LOAD_ARTICLE + FAIL,
                payload: { error, id }
            }))
        , 1000)
    }
}

export function loadArticleComments(articleId) {
    return {
        type: LOAD_ARTICLE_COMMENTS,
        payload: { articleId },
        callAPI: `/api/comment?article=${articleId}`
    }
}