import React from "react";
import Navigation from '../Component/Navigation/Navigation.js';
import Header from '../Component/Header/Header';
import Customer from '../Component/Customer/Customer.js';
import Comment from '../Component/Comment/Comment.js';
import Footer from '../Component/Footer/Footer.js';
import "./Home.css";

const Home = () => {
  return (
    <div className="main">
      <Navigation />
      <Header />
      <Customer />
      <Comment />
      <Footer />
    </div>
  ); 
};

export default Home;
