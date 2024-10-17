import * as React from 'react';
import '../../sass/base.scss';
import './home.scss';
import homebg from '../../assets/home_bg.jpg';
import Banner from '../../components/Banner/banner';
import Card from '../../components/Cards/card';
import data from '../../assets/logements.json';

function Home() {

  document.title = 'Kasa - Home'

  
  return (
    <section className="home">
      <Banner
        cover={homebg}
        title={"Chez vous, partout et ailleurs"}
      />
      <div className="logement-card-container">
        {Array.isArray(data) && data.map((response) => (
          <Card
            link={`/logement/${response.id}`}
            key={response.id}
            cover={response.cover}
            title={response.title}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;