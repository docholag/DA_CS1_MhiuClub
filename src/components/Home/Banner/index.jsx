import React from 'react';
import './styles.css';
import bannerImg from './banner.png';
import Logo from '../../common/Logo';

const Banner = ({ handleScrollMenu }) => (
  <header>
    <div className='header-content'>
      <Logo />
      <div className='content-main'>
        <h1>Món ngon cho cơn thèm của bạn</h1>
        <p>We made fresh and healthy meals with different recipes</p>
        <button onClick={handleScrollMenu}>
          Xem menu <i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
    </div>
    <img className='header-img' src={bannerImg} alt='banner' />
  </header>
);

export default Banner;