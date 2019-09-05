import React from 'react';
import Photo from './Photo'

function ListPhoto(props) {

    const { photos } = props;

       return photos.map(photo => <Photo key={photo.id} photo={photo}/>)
}

export default ListPhoto;
