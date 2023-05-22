import React from 'react'
import Banner from '../Banner/Banner';
import About from '../About/About';
import Cost from '../Cost/Cost';
import Issue from '../Issue/Issue';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import Suferer from '../Sufferer/Suferer';

const Home = () => {
  return (
    <div>
      {/* https://preview.themeforest.net/item/naar-fire-brigade-html-responsive-template/full_screen_preview/23153555 */}

      {/* web site link */}
        <Banner></Banner>
        <About></About>
        <Issue></Issue>
        <Cost></Cost>
        <Services></Services>
        <Suferer></Suferer>
        
    </div>
  )
}

export default Home;