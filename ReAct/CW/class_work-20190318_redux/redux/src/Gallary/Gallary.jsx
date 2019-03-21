import React from 'react';
import {connect} from 'react-redux';
import {asyncGallery} from '../redux/actions/galleryAction';
import './Gallary.css'

const Gallary = ({gallery, getGalleryData}) => {
    return (
        <div className="Gallary">
            <button onClick={getGalleryData}>Get Data</button>
            <div className="Gallary_conteiner">
                {gallery.map(el => <img src={el.previewURL}/>)}
            </div>
        </div>
    );
};

function MSTP(state) {
    return {
        gallery: state.gallery,
    }
}

function MDTP(dispatch) {
    return{
        getGalleryData: function() {
            dispatch(asyncGallery())
        }
    }
    
}

export default connect(MSTP, MDTP) (Gallary);