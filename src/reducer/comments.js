import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS } from '../constants'
//import {normalizedComments} from '../fixtures'
import {arrToMap} from './utils'
import {Record, OrderedMap} from 'immutable'

const CommentRecord = Record({
    id: null,
    user: null,
    text: null
})

const ReducerRecord = Record({
    entities: new OrderedMap({}),
    loading: false,
    loaded: false 
})

export default (state = new ReducerRecord(), action) => {
    const { type, payload, randomId } = action
    console.log('type: ' + type)
    switch (type) {
        case ADD_COMMENT:
            /*return state.set(randomId, {
                ...payload.comment,
                id: randomId
            }) */
            return state
        
        case LOAD_COMMENTS + START: 
            return state.set('loading', true)

        case LOAD_COMMENTS + SUCCESS:
            return state
                .set('loading', false)
                .set('entities', arrToMap(payload.response, CommentRecord))
    }

    
    return state
}