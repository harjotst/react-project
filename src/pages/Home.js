import React from 'react';

import Hero from "../components/Hero.js";
import Cards from '../components/Cards.js'
import Footer from '../components/Footer.js';

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Cards />
      <Footer />
    </React.Fragment>
  )
}

export default Home;