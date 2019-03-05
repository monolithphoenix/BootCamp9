import React from 'react';
import PropTypes from 'prop-types';
import './ItemList.css';
import ItemListItem from '../ItemListItem/ItemListItem';

const ItemList = ({phones, addToCart}) => {

    return (
        <div className="conteiner">
            {phones.map(el => <ItemListItem key={el.title} phone={el} addToCart={addToCart}/>)}
        </div>
    );
};

ItemList.propTypes = {
    phones: PropTypes.arrayOf(
        PropTypes.object,
    )
};

export default ItemList;