import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'
import line2 from '../../img/line4.jpg'

// <div className="barpage-container">
//   <div className="bar-image">
//     {/* this is how you have to comment in React.  Must be inside Fragment */}
//     {/* anything inside the brackets can be JavaScript */}
//     <img className="bar-image" src={Lincoln} width='350px' height='400px' />
//   </div>
//   <div className="barpage-items">
//     <h1 className="barpage-name">{this.props.details.name}</h1>
//     <h3 className="barpage-details">{this.props.details.city}</h3>
//     <h5 className="barpage-details">{this.props.details.address}</h5>
//     <h5 className="barpage-details">Price to Enter: ${this.props.details.price}</h5>
//     <hr></hr>
//     <Button className="btn-large" id="skip-button">Buy The Pass</Button>
//   </div>
// </div>

class ProductPage extends React.Component {
  render () {
    return (
      <Fragment>
        <div className="product_page">
          <div className="product_page_container">

            <div className="product_page-photo">
              {/* this is how you have to comment in React.  Must be inside Fragment */}
              {/* anything inside the brackets can be JavaScript */}
              <img className="product_page-photo" src={line2} />
            </div>

            <div className="product_page-description">
              <p className="product_page-name">Test</p>
              <p className="product_page-city">Quincy</p>
              <p className="product_page-address">100 Adams Street</p>
              <p className="product_page-price">Daily LinePass: $25</p>
              <p className="product_page-price">Monthly LinePass: $25</p>
              <a className="btn btn--black" id="skip-button" style={{ color: '#D8C060' }}>Skip The Line</a>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ProductPage