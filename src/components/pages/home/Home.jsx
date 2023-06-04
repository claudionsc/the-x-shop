import React, { useContext, useState } from 'react'
import { Navbar } from '../../navbar/Navbar'
import CartContext from '../../contexts/CartAsideContext';
import { CartAside } from '../cart/cartAside/CartAside';
import '../../../styles/home.css'
import { MaisVendidos } from './sections/mais-vendidos/MaisVendidos';
import Slide from '../../Slide/Slide';
import { List } from './sections/ProductsHome/LoadProductsHome';
import { HomeFilters } from '../../HomeFilters/HomeFilters';
import {ProductsHome } from './sections/ProductsHome/ProductsHome'
import { showItems, showProducts } from '../../../store';
import { useDispatch } from 'react-redux';

export const Home = () => {

  const [items, setItems] = useState(List)

  const { cart, setCart } = useContext(CartContext);

  const dispatch = useDispatch()

  const handleAddCart = (item) => {
    
    dispatch(showItems(item))
  }

  const seePag = (item) => {
    dispatch(showProducts(item))
  }

  return (
    <main id='main'>
      <Navbar />

      <section id='lancamentos' >
        <h1>Lançamentos</h1>
        <Slide />
      </section>

      <section id='vendidos'>
        <h3>Mais vendidos</h3>
        <main className='vendidos'>
          <MaisVendidos nome={'maisvendidos01'} />
          <MaisVendidos nome={'maisvendidos02'} />
          <MaisVendidos nome={'maisvendidos03'} />
          <MaisVendidos nome={'maisvendidos03'} />
        </main>
      </section>

      <section id='produtos'>
        <HomeFilters />
        <main className='products-items'>
          
          {items.map(item => {
            return <ProductsHome 
            key={item.key} 
            id={item.id} 
            nome={item.nome} 
            preco={`R$ ${item.preco}`} 
            img={item.img.img01} 
            link={item.key}
            onClick={() => handleAddCart(item)} 
            verPag={() => seePag(item)}
            addcart={"Adicionar ao carrinho"}/>
          }

          )}
          
        </main>
      </section>

      {cart === true && <CartAside />}

    </main>
  )
}
