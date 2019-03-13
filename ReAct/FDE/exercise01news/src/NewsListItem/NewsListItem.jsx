import React from 'react';
// import PropTypes from 'prop-types';
import './NewsListItem.css';
import arrow from './arrow.png';
import MoreInfo from '../MoreInfo/MoreInfo';

const NewsListItem = ({news, article, showMoreInfo}) => {
    return (
        <li className='NewsListItem' >
            <div className={news.isHosted ? 'Blue' : null}>
                <h3 onClick={showMoreInfo} id={news.id} className="NewsListItem_title">{news.webTitle}</h3>
                <img src={arrow} alt="" onClick={showMoreInfo} id={news.id} className={news.isHosted ? 'Rotate' : null}/>
            </div>
            <div className={news.isHosted ? 'NewsListItem_article Show' : "NewsListItem_article"}>
                {article ? <MoreInfo article={article} /> : null}
                {/* {el.id === article.id ? <MoreInfo article={article} /> : null} */}
            </div>
        </li>
    );
};

NewsListItem.propTypes = {
    
};

export default NewsListItem;