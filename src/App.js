/* eslint-disable react-hooks/exhaustive-deps */
// import "./App.css";
import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/footer";
import { DbContext } from "./Services/Context/Db";
import "./Styles/import.scss";
import Specification from "./Pages/Specification";

const App = () => {
  const user = useContext(DbContext);
  useEffect(async () => {
    user.getAll("wine");
    // user.getAll("article");
    // user.getAll("deal");
  }, []);
  console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route path="/shop/:type" render={(props) => <Shop {...props} />} />
        <Route path="/cart" render={(props) => <Cart {...props} />} />
        <Route path="/spec" render={(props) => <Specification {...props} />} />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
