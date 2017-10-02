import React, { Component } from 'react'
import ArticleList from './ArticleList'

class AccordionComponent extends Component {

    memoized = new Map()
    
    state = {
        openItemId: null
    }

    toggleArticle = (openItemId) => {
        if (this.memoized.get(openItemId)) return this.memoized.get(openItemId)
        const func = (ev) => {
            this.setState({
                openItemId: this.state.openItemId === openItemId ? null : openItemId
            })
        }

        this.memoized.set(openItemId, func)

        return func
    }

    render() {
        return (
            <ArticleList {...this.props} openItemId = {this.state.openItemId} toggleArticle = {this.toggleArticle} />
        )
    }
}

export default AccordionComponent