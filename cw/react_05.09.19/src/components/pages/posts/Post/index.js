import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import List from '../shared/components/List';
import { listPosts } from '../shared/service';
import '../shared/style.scss';

function Posts(props) {

    const { 
        posts, 
        setPostsAction, 
        addToFavorite 
    } = props;

    useEffect(() => {
        listPosts()
            .then((data) => {
                console.log(data);
                setPostsAction(data);
            });
    }, []);

    return (
        <div className='post-theme' id="posts">
            <List 
            posts={posts} 
            addToFavorite={addToFavorite} 
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return { 
        setPostsAction: dataPosts => {
            dispatch({type: 'SET_POSTS', dataPosts});
        },
        addToFavorite: posts => {
            dispatch({type: 'ADD_FAVORITE', posts});
        }
    }
}

const mapStateToProps = state => {

    return {
        posts: state.posts.dataPosts,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
