import { ADD_COMMENT } from '../constants'
import {normalizedComments} from '../fixtures'

const commentsMap = normalizedComments.reduce((acc, article) => {
    return {...acc, [article.id]: article}
}, {})

export default (commentsState = commentsMap, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT:
            let {comment} = payload
            commentsState[comment.id] = {
                id: comment.id,
                user: comment.user,
                text: comment.text
            }
    }

    return commentsState
}