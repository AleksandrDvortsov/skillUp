import React from 'react';

function Item(props) {

    const {
        title,
        description,
        likes,
        user,
        id,
        data_create,
        data_update,
    } = props.post;

    const { addToFavorite, post } = props;
    

    const add = () => {
        
        addToFavorite(post);
    }
    const checkbox = addToFavorite ? <input onClick = { add } type="checkbox" /> : '';

    return (
        <div className="post">
            {checkbox}
            <i>{data_update}</i>
            <span>{likes}</span>
            <h1>{title}</h1>
            <p>{description}</p>
            <b>{user.name}</b>
        </div>
    )
}

export default Item;
