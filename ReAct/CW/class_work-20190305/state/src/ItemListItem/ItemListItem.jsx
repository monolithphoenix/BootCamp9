import React from 'react';
import PropTypes from 'prop-types';
import './ItemListItem.css';

const ItemListItem = ({phone, addToCart}) => {
    return (
        <div className="card">
            <img src={phone.img} alt="" className="card__img"/>
            <p className="card__rewiew">Отзывы {phone.reviews}</p>
            <p className="card__title">{phone.title}</p>
            <div className="buy">
                <p className="price">{phone.price} {phone.curency}</p>
                <img src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_1280.png" alt="cart" data-name={phone.title} onClick={addToCart}/>
            </div>
        </div>
    );
};

ItemListItem.propTypes = {
    phone: PropTypes.objectOf(
        PropTypes.shape({
            img: PropTypes.string.isRequired,
            reviews: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            curency: PropTypes.string.isRequired,
        })
    )
};

export default ItemListItem;