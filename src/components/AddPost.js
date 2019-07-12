import React, { Component } from 'react'
import { connect } from 'react-redux';

export class AddPost extends Component {
    state = {
        title: '', 
        body: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newPost = {title: this.state.title, body: this.state.body}
        this.props.addPost(newPost)
        this.setState({
            title: '', 
            body: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange} value={this.state.title}/>
                    <label htmlFor="body">Body</label>
                    <input type="text" id="body" onChange={this.handleChange} value={this.state.body}/>
                    <button className="btn" style={{marginTop: '3em', marginBottom: '3em'}}>Submit</button>
                </form>
            </div>
        )
    }
}

const linkStateToProps = (state, ownProps) => {
    const id = 1
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapActionToProps = (dispatch) => {
    return {
        addPost: (post) => {
            dispatch({type: 'ADD_POST', post})
        }
    }
}

export default connect(linkStateToProps, mapActionToProps)(AddPost)
