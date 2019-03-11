import React from 'react';
// import PropTypes from 'prop-types';
import './NewsListItem.css';
import './arrow.png'
import MoreInfo from '../MoreInfo/MoreInfo';

const NewsListItem = ({el, article, showMoreInfo}) => {
    return (
        <li className='NewsListItem' id={el.id}>
            <div>
                <h3 onClick={showMoreInfo}>{el.webTitle}</h3>
                <img src="./arrow.png" width="20" alt=""/>
            </div>
            {el.id === article.id ? <MoreInfo article={article} /> : null}
        </li>
    );
};

NewsListItem.propTypes = {
    
};

export default NewsListItem;