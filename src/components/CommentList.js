import React, {Component} from 'react'
import {connect} from 'react-redux'
import Comment from './Comment'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import {loadCommentsByArticleId} from '../AC'
import Loader from './Loader'

class CommentList extends Component {
    static defaultProps = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentDidMount() {
        const { article: { id } } = this.props
        this.props.loadCommentsByArticleId(id)
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { article: {id}, isOpen, comments, loading } = this.props
        if (!isOpen) return null
        if (loading) return <Loader />
        console.log('comments: ' + JSON.stringify(comments))
        const body = comments && comments.length ? (
            <ul>
                {comments.map(id => <li key = {id}><Comment id = {id} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
                <CommentForm articleId = {id} />
            </div>
        )
    }
}


export default connect( state => {
    console.log(state)
    return ({
        comments: state.comments.valueSeq().toArray(),
        loading: state.comments.loading
    })
}, { loadCommentsByArticleId })(toggleOpen(CommentList))