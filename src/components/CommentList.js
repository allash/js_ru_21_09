import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment'

class CommentList extends Component {
    
    state = {
        isOpen: false
    }

    static defaultProps = {
        comments: []
    }

    static propTypes = {
        comments: PropTypes.array.isRequired
    }

    toggleComment = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        const commentsSectionStyle = { marginLeft: 50 }
        const {comments} = this.props
        
        if (!comments.length) {
            return <div>No comments yet</div>
        }

        const commentsSection = comments.map( (comment) => 
                <Comment key={comment.id} 
                         comment={comment} />)

        return (
            <div className='comments-section' style={commentsSectionStyle}>
                 <button onClick={this.toggleComment}>{this.state.isOpen ? 'close' : 'open'}</button>
                {this.state.isOpen && commentsSection}
            </div>
        )
    }
}


export default CommentList;