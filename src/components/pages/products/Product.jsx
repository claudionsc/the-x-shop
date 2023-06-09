import React, { useContext, useEffect, useRef, useState } from 'react'
import { PDStyle } from './StyleProduct'
import { Tamanhos } from '../../FormTamanhos/Tamanhos'
import { Button } from '../../Button/Button'
import { NavCart } from '../../navbar/NavStyles'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import CartAsideContext from '../../contexts/cartAside/CartAsideContext'
import { CartAside } from '../cart/cartAside/CartAside'
import { NavbarAlt } from '../../navbar/NavbarAlt'
import { useDispatch, useSelector } from 'react-redux'
import { addSizeToProduct, showItems } from '../../../store'
import { useLocation, useNavigate } from "react-router-dom";

export const Product = () => {

  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);

  const { cart, setCart } = useContext(CartAsideContext);

  const dispatch = useDispatch()
  const product = useSelector((state) => state.product.product)
  const cartQtd = localStorage.getItem("cartTotal")


  const handleAddCart = (item) => {
    dispatch(showItems(item))
    setCart(true)
  }

  const navigate = useNavigate()


  const [disabledButton, setDisabledButton] = useState(true)

  const [showSize, setShowSize] = useState()

  const setSizeToCart = (item) => {
    setShowSize(item)
    dispatch(addSizeToProduct(item))
  }

  return (
    
    <main id='product-main'>

        <NavbarAlt onClickAlt={() => navigate(-1)}
          cart={
            <NavCart>
              <a onClick={() => setCart(true)}><p className='cartQtdPd'>{cartQtd}</p><AiOutlineShoppingCart /></a>
            </NavCart>
          } />

        <section id='product' sizeToCart={'teste'}  >
          <span className='product-img'>
            <img src={product.img.img01} alt={product.key} />
            <img src={product.img.img02} alt={product.key} />
            <img src={product.img.img03} alt={product.key} />
            <img src={product.img.img04} alt={product.key} />
          </span>
          <span className="product-desc">
            <div className="desc">
              <h1>{product.nome}</h1>
              <p> </p>
              <p>{`R$ ${product.preco}`}</p>
              <p>{`Escolha o seu tamanho: `}</p>
              <h3>{showSize}</h3>

              <Tamanhos onFocus={() => setDisabledButton(false)} sizes={product.tamanhos.map((item) => {
                return <button onClick={() => setSizeToCart(item)} className="tamanhos-btn" key={item} >{item}</button>
              })} />

              <Button className='add-cart-btn' disabled={disabledButton} onClick={() => handleAddCart(product)} addcart={'Adicionar ao carrinho'} />
            </div>


          </span>
        </section>

        {cart === true && <CartAside />}
    </main>
  )
}
