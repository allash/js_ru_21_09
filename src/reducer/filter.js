import {SET_FILTER} from '../constants'

export default (state = { selected: null, dateRange: { from: null, to: null } }, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_FILTER:
            return payload.filter
    }

    return state
}