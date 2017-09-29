import React, { Component as ReactComponent } from 'react'

export default (OriginalComponent) => class AccordionDecorator extends ReactComponent {

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
        return <OriginalComponent {...this.props} openArticleId = {this.state.openArticleId} toggleArticle = {this.toggleArticle}  />
    }
}