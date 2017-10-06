import {DATE_RANGE} from '../constants'

export default (dateRangeState = { from: null, to: null}, action) => {
    const { type, payload } = action
    switch(type) {
        case DATE_RANGE:
            return { from: payload.dateRange.from, to: payload.dateRange.to } 
    }

    return dateRangeState
}