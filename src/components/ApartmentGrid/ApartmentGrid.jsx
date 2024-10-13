import React from 'react';
import { Link } from 'react-router-dom';
import "./ApartmentGrid.css";
import data from '../../data/logements.json';

export default function ApartmentGrid () {
    return (
        <div className="grille">
            {data.map((item) => (
                <div key={item.id} style={{ marginBottom: '20px', position: 'relative' }}>
                    <h2 style={{ position: 'absolute', padding: '10px', color: 'white' }}>
                        <Link to={`/Logements/${item.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                            {item.title}
                        </Link>
                    </h2>
                    <img 
                        src={item.cover} 
                        alt={`${item.title} cover`}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            ))}
        </div>
    );
}

