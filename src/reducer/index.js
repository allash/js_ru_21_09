import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import defaultArticles from './defaultArticles'
import filter from './filter'

export default combineReducers({
    counter: counterReducer,
    articles,
    filter,
    defaultArticles
})