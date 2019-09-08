import React from 'react';
import Item from './Item';

function List({ posts, addToFavorite }) {
    return posts.map(post => 
        <Item 
        key={post.id} 
        post={post} 
        addToFavorite = {addToFavorite}
        />);
}

export default List;
