import * as React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Card.css';
import data from '../../data/logements.json';
import Caroussel from '../Caroussel/Caroussel';

export default function Card () {

    const selectedItem = data[0];

    return (
        <div className="App">
        <Header/>
        <Caroussel/>
            <div className="tailleCard">
                <div style={{ margin: 'auto', position: 'relative', display: 'flex' }}>
                    <div style={{ width: '90%', margin: '10px' }}>
                        <h2 style={{ padding: '10px', fontFamily: 'Montserrat', fontSize: '36px', fontWeight: '500', lineHeight: '51.34px', textAlign: 'left', color: '#ff6080'}}>{selectedItem.title}</h2>
                        <h3 style={{ fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '500', lineHeight: '25.67px', textAlign: 'left', color: '#ff6080' }}>Ile de France - Paris 17e</h3>
                        <div style={{ display: 'flex', width: '250px', justifyContent: 'space-around' }}>
                            <p style={{ width: '115px', height: '25px', gap: '0px', borderRadius: '10px', opacity: '0px', backgroundColor:'#ff6060', color:'white', textAlign: 'center', alignItems: 'center'}}>Batignolle</p>
                            <p style={{ width: '115px', height: '25px', gap: '0px', borderRadius: '10px', opacity: '0px', backgroundColor:'#ff6060', color:'white', textAlign: 'center', alignItems: 'center'}}>Montmartre</p>
                        </div>
                        <div style={{ width: '400px', height: '52px', padding: '0px 12px 53px 20px', gap: '0px', borderRadius: '5px',opacity: '0px', backgroundColor:'#ff6060', height: '10px' }}>
                            <h2 style={{ color: 'white' }}>Description</h2>
                        </div>
                    </div>
                    <div style={{ width: '90%', margin: '10px', textAlign:'right' }}>
                        <h2 style={{ padding: '10px', fontFamily: 'Montserrat', fontSize: '36px', fontWeight: '500', lineHeight: '51.34px', color: '#ff6080'}}>{selectedItem.title}</h2>
                        <h3 style={{ fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '500', lineHeight: '25.67px', color: '#ff6080' }}>Ile de France - Paris 17e</h3>
                        <div style={{ display: 'flex', width: '430px', flexDirection:'row-reverse' }}>
                            <p style={{ width: '115px', height: '25px', gap: '0px', borderRadius: '10px', opacity: '0px', backgroundColor:'#ff6060', color:'white', textAlign: 'center', alignItems: 'center'}}>Batignolle</p>
                            <p style={{ width: '115px', height: '25px', gap: '0px', borderRadius: '10px', opacity: '0px', backgroundColor:'#ff6060', color:'white', textAlign: 'center', alignItems: 'center'}}>Montmartre</p>
                        </div>
                        <div style={{ width: '400px', height: '52px', padding: '0px 12px 53px 20px', gap: '0px', borderRadius: '5px',opacity: '0px', backgroundColor:'#ff6060', height: '10px' }}>
                            <h2 style={{ color: 'white' }}>Description</h2>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    )
}