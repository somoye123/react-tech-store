import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./socialData";
import { items } from "./productData";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 2,
    links: linkData,
    socialIcons: socialData,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTtoal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProduct: [],
    singleProduct: {},
    loading: true
  };
  // handle sidebar
  handleSidebar = _ => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  // handle cart
  handleCart = _ => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };
  // close cart
  closeCart = _ => {
    this.setState({ cartOpen: false });
  };
  // open cart
  openCart = _ => {
    this.setState({ cartOpen: true });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
