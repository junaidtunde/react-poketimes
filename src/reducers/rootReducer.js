const initState = {
    posts: [
        { id: 1, title: 'Squirtel laid an egg', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis distinctio deserunt facere autem sunt porro dolor odio, quam, corrupti magni laudantium nisi. Eum architecto totam a cumque labore amet eaque.'},
        { id: 2, title: 'Fire dragon laid an egg', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis distinctio deserunt facere autem sunt porro dolor odio, quam, corrupti magni laudantium nisi. Eum architecto totam a cumque labore amet eaque.'},
        { id: 3, title: 'Pokemon laid an egg', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis distinctio deserunt facere autem sunt porro dolor odio, quam, corrupti magni laudantium nisi. Eum architecto totam a cumque labore amet eaque.'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'ADD_POST') {
        action.post.id = state.posts.length + 1;
        return {
            ...state,
            posts: [...state.posts, action.post]
        }
    }
    if (action.type === 'DELETE_POST') {
        const newPosts = state.posts.filter(post => post.id !== action.id)
        return {
            ...state,
            posts: newPosts
        }
    }
    return state
}

export default rootReducer

