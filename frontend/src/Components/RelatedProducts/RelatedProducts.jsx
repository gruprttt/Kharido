import React from 'react'
import './RelatedProduct.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'


const RelatedProducts = () => {
  return (
    <div>
        <h1>Related Products</h1>
        <hr/>
        <div className='relatedproducts-item'>
            {data_product.map((item , i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} onClick= {window.scrollTo(0,0)}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts