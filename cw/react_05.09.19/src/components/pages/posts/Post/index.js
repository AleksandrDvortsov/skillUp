import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import List from '../shared/components/List';
import { listPosts } from '../shared/service';
import '../shared/style.scss';

function Posts(props) {

    const {
        posts,
        setPostsAction,
        addFavoriteAction,
        removeFavoriteAction,
        changePostStatsAction
    } = props;

    useEffect(() => {
        listPosts()
            .then((data) => {
                // console.log(data);
                setPostsAction(data);
            });
    }, []);

    return (
        <div className="post-theme" id="posts">
            <List
                posts = {posts}
                addFavorite = {addFavoriteAction}
                removeFavorite = {removeFavoriteAction}
                changePostStats = {changePostStatsAction}
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setPostsAction: dataPosts => {
            dispatch({ type: 'SET_POSTS', dataPosts });
        },
        addFavoriteAction: post => {
            dispatch({ type: 'ADD_FAVORITE', post });
        },
        removeFavoriteAction: id => {
            dispatch({ type: 'REMOVE_FAVORITE', id });
        },
        changePostStatsAction: id => {
            dispatch({ type: 'CHANGE_POST_STATUS', id });
        }
    }
}

const mapStateToProps = state => {

    return {
        posts: state.posts.dataPosts,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
