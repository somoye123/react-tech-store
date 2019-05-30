import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Cart from "./pages/CartPage";
import Default from "./pages/Default";
import SingleProduct from "./pages/SingleProductPage";
import Contact from "./pages/ContactPage";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideBar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <>
        {/* navbar,sidebar,cart,footer */}
        <Navbar/>
        <SideBar/>
        <SideCart/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" exact component={Products} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
          <Route path="/products/:id" exact component={SingleProduct} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer/>
      </>
    );
  }
}

export default App;
