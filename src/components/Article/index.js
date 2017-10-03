import React, {Component, PureComponent} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PropTypes from 'prop-types'
import CommentList from '../CommentList'
import {findDOMNode} from 'react-dom'
import './style.css'

class Article extends PureComponent {
    static defaultProps = {

    }

    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            date: PropTypes.string.isRequired
        }).isRequired,
        isOpen: PropTypes.bool,
        onClick: PropTypes.func
    }

    state = {
        clicked: 0,
        username: '',
        text: '',
        usernameValidationMessage: null,
        textValidationMessage: null,
        usernameValidationStyle: {},
        textValidationStyle: {},
        usernameValid: false,
        textValid: false
    }

    render() {
        const {article, isOpen, onButtonClick} = this.props

        if (this.state.clicked > 3) throw new Error('clicked more then 3 times')

        return (
            <div>
                <h2 ref = {this.setHeaderRef}>
                    {article.title}
                    <button onClick={onButtonClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                    <span onClick = {this.increment}>Clicked: {this.state.clicked} times</span>
                </h2>
                <ReactCSSTransitionGroup
                    transitionName = 'article'
                    transitionEnterTimeout = {500}
                    transitionLeaveTimeout = {300}
                    component = 'div'
                >
                    {this.getBody()}
                    
                </ReactCSSTransitionGroup>

                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    getBody() {
        const {isOpen, article} = this.props
        const {username, text, usernameValidationMessage, textValidationMessage, 
            usernameValidationStyle, textValidationStyle} = this.state

        if (!isOpen) return null

        return (
            <div>
                <section>{article.text}</section>
                <CommentList comments = {article.comments} ref = {this.setCommentsRef} key = {this.state.clicked}/><br />
                <form>
                    <div>
                        <input type='text' name='username' value={username} onChange={this.handleChange} style={ usernameValidationStyle } />
                        {usernameValidationMessage ? <span style={ {color: 'red'} }> Error message</span> : null }
                    </div> <br />
                    <div>
                        <textarea name='text' rows='5' value={text} onChange={this.handleChange} style={ textValidationStyle } />
                        {textValidationMessage ? <span style={ {color: 'red'} }> Error message</span> : null }
                    </div>
                    <div>
                        <button type='submit' onClick={this.onCreateComment} disabled={this.isSubmitButtonDisabled()} >Add comment</button>
                    </div>
                </form>
            </div>
        )
    }

    handleChange = ev => {

        let validationRules = this.getValidationRules()
        let name = ev.target.name
        let value = ev.target.value
        let entityRules = validationRules[ev.target.name]

        if (!value || value.length > entityRules.gt || value.length < entityRules.lt) {
            this.setState({
                [name + 'ValidationMessage']: entityRules.message,
                [name + 'ValidationStyle']: { borderColor: 'red' },
                [name + 'Valid']: false
            })
        } else {
            this.setState({
                [name + 'ValidationMessage']: '',
                [name + 'ValidationStyle']: { borderColor: 'green' },
                [name + 'Valid']: true
            })
        }

        this.setState({[name]: value})
    }

    isSubmitButtonDisabled = () => {
        const { usernameValid, textValid } = this.state
        return !(usernameValid && textValid)
    }

    getValidationRules = () => {
        return { 
            'username': { gt: 50, lt: 10, message: 'Invalid username' },
            'text': { gt: 50, lt: 10, message: 'Invalid text' }
        }
    }

    onCreateComment = (ev) => {
        ev.preventDefault()

        this.setState({
            username: '',
            text: '',
            usernameValidationMessage: null,
            textValidationMessage: null,
            usernameValidationStyle: {},
            textValidationStyle: {},
            usernameValid: false,
            textValid: false
        })
    }

    setHeaderRef = header => {
        this.header = header
    }

    setCommentsRef = comments => {
        this.comments = comments
/*
        setTimeout(() => {
            this.comments.forceUpdate()
        }, 500)
*/
//        console.log('---', 'comments', comments, findDOMNode(comments))
    }

    increment = () => this.setState({
        clicked: this.state.clicked + 1
    })
}


export default Article