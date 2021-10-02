import React from 'react'
import './Home.css';
import Product from '../Product/Product';

export default function Home() {
  return (
    <div className="home">

      <img
        className="homeImg"
        src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-D-6bababd9-ff42-407e-8e71-b6b0012e8def._CB417386616_QL85_V1_.jpg"
        alt="homeBanner"></img>
      
      <div className="home__row">
      <Product
        id="1231234"
        title="THE DAY OF THE JACKAL"
        price={9.95}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/81ZIglepHYL.jpg"
        />
      <Product
        id="1231235"
        title="PLAYSTATION 5"
        price={499.95}
        rating={5}
        image="https://c1.neweggimages.com/ProductImage/68-110-294-V01.jpg"
        />

      </div>
      <div className="home__row">
      <Product
        id="1231236"
        title="ADIDAS TRACKSUIT"
        price={89.95}
        rating={5}
        image="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9f61aab9d1094fb6bb43ad23006d8df9_9366/Adicolor_Classics_Beckenbauer_Primeblue_Track_Jacket_Black_H09112_21_model.jpg"
        />
    <Product
        id="1231237"
        title="DONDA BY KANYE WEST"
        price={10.95}
        rating={5}
        image="https://media.pitchfork.com/photos/612d1c25862caf19adae9922/1:1/w_320/Kanye-West-Donda.jpeg"
        />
    <Product
        id="1231238"
        title="PROFESSIONAL ALUMINUM NONSTICK FRY PAN"
        price={30.29}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/71tKs2E3eJL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        />

      </div>
      <div className="home__row">
      <Product
        id="1231239"
        title="YAMAHA YPT260 61-KEY PORTABLE KEYBOARD"
        price={129.99}
        rating={5}
        image="https://m.media-amazon.com/images/I/71wS-8UHQ5L._AC_SL1500_.jpg"
        /> 
      </div>
      
    </div>
  )
}
