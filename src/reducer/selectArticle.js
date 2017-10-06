import {SELECT_ARTICLE} from '../constants'

export default function(selectArticlesState = [], action) {
    const { type, payload } = action
    switch(type) {
        case SELECT_ARTICLE:
            return payload.selected
    }

    return selectArticlesState
}