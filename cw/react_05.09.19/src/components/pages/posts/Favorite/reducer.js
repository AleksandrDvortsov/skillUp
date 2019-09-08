const initialState = {
    name: 'FAVORITE',
    posts: [],
}

export default function (state = initialState, action) {
    
    const setFavorit = ( post, state ) => {
        const {posts} = state;
        const isPost = posts.find( p => p.id === post.id )

        if(isPost) return {
            ...state,
            posts: [
                ...state.posts,
                {...action.post}
            ]
        } 

        return state;
    }

    switch(action.type) {
        case 'ADD_FAVORITE': {
            return setFavorit(action.post, state);
        }
        default: return state;
    }
    
    return state;
}