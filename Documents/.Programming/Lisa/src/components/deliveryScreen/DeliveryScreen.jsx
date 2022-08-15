import React from 'react'
import './deliveryScreen.scss'
import img1 from '../../img/delivery.jpg'
import img2 from '../../img/box.png'

export default function DeliveryScreen() {
   return (
      <div className="delivery-screen">
         <div className="container container--wide">
            <div className="delivery-grid">
               <picture className='delivery-grid__item'>
                  <img src={img1} alt="first image" />
               </picture>
               <article className='delivery-grid__item'>
                  <h2>Упаковка</h2>
                  <p>Вы можете не переживать за сохранность своего заказа при пересылке его почтой или курьерской службой, потому что каждое изделие я бережно и надежно упаковываю перед отправкой.</p>
               </article>
               <article className='delivery-grid__item'>
                  <h2>Способы доставки</h2>
                  <p>Доставка курьерской службой СДЭК — от 300 рублей, рассчитывается индивидуально.

                     Доставка Почтой России — от 300 рублей, рассчитывается индивидуально.</p>
               </article>
               <picture className='delivery-grid__item'>
                  <div className="delivery-grid__imagebox">
                     <div className="delivery-grid__backround" />
                     <img src={img2} alt="second image" />
                  </div>


               </picture>

            </div>
         </div>
      </div>
   )
}
