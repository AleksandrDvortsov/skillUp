import React, { useState, useEffect } from 'react';
import { listPhotos } from './service';
import ListPhoto from './components/ListPhoto'
import './style.scss';

function Photos() {
    const [photos, changePhotos] = useState([]);

    useEffect(() => {
        listPhotos()
           .then((data) => {
                console.log(data);
                changePhotos(data);
            });
        
    }, []);



    return (
        
        <div id="photos">
           <ListPhoto id='photos' photos={photos}/>
        </div>
    )
}

export default Photos;
