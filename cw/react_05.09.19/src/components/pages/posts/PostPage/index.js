import React, { useEffect } from 'react';

import './style.scss';
import { getPost } from '../shared/service';

function PostPage(props) { 

    const [post, setPost] = useEffect({})

    const id = props.match.params.id;

    useEffect(()=>{
        getPost(id)
            .then(data => {
                setPost(data);
            })
    }, []);

    return (
        <div className="post-theme" id="post-page">
            <h2>HHH</h2>
        </div>
    )
}


export default PostPage;
