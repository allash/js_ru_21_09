import { ADD_COMMENT } from '../constants'

export default store => next => action => {

    let { type, payload } = action

    switch (type) {
        case ADD_COMMENT: 
            payload.comment['id'] = Math.random().toString(10).substr(5)
    }

    next(action);
} 