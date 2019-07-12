import React, { Component } from 'react'
import { connect } from 'react-redux';

export class PostDetails extends Component {
    handleClick = (e) => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/home');
    }

    render() {
        const {post} = this.props
        const postDetail = post ? (
            <div>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>Delete Post</button>
                </div>
            </div>
        ) : (
            <div>
                <h4>Still loading.....</h4>
            </div>
        )
        return (
            <div className="container">
                {postDetail}
            </div>
        )
    }
}

const linkStateToProps = (state, ownProps) => {
    const id = Number(ownProps.match.params.id)
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const linkActionToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch({type: 'DELETE_POST', id})
        }
    }
}

export default connect(linkStateToProps, linkActionToProps)(PostDetails)
