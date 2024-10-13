import * as React from 'react';
import Banner from '../Banner/Banner';
import '../Banner/Banner.css'
import imageBannerAccueil from "../../img/Mask_Group.png";
import ApartmentGrid from '../ApartmentGrid/ApartmentGrid';

export default function Main () {
    return  (
        <main>
            <Banner image={imageBannerAccueil} title="Chez vous et partout ailleurs"/>
            <ApartmentGrid/>
        </main>
    )
}