import React from 'react';
import { useHistory } from 'react-router';
import './styles.css';

const EmptyCart = () => {
  const history = useHistory();
  return (
    <div className='emptyCart'>
      <img src='https://cdn-icons-png.flaticon.com/512/3144/3144456.png' alt='' />
      <button onClick={() => history.push('/')}>
        <i className='fas fa-long-arrow-alt-left'></i> Trở về cửa hàng
      </button>
    </div>
  );
};

export default EmptyCart;