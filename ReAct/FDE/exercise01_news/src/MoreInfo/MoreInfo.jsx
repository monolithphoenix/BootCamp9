import React from 'react';
// import PropTypes from 'prop-types';
import './MoreInfo.css';

const MoreInfo = ({article}) => {
    return (
        <article className='MoreInfo'>
            <p>{article.blocks.body[0].bodyTextSummary.split(' ').slice(0, 35).join(' ')}...</p>
            <a href={article.webUrl}>Read full news</a>
        </article>
    );
};

MoreInfo.propTypes = {
    
};

export default MoreInfo;