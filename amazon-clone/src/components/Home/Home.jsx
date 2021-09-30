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
        id="1231234"
        title="THE DAY OF THE JACKAL"
        price={9.95}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/81ZIglepHYL.jpg"
        />

      </div>
      <div className="home__row">
      <Product
        id="1231234"
        title="THE DAY OF THE JACKAL"
        price={9.95}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/81ZIglepHYL.jpg"
        />
    <Product
        id="1231234"
        title="THE DAY OF THE JACKAL"
        price={9.95}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/81ZIglepHYL.jpg"
        />
    <Product
        id="1231234"
        title="THE DAY OF THE JACKAL"
        price={9.95}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/81ZIglepHYL.jpg"
        />

      </div>
      <div className="home__row">
      <Product
        id="1231234"
        title="THE DAY OF THE JACKAL"
        price={9.95}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/81ZIglepHYL.jpg"
        /> 
      </div>
      
    </div>
  )
}
