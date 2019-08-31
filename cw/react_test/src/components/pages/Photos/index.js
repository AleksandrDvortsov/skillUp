import React, { useState, useEffect} from 'react';
import {listPhotos} from './service';
import './style.scss';

function Photos() {

    const[photos, changePhotos] = useState([]);

    useEffect(()=>{
        // listPhotos()
        //     .then((data) => {
        //         console.log(data);
        //     })
            // changePhotos(array)
    })



    return (
        <div id="photos">
            <span>PHOTOS</span>
        </div>
    )
}

export default Photos;
