import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AddPost from './AddPost'

export class Home extends Component {
    render() {
        const {posts} = this.props;
        const postList = posts.length !== 0 ? posts.map(post => {
            return (
                <div className="container" key={post.id}>
                    <Link to={`/${post.id}`}>
                        <div className="card">
                            <div className="card-content">
                                <div className="card-title">
                                    {post.title}
                                </div>
                                <p>
                                    {post.body}
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }) : (
            <div className="container">
                <p>Still loading.....</p>
            </div>
        )
        return (
            <div>
                <h3 className="center">Home</h3>
                {postList}
                <div className="container center" style={{marginTop: '3em'}}>
                    <AddPost />
                </div>
            </div>
        )
    }
}

const linkStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(linkStateToProps)(Home)

