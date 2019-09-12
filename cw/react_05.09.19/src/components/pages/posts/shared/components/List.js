import React from 'react';
import Item from './Item';

function List({ 
    posts, 
    addFavorite, 
    removeFavorite, 
    changePostStats 
}) {
    return posts.map(post =>
        <Item
            key = {post.id}
            post = {post}
            addFavorite = {addFavorite}
            removeFavorite = {removeFavorite}
            changePostStats = {changePostStats}
        />
    );
}

export default List;
