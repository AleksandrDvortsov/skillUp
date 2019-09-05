import React from 'react';

function Photo(props) {

    const { title, data_create, data_update, description, likes, user} = props.photo;

       return (
        <div className="photo">
            <input type='checkbox' />
            <i>{data_update}</i>
            <span>{likes}</span>
            <h2>{title}</h2>
            <p>{description}</p>
            <b>{user.name}</b>
        </div>
    )
}

export default Photo;
