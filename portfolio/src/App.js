import Styles from'./App.module.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Project from './Components/project/project';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
    <div className={Styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
    </>
  );
}

export default App;
