import './App.css';
import { useState } from 'react';

function App() {
  const [showNav, setShowNav] = useState(false);

  const openNav = () => {
    setShowNav(true);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <>
      <div className={`container ${showNav ? 'show-nav' : ''}`}>
        <div className="circle-container">
          <div className="circle">
            <button id="close" onClick={closeNav}>
              <i className="fas fa-times"></i>
            </button>
            <button id="open" onClick={openNav}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        <div className="content">
          <h1>Artículo</h1>
          <small>Labrador Retriever</small>
          <p>
          El labrador es un perro grande, de constitución fuerte y buena estructura ósea y muscular. Tiene la cabeza ancha y una mirada dulce e inteligente. Su cola, parecida a la de las nutrias, es única. El pelaje es corto y denso y puede ser de color negro liso, amarillo o marrón. Los machos adultos miden entre 56 y 57 cm y pesan unos 30 kg. Las hembras miden entre 55 y 56 cm y pesan 28 kg.
          </p>

          <h3>Mi perro</h3>
          <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="doggy" />
          <p>
          El labrador es, sin lugar a duda, una de las tres razas preferidas a la hora de escoger una mascota para la familia... siempre que te gusta el ejercicio, claro. Son afables, tranquilos y cariñosos con todo el mundo. Son unos animales sociables y flexibles que se llevan bien con otros animales y con los niños, con los que muestran paciencia e indulgencia. Aun así, conviene no abusar de eso en extremo. Son enormemente fieles y les encanta sentirse incluidos en la familia, a todos los niveles. Ladrarán para advertir de la presencia de desconocidos, pero saldrán a recibirlos con los brazos abiertos.
          </p>
        </div>
      </div>

      <nav>
        <ul>
          <li><i className="fas fa-home"></i><a href="#"> Home</a></li>
          <li><i className="fas fa-user-alt"></i><a href="#"> About</a></li>
          <li><i className="fas fa-envelope"></i><a href="https://elias-piolatto.vercel.app/" target="_blank" rel="noreferrer"> Contact</a></li>
        </ul>
      </nav>
    </>
  );
}

export default App;

