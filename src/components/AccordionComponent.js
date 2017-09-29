import React, { Component } from 'react'
import ArticleList from './ArticleList'

class AccordionComponent extends Component {

    memoized = new Map()
    
    state = {
        openArticleId: null
    }

    toggleArticle = (openArticleId) => {
        if (this.memoized.get(openArticleId)) return this.memoized.get(openArticleId)
        const func = (ev) => {
            this.setState({
                openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
            })
        }

        this.memoized.set(openArticleId, func)

        return func
    }

    render() {
        return (
            <ArticleList {...this.props} openArticleId = {this.state.openArticleId} toggleArticle = {this.toggleArticle} />
        )
    }
}

export default AccordionComponent