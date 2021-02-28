import React from 'react';
import { Link } from 'react-router-dom';

function Card({text, label, path, link}) {
  return (
    <React.Fragment>
      <li className='cards__item'>
        <Link className='cards__item__link' to={path}>
          <figure className='cards__item__pic-wrap' data-category={label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={link}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{text}</h5>
          </div>
        </Link>
      </li>
    </React.Fragment>
  );
}

export default Card;