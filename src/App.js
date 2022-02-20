import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/navbar/NavBar';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import ProgressBar from './Components/MesComposants/Progressbar/ProgressBar';
import Descriptif from './Components/Descriptif/Descriptif';
import Skill from './Components/Skill/Skill';
import FadeInWhenVisible from './Components/MesComposants/Fade/FadeInWhenVisible';
import Formation from './Components/formation/Formation';
import Experience from './Components/Experience/Experience';
function App() {
  return (
    <>
      <NavBar />
      <Header />
      <FadeInWhenVisible>
        <section className="quisuisje" id = "quisuisje">
          <h1 > Qui suis-je ???</h1>
          <Descriptif/>
        </section>
      </FadeInWhenVisible>
      <section className="competences" id="competences">
        <h1 > Mes Competences</h1>
        <Skill/>
      </section>
      <section className="Formations" id="formations">
        <h1 > Mes Formations</h1>
        <Formation/>
      </section>
      <section className="Experience" id="experiences">
        <h1 > Mon Experience</h1>
        <Experience/>
      </section>
      <section className="language" id="language">
        <h3 className="section-title">Languages :</h3>
        <div className="prog">        
          <ProgressBar 
            params={{
              to:95,
              text:"French"
            }}
          />
          <ProgressBar
            params={{
              to:80,
              text:"English"
            }}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
