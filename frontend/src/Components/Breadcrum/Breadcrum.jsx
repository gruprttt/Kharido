import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
import { useNavigate } from 'react-router-dom'

    
 const Breadcrum = (props) => {
  const {product} = props;
  const navigate = useNavigate();
  return (
    <div className='breadcrum'>
     <span onClick={() => navigate('/')}>HOME </span> <img src={arrow_icon} alt='' /> <span>SHOP</span>  <img src={arrow_icon} alt='' /><span>{product.category}</span> <img src={arrow_icon} alt='' /><span>{product.name}</span>
    </div>
  )
 }

export default Breadcrum