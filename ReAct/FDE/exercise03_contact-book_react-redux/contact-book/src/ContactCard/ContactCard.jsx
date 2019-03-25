import React from 'react';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';

import './ContactCard.css';

import {deleteCC} from '../redux/actions/saveContactCardAction';

const ContactCard = ({data, deleteCC}) => {
    return (
        <div className="ContactCard">
            <p className="ContactCard_name" tabIndex={-1} onKeyDown={e => console.log(e.key)}>{data.firstName}</p>
            <p>{data.tel}</p>
            <p>{data.email}</p>
            <svg data-id={data.id} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="ContactCard_svg edit">
                <path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z"/>
                {/* <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.994 12.964l3.106 3.105-4.112.931 1.006-4.036zm9.994-3.764l-5.84 5.921-3.202-3.202 5.841-5.919 3.201 3.2z"/> */}
            </svg>
            <svg data-id={data.id} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" className="ContactCard_svg delete" onClick={deleteCC}>
                <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/>
                {/* <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.094l-4.157-4.104 4.1-4.141-1.849-1.849-4.105 4.159-4.156-4.102-1.833 1.834 4.161 4.12-4.104 4.157 1.834 1.832 4.118-4.159 4.143 4.102 1.848-1.849z"/> */}
            </svg>
        </div>
    );
};

// ContactCard.propTypes = {
    
// };

const MDTP = (dispatch) => ({ 
    deleteCC: (e) => { 
        // console.log(e.target.nodeName);
        const id = (e.target.nodeName === "path" ? e.target.parentNode.dataset.id : e.target.dataset.id);
        console.log(id);
        dispatch(deleteCC(id));
    },
  })

export default connect(null, MDTP) (ContactCard);