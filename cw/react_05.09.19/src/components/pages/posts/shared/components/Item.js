import React from 'react';
import {Link} from 'react-router-dom'

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
        post,
        likPost 
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

    const like = () => {
        likPost(props.post)
    }

    const checkbox = addFavorite ? <input defaultChecked={checkFavorite} onClick={changeHandler} type="checkbox" /> : '';
    const span = likPost ? <span onDoubleClick={like}>{likes}</span> : '';

    return (
        <div className="post">
            {checkbox}
            <i>{data_update}</i>
            {span}
            <h1>{title}</h1>
            <p>{description}</p>
            <b>{user.name}</b>
            <br/>
            <Link to={`/post/${id}`} >Details ...</Link>
        </div>
    )
}

export default Item;
