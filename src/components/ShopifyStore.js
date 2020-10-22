import React from 'react'
import StoreContext from 'gatsby-plugin-shopify-buy'

class StoreInfo extends React.Component {
  state = {
    shopName: null,
  }

  fetchInfo = () => {
    const { client } = this.props

    client.shop.fetchInfo().then(
      shop => {
        this.setState({
          shopName: shop.name,
        })
      }
    ).catch(console.error)

    client.product.fetchByHandle('t-shirt-mit-deinsign-logo').then(
      product => {
        this.setState({
          product
        })
      }
    ).catch(console.error)
  }

  componentDidMount() {
    this.fetchInfo()
  }

  render() {
    const { shopName, product } = this.state
    console.log(product)
    return (
      <>
        <h2>{ shopName || 'loading...' }</h2>
        { product ?
          <img src={product.images[0].src} alt="T-Shirt" />
        :
          'loading...'
        }
      </>
    )
  }
}

const StoreInfoContainer = () => (
  <StoreContext.Consumer>
    { context => (
      <StoreInfo
        client={context.client}
      />
    ) }
  </StoreContext.Consumer>
)

export default StoreInfoContainer