import React, { useState } from 'react';
import '../Caroussel/Caroussel.css';
import data from '../../data/logements.json';
import { useParams } from 'react-router-dom';

const Caroussel = () => {
    const { id } = useParams(); // Extraire l'ID de l'URL
    const item = data.find((item) => item.id === parseInt(id)); // Trouver l'élément correspondant

    const [currentIndex, setCurrentIndex] = useState(0); // Index de l'image actuelle

    if (!item) {
        return <p>Logement introuvable.</p>;
    }

    const pictures = item.pictures || [item.cover]; // Utiliser les images ou la couverture par défaut

    // Fonction pour passer à l'image suivante
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    // Fonction pour passer à l'image précédente
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    return (
        <main>
            <div className='TailleCaroussel'>
                <button onClick={prevImage} className="prev-button">◀</button>
                <div>
                    <img src={pictures[currentIndex]} alt={`${item.title}, ${currentIndex + 1}`} style={{ margin: 'auto', width: '100%', borderRadius: '30px', height: '400px', objectFit:'cover' }}
                    />
                </div>
                <button onClick={nextImage} className="next-button">▶</button>
            </div>
        </main>
    );
}

export default Caroussel;