import defaultArticles from '../fixtures'
import {DELETE_ARTICLE, FILTER_ARTICLES} from '../constants'

export default (articleState = defaultArticles, action) => {
    const {type, payload} = action
    switch (type) {
        case DELETE_ARTICLE:
            return articleState.filter(article => article.id !== payload.id)
        case FILTER_ARTICLES:
            let {selected, dateRange} = payload.filter
            let filtered = []
            
            if (selected && selected.length) {
                for (let i = 0; i < defaultArticles.length; i++) {
                    for (var j = 0; j < selected.length; j++) {
                        if (defaultArticles[i].title === selected[j].label) {
                            filtered.push(defaultArticles[i])
                        }
                    }
                }
            } else {
                filtered = defaultArticles
            }

            return dateRange.from && dateRange.to ? filtered.filter(article => {
                let dateTime = new Date(article.date).getTime()
                return dateTime >= dateRange.from.getTime() && dateTime <= dateRange.to.getTime()
            }) : filtered
    }
    return articleState
}