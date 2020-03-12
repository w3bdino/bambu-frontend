import React from 'react';
import Header from '../layout/header';
import Footer from '../layout/footer';
import Hellobambu from '../components/homepage/hellobambu';
import { Jumbotron, Button } from 'reactstrap';

const Homepage = (props) => {
  return (
    <>
      <Header />
      <Hellobambu />
      <Footer />
    </>
  );
};

export default Homepage;