import * as React from "react";
import '../../App.css';
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import imgBannerAPropos from "../../img/kalen-emsley-Bkci_8qcdvQ-unsplash_2.png"


export default function Propos () {
    return (
        <div className="App">
          <br></br>
          <Header/>
          <main>
            <Banner image={imgBannerAPropos}/>
          </main>
          <Footer/>
        </div>
      );
}

Propos();
