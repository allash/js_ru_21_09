import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {

    static propTypes = {
        comment: PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            user: PropTypes.string.isRequired
        })
    }

    render() {
        const { comment } = this.props
        return (
            <div>
               <div>
                    <h4>{comment.user}</h4>
                    <p>{comment.text}</p>
                </div>
            </div>
        )
    }
}


export default Comment