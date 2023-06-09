import React from 'react'
import { PHStyled } from './StyleProductsHome'
import { Link } from 'react-router-dom'

export const ProductsHome = (props) => {

    return (
        <PHStyled className={props.className} id={props.id} onClick={props.verPag}  >
           
            <Link to={props.link} >
                <img src={props.img} className='img' />
            </Link>

            <div className="desc-product-home">
                <h5>{props.nome}</h5>
                <p>{props.preco}</p>
            </div>
        </PHStyled>
    )
}
