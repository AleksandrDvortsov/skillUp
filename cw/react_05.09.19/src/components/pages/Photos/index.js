import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { listPhotos } from './service';
import ListPhoto from './components/ListPhoto'
import './style.scss';

function Photos(props) {

    const{photos} = props;

    useEffect(() => {
        // listPhotos()
        //    .then((data) => {
        //         console.log(data);
        //         changePhotos(data);
        //     });
        
    }, []);



    return (
        
        <div id="photos">
           <ListPhoto id='photos' photos={photos}/>
        </div>
    )
}

const mapDispatchToProps = dispatch => {

}

const mapStateToProps = state => {

    return {
        photos: state.photos.dataPhotos,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
