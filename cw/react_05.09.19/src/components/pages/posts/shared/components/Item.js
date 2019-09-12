import React from 'react';

function Item(props) {

    const {
        title,
        description,
        likes,
        user,
        data_create,
        data_update,
        checkFavorite,
        id
    } = props.post;

    const { 
        addFavorite, 
        removeFavorite, 
        changePostStats, 
        post 
    } = props;

    const changeHandler = (e) => {
        const check = e.target.checked;
        if(check) {
            addFavorite(post);
            changePostStats(id);
        }
        else {
            changePostStats(id);
            removeFavorite(id)
        }
    }

    const checkbox = addFavorite ? <input defaultChecked={checkFavorite} onClick={changeHandler} type="checkbox" /> : '';

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
