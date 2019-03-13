import React from 'react';
// import PropTypes from 'prop-types';
import './NewsList.css';
import NewsListItem from '../NewsListItem/NewsListItem'

const NewsList = ({news, article, showMoreInfo}) => {
    return (
        <ul className='NewsList'>
            {news.map(el => <NewsListItem key={el.id} news={el} article={article.find(le => le.id === el.id)} showMoreInfo={showMoreInfo} />)}
        </ul>
    );
};

NewsList.propTypes = {
    
};

export default NewsList;